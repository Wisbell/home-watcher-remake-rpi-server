Nest JS Server setup run on load
// https://www.raspberrypi.org/documentation/linux/usage/systemd.md

1) Create service file
```
[Unit]
Description=Home Watcher Service
After=network.target

[Service]
ExecStart=/usr/local/bin/npm start
WorkingDirectory=/home/pi/home-watcher-remake-rpi-server
StandardOutput=inherit
StandardError=inherit
Restart=always
User=pi

[Install]
WantedBy=multi-user.target
```

2) Save file in "/etc/systemd/system/"

3) See link for further details, complete this later.
