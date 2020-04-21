# <p align="center">Home Watcher - Raspberry Pi Server</p>

<p align="center">A <a href="http://nodejs.org" target="_blank">Node.js</a> server created with <a href="https://nestjs.com/" target="blank">Nest JS</a> to interface with the <a href="https://github.com/Wisbell/home-watcher-remake-pi" target="blank">Home Watcher Raspberry Pi Application</a></p>

## Description

Allows the front end <a href="https://github.com/Wisbell/home-watcher-remake-front-end" target="blank">Home Watcher Angular application</a> to start and stop the camera.

## Installation

```bash
$ npm install
```

## Running the app
**<p>Both this server and the <a href="https://github.com/Wisbell/home-watcher-remake-pi" target="blank">Home Watcher Raspberry Pi Application</a> should be cloned in the same directory in order for the server to run.  The dependencies for the Home Watcher App should be installed as well before running the server.</p>**

```bash
# Commands must be run as root user in order for the
# server to run the Home Watcher application. (which
# communicates with the motion and camera modules,
# hence the necessary super user invocation)

# development
$ sudo npm run start

# watch mode
$ sudo npm run start:dev

# NOTE: Run 'npm run build' before running production
# production mode
$ sudo npm run start:prod
```

**Note: After Starting the app the production front end requires a secure (https) host/url to contact the server.  This can be done using <a href="https://github.com/bubenshchykov/ngrok#readme" target="blank">Ngrok</a> which can easily expose localhost to the web.**

```bash
npm install ngrok -g
ngrok http 8080
# For global install on Linux, you might need to run sudo npm install --unsafe-perm -g ngrok due to the nature of npm postinstall script.
# Example Response
# Session Status                online
# Session Expires               7 hours, 59 minutes
# Version                       2.3.35
# Region                        United States (us)
# Web Interface                 http://127.0.0.1:4040
# Forwarding                    http://2d72d5c3.ngrok.io -> http://localhost:3000
# Forwarding                    https://2d72d5c3.ngrok.io -> http://localhost:3000

# Connections                   ttl     opn     rt1     rt5     p50     p90
#                               0       0       0.00    0.00    0.00    0.00
```

### Endpoints

- /ping &nbsp; *Responds with 'pong' if server is online*
- /security/start &nbsp; *Starts Camera*
- /security/stop &nbsp; *Stops Camera*
