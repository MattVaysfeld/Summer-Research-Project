#!/usr/bin/env python3

import pyaudio, math, time, csv
import numpy as np
from smbus import SMBus
from bme280 import BME280
from ltr559 import LTR559

bme280 = BME280(i2c_dev=SMBus(1))
ltr559 = LTR559()
audio = pyaudio.PyAudio()

# Get the temperature of the CPU for compensation
def get_cpu_temperature():
	with open("/sys/class/thermal/thermal_zone0/temp", "r") as f:
		temp = f.read()
		temp = int(temp) / 1000.0
	return temp
cpu_temps = [get_cpu_temperature()] * 5
# Tuning factor for compensation. Decrease this number to adjust the temperature down, and increase to adjust up
tuning = 0.8

# Needed variables and functions for noise
noisefloor = 1e12

def PCM_to_dbSPL(pcm):
	res = 0.0
	if pcm > 0:
		dbFS = 20*math.log10(pcm/0x1ffff)
		res = 120 +dbFS	
	return res
	
info = audio.get_default_host_api_info()

stream = audio.open(format=pyaudio.paInt32, 
					input_device_index = info['defaultInputDevice'],
					channels = 1,
					rate = 22000,
					input = True,
					frames_per_buffer=22000)

# Open the CSV file and write the header
file = open('outsidedata.csv', 'w', newline='')
writer = csv.writer(file)
writer.writerow(["Time", "Temperature", "Humidity", "Pressure", "Light", "Noise"])
# Increment factor for writing and printing
increment = 0

# Main loop
try:
	while True:
		# Noise
		sdata = stream.read(22000)
		idata = np.frombuffer(bytes(sdata),'<i4')
		fdata = idata.astype(float)
		vmax = (np.amax(fdata)) / 0x4000
		vmin = (np.amin(fdata)) / 0x4000
		DCoffset = (np.sum(fdata)) / (0x4000 * fdata.size)
		vmax_nodc = vmax - DCoffset
		vmin_nodc = vmin - DCoffset
		
		if abs(vmax_nodc) > abs(vmin_nodc): 
			vabs = abs(vmax_nodc)
		else:
			vabs = abs(vmin_nodc)
		if vabs < noisefloor:
			noisefloor = vabs	
		vfinal = vabs - noisefloor
		decibels = PCM_to_dbSPL(vfinal)
		decibels = round(decibels, 1)

		# Temperature
		cpu_temp = get_cpu_temperature()
		# Smooth out with some averaging to decrease jitter
		cpu_temps = cpu_temps[1:] + [cpu_temp]
		avg_cpu_temp = sum(cpu_temps) / float(len(cpu_temps))
		raw_cel = bme280.get_temperature()
		cel = raw_cel - ((avg_cpu_temp - raw_cel) / tuning)
		temp = (cel * 1.8) + 32
		temp = round(temp, 1)

		# Humidity, pressure, and light
		raw_hum = bme280.get_humidity()
		hum = (0.00163619*math.pow(raw_hum,3)) - (0.129849*math.pow(raw_hum,2)) + (3.82717*raw_hum) + 0.811041
		hum = min(100,hum)
		hum = round(hum, 1)
		
		press = bme280.get_pressure()
		press = round(press, 1)
		
		raw_lux = ltr559.get_lux()
		if raw_lux <= 2000:
			lux = (-0.000438334*math.pow(raw_lux,2)) + (1.96947*raw_lux) - 10.6034
			lux = max(0,lux)
		else:
			lux = raw_lux
		lux = round(lux, 1)

        # Time
		currenttime = time.localtime()
		timestring = time.strftime("%Y-%m-%d %H:%M:%S", currenttime)

		if increment > 0 and (increment % 900 == 0 or increment == 60):
            # Print to terminal
			print("Time: ", timestring)
			print("Temperature: ", temp, "*F")
			print("Humidity: ", hum, "%")
			print("Pressure: ", press, " hPa")
			print("Light: ", lux, " lux")
			print("Noise: ", decibels, " dB\n")

            # Only write to the CSV after the sensors have warmed up and are not returning garbage values
			if hum >= 0 and press > 0 and lux >= 0 and decibels > 0:
				writer.writerow([timestring,temp,hum,press,lux,decibels])
		increment += 1

# Properly exit the script
except KeyboardInterrupt:
	file.close()
	stream.stop_stream()
	stream.close()
	audio.terminate()
	quit()
