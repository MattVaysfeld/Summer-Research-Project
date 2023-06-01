#!/usr/bin/env python3

import bme680
import math, time, csv
import numpy as np

try:
    sensor = bme680.BME680(bme680.I2C_ADDR_PRIMARY)
except IOError:
    sensor = bme680.BME680(bme680.I2C_ADDR_SECONDARY)

# These oversampling settings can be tweaked to
# change the balance between accuracy and noise in
# the data.

sensor.set_humidity_oversample(bme680.OS_2X)
sensor.set_pressure_oversample(bme680.OS_4X)
sensor.set_temperature_oversample(bme680.OS_8X)
sensor.set_filter(bme680.FILTER_SIZE_3)
sensor.set_gas_status(bme680.ENABLE_GAS_MEAS)

sensor.set_gas_heater_temperature(320)
sensor.set_gas_heater_duration(150)
sensor.select_gas_heater_profile(0)

# Open the CSV file and write the header
file = open('gasdata.csv', 'w', newline='')
writer = csv.writer(file)
writer.writerow(["Time", "Humidity", "kOhms", "IAQ"])

increment = 0

burn_in_data = []

# Main loop
try:
	print('5 minute sensor burn in time')
	while increment < 300:
		if sensor.get_sensor_data() and sensor.data.heat_stable:
			gas = sensor.data.gas_resistance
			burn_in_data.append(gas)
			increment += 1
			time.sleep(1)

	gas_baseline = sum(burn_in_data[-50:]) / 50.0

	# Set the humidity baseline to 40%, an optimal indoor humidity.
	hum_baseline = 40.0

	# This sets the balance between humidity and gas reading in the
	# calculation of air_quality_score (25:75, humidity:gas)
	hum_weighting = 0.25
    
	while True:
		if sensor.get_sensor_data() and sensor.data.heat_stable:
			gas = sensor.data.gas_resistance
			gas_offset = gas_baseline - gas

			hum = sensor.data.humidity
			hum_offset = hum - hum_baseline

			# Calculate hum_score as the distance from the hum_baseline.
			if hum_offset > 0:
				hum_score = (100 - hum_baseline - hum_offset)
				hum_score /= (100 - hum_baseline)
				hum_score *= (hum_weighting * 100)

			else:
				hum_score = (hum_baseline + hum_offset)
				hum_score /= hum_baseline
				hum_score *= (hum_weighting * 100)

			# Calculate gas_score as the distance from the gas_baseline.
			if gas_offset > 0:
				gas_score = (gas / gas_baseline)
				gas_score *= (100 - (hum_weighting * 100))

			else:
				gas_score = 100 - (hum_weighting * 100)

			# Calculate air_quality_score.
			iaq = hum_score + gas_score

			currenttime = time.localtime()
			timestring = time.strftime("%Y-%m-%d %H:%M:%S", currenttime)

			if increment > 0 and (increment % 900 == 0 or increment == 301):
		        # Print to terminal
				print("Time: ", timestring)
				print("Humidity: ", hum, "%")
				print("Gas: ", gas, " Ohm")
				print("Air quality: ", iaq, "%\n")

		        # Only write to the CSV after the sensors have warmed up and are not returning garbage values
				writer.writerow([timestring,round(hum,1),round(gas/1000,1),round(iaq,1)])
		increment += 1
		time.sleep(1)

# Properly exit the script
except KeyboardInterrupt:
	file.close()
	quit()
