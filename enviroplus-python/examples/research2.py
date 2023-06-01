#!/usr/bin/env python3

import os
import time
import numpy
import colorsys
from PIL import Image, ImageDraw, ImageFont, ImageFilter
from fonts.ttf import RobotoMedium as UserFont

import ST7735
from bme280 import BME280
from ltr559 import LTR559

import pytz
from pytz import timezone
from astral.geocoder import database, lookup
from astral.sun import sun
from datetime import datetime, timedelta

try:
    from smbus2 import SMBus
except ImportError:
    from smbus import SMBus

def get_cpu_temperature():
    with open("/sys/class/thermal/thermal_zone0/temp", "r") as f:
        temp = f.read()
        temp = int(temp) / 1000.0
    return temp


def correct_humidity(humidity, temperature, corr_temperature):
    dewpoint = temperature - ((100 - humidity) / 5)
    corr_humidity = 100 - (5 * (corr_temperature - dewpoint))
    return min(100, corr_humidity)


def analyse_pressure(pressure, t):
    global time_vals, pressure_vals, trend
    if len(pressure_vals) > num_vals:
        pressure_vals = pressure_vals[1:] + [pressure]
        time_vals = time_vals[1:] + [t]

        # Calculate line of best fit
        line = numpy.polyfit(time_vals, pressure_vals, 1, full=True)

        # Calculate slope, variance, and confidence
        slope = line[0][0]
        intercept = line[0][1]
        variance = numpy.var(pressure_vals)
        residuals = numpy.var([(slope * x + intercept - y) for x, y in zip(time_vals, pressure_vals)])
        r_squared = 1 - residuals / variance

        # Calculate change in pressure per hour
        change_per_hour = slope * 60 * 60
        # variance_per_hour = variance * 60 * 60

        mean_pressure = numpy.mean(pressure_vals)

        # Calculate trend
        if r_squared > 0.5:
            if change_per_hour > 0.5:
                trend = ">"
            elif change_per_hour < -0.5:
                trend = "<"
            elif -0.5 <= change_per_hour <= 0.5:
                trend = "-"

            if trend != "-":
                if abs(change_per_hour) > 3:
                    trend *= 2
    else:
        pressure_vals.append(pressure)
        time_vals.append(t)
        mean_pressure = numpy.mean(pressure_vals)
        change_per_hour = 0
        trend = "-"

    # time.sleep(interval)
    return (mean_pressure, change_per_hour, trend)


def describe_pressure(pressure):
    """Convert pressure into barometer-type description."""
    if pressure < 970:
        description = "storm"
    elif 970 <= pressure < 990:
        description = "rain"
    elif 990 <= pressure < 1010:
        description = "change"
    elif 1010 <= pressure < 1030:
        description = "fair"
    elif pressure >= 1030:
        description = "dry"
    else:
        description = ""
    return description


def describe_humidity(humidity):
    """Convert relative humidity into good/bad description."""
    if 40 < humidity < 60:
        description = "good"
    else:
        description = "bad"
    return description


def describe_light(light):
    """Convert light level in lux to descriptive value."""
    if light < 50:
        description = "dark"
    elif 50 <= light < 100:
        description = "dim"
    elif 100 <= light < 500:
        description = "light"
    elif light >= 500:
        description = "bright"
    return description

# Set up BME280 weather sensor
bus = SMBus(1)
bme280 = BME280(i2c_dev=bus)

min_temp = None
max_temp = None

factor = 0.85
cpu_temps = [get_cpu_temperature()] * 5

# Set up light sensor
ltr559 = LTR559()

# Pressure variables
pressure_vals = []
time_vals = []
num_vals = 1000
interval = 1
trend = "-"

# Keep track of time elapsed
start_time = time.time()

while True:
    path = os.path.dirname(os.path.realpath(__file__))

    # Time.
    time_elapsed = time.time() - start_time

    # Temperature
    temperature = bme280.get_temperature()

    # Corrected temperature
    cpu_temp = get_cpu_temperature()
    cpu_temps = cpu_temps[1:] + [cpu_temp]
    avg_cpu_temp = sum(cpu_temps) / float(len(cpu_temps))
    corr_temperature = temperature - ((avg_cpu_temp - temperature) / factor)

    if time_elapsed > 30:
        if min_temp is not None and max_temp is not None:
            if corr_temperature < min_temp:
                min_temp = corr_temperature
            elif corr_temperature > max_temp:
                max_temp = corr_temperature
        else:
            min_temp = corr_temperature
            max_temp = corr_temperature

    temp_string = f"{corr_temperature:.0f}°C"
    if min_temp is not None and max_temp is not None:
        range_string = f"{min_temp:.0f}-{max_temp:.0f}"
    else:
        range_string = "------"

    # Humidity
    humidity = bme280.get_humidity()
    corr_humidity = correct_humidity(humidity, temperature, corr_temperature)
    humidity_string = f"{corr_humidity:.0f}%"
    humidity_desc = describe_humidity(corr_humidity).upper()

    # Light
    light = ltr559.get_lux()
    light_string = f"{int(light):,}"
    light_desc = describe_light(light).upper()

    # Pressure
    pressure = bme280.get_pressure()
    t = time.time()
    mean_pressure, change_per_hour, trend = analyse_pressure(pressure, t)
    pressure_string = f"{int(mean_pressure):,} hPa"
    pressure_desc = describe_pressure(mean_pressure).upper()
    
    print("TEMP: ", temp_string)
    print("RANGE: ", range_string)
    print("HUM: ", humidity_string)
    print("DESC: ", humidity_desc)
    print("PRESS: ", pressure_string)
    print("DESC: ", pressure_desc)
    print("LIGHT: ", light_string)
    print("DESC:", light_desc, "\n\n\n\n\n")
    
    time.sleep(5)
