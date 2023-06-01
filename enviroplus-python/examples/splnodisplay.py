#!/usr/bin/env python

import pyaudio, math, time
import numpy as np

audio = pyaudio.PyAudio()
noisefloor = 1e12
increment = 0

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
	
while True:
	try:
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
		if increment % 5 == 0:
			print(decibels)
		increment += 1

	except KeyboardInterrupt:
		stream.stop_stream()
		stream.close()
		audio.terminate()
		quit()
