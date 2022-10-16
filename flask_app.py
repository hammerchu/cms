#!/usr/bin/python
from flask import Flask, render_template, Response, request, redirect, url_for, jsonify,  make_response
from flask_cors import CORS
import os
# import syspip
import logging
# from flask_socketio import SocketIO, send, Namespace, emit
# import socketio
# import eventlet
# import eventlet.wsgi
# eventlet.monkey_patch()
import time
from datetime import datetime
import subprocess
from subprocess import check_output, Popen, PIPE
from threading import Thread

import random
import shutil
# import folium
# import geocoder
# import requests
#
# Flask server to control user emails and web3 minting
#
#
#
app = Flask(__name__, static_url_path="", static_folder="static_")
app.config['SECRET_KEY'] = 'secret!'
CORS(app, support_credentials=True)


# log = logging.getLogger('werkzeug')
# log.disabled = False

# sio = SocketIO(app) # debug
# sio = socketio.Server() # production
# x= socketmain(sio)

STOP = False #global variable

@app.route('/')
def index():
    print('\n\n-------Showing index-------')

    return render_template('index.html')

@app.route('/static/tabs/Screens')
def redirectDashUrl():
    print('\n\n-------redirecting to index-------')

    return redirect('/')
@app.route('static/tabs/Channels')
def redirectDashUrl():
    print('\n\n-------redirecting to index-------')

    return redirect('/')
@app.route('static/tabs/Library')
def redirectDashUrl():
    print('\n\n-------redirecting to index-------')

    return redirect('/static/tabs/Library')

@app.route('/fromClient', methods = ['POST'])
def processClientRequest(env='UNIX'):
    '''
    This function  will
    '''
    maxCopy = 5
    assetsDir = '/home/hammer/boardClick/assets/master'
    dstDir = '/home/hammer/boardClick/assets/images'
    urlPath = '/assets/images'
    if(env != 'UNIX'):
        assetsDir = './assets/master'
        dstDir = './assets/images'
    # try:
    now = datetime.now().strftime("%Y-%m-%d-%H-%M-%S")
    # print(now)
    files = os.listdir(assetsDir)
    randomFiles = random.choices(files, k=4)
    # print(randomFiles)

    videoUrl = []
    os.makedirs(os.path.join(dstDir, now ), exist_ok=True) # create a dst folder named with timestamp

    dirList = os.listdir(dstDir)
    dirList.sort()
    print(f'*** Older dir to be removed: {dirList[0: len(dirList) - maxCopy]}')
    for item in dirList[0: len(dirList) - maxCopy]:
        shutil.rmtree(os.path.join(dstDir, item), ignore_errors=True) # do the rmdir action

    for f in randomFiles:
        shutil.copyfile(os.path.join(assetsDir, f), os.path.join(dstDir, now, f))
        videoUrl.append(os.path.join(urlPath, now, f))

    data = request.json # reserved for dev
    print(data)

    return { 'resp' : True , 'urls' : videoUrl, 'files': randomFiles, 'folderName': now}

    # except Exception as err:
    #     return { 'resp' : False , 'msg' : err}

# def getLocation():

#     # ip = geocoder.ip("me")
#     ip = geocoder.ip("10.142.16.32")
#     print(ip.city)
#     print(ip.latlng)
#     location = ip.latlng

#     map = folium.Map(location=location, zoom_start=15)
#     folium.CircleMarker(location=location, radius=50, color="red").add_to(map)
#     folium.Marker(location).add_to(map)

#     map.save("map.html")


def get_ip():
    response = requests.get('https://api64.ipify.org?format=json').json()
    return response["ip"]

def get_location(saveMap = False):
    ip_address = get_ip()
    response = requests.get(f'https://ipapi.co/{ip_address}/json/').json()
    location_data = {
        "ip": ip_address,
        "city": response.get("city"),
        "region": response.get("region"),
        "country": response.get("country_name"),
        "lat": response.get("latitude"),
        "lon": response.get("longitude"),
    }
    location = [location_data["lat"], location_data["lon"]]

    if saveMap:
        map = folium.Map(location=location, zoom_start=15)
        folium.CircleMarker(location=location, radius=50, color="red").add_to(map)
        folium.Marker(location).add_to(map)
        map.save("map.html")

    return location_data

if __name__ == '__main__':
    print('running flask')
    # processClientRequest('macOS')

    # _sendEmail('a4x64RkceiDOYaKD4hAs', 'E01')

    # _sendReminderEmail(wait=3, again=False)

    # sio.register_namespace(x)
    # app = socketio.Middleware(sio, app) # wsgi
    # eventlet.wsgi.server(eventlet.listen(('192.168.43.94', 8000)), app, debug=True)
    # eventlet.wsgi.server(eventlet.listen(('localhost', 8000)), app, debug=True)

    # app.run(host='0.0.0.0', port=8000, debug=True)
    resp = get_location(saveMap = True)

    # app.run()



