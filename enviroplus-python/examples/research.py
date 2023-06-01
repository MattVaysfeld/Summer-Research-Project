#!/usr/bin/env python3

import time
import csv
import sys

from smbus import SMBus
from bme280 import BME280
#from enviroplus.noise import Noise
from ltr559 import LTR559

bme280 = BME280(i2c_dev=SMBus(1))
#noise = Noise()
ltr559 = LTR559()

# Calibrated from compensated-temperature.py
# Get the temperature of the CPU for compensation
def get_cpu_temperature():
	with open("/sys/class/thermal/thermal_zone0/temp", "r") as f:
		temp = f.read()
		temp = int(temp) / 1000.0
	return temp

# Tuning factor for compensation. Decrease this number to adjust the
# temperature down, and increase to adjust up
factor = 0.8

cpu_temps = [get_cpu_temperature()] * 5

# Calibrated from weather-and-light.py
def correct_humidity(humidity, temperature, corr_temperature):
    dewpoint = temperature - ((100 - humidity) / 5)
    corr_humidity = 100 - (5 * (corr_temperature - dewpoint))
    return min(100, corr_humidity)

file = open('csvtest.csv', 'w', newline='')
writer = csv.writer(file)
writer.writerow(["Temp","Hum","Press","Lux"])

increment = 0

# Main loop
try:
	while True:
		#Fix temperature
		cpu_temp = get_cpu_temperature()
		# Smooth out with some averaging to decrease jitter
		cpu_temps = cpu_temps[1:] + [cpu_temp]
		avg_cpu_temp = sum(cpu_temps) / float(len(cpu_temps))
		raw_temp = bme280.get_temperature()
		comp_temp = raw_temp - ((avg_cpu_temp - raw_temp) / factor)

		#Fix humidity
		hum = bme280.get_humidity()
		#comp_hum = correct_humidity(hum, raw_temp, comp_temp)

		#Pressure and light
		press = bme280.get_pressure()
		lux = ltr559.get_lux()
		
		#sound = noise.get_amplitude_at_frequency_range(20,8000)

		print("Temperature: ", comp_temp, " C")
		print("Humidity: ", hum, "%")
		print("Pressure: ", press, " hPa")
		print("Light: ", lux, " lux")
		#print("Noise: ", sound, "\n")

		if increment >= 5 and hum >= 0 and press >= 0 and lux >= 0:		
			writer.writerow([comp_temp,hum,press,lux])
		
		increment += 1
		
		time.sleep(1)

except KeyboardInterrupt:
	file.close()
	sys.exit(0)
