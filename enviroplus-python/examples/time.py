#!/usr/bin/env python3

import time

currenttime = time.localtime()
timestring = time.strftime("%Y-%m-%d %H:%M:%S", currenttime)
print(timestring)
