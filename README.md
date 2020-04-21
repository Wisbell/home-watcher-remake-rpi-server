# Home Watcher - Raspberry Pi Server

<p align="center">A <a href="http://nodejs.org" target="_blank">Node.js</a> server created with <a href="https://nestjs.com/" target="blank">Nest JS</a> to interface with the <a href="https://github.com/Wisbell/home-watcher-remake-pi" target="blank">Home Watcher Raspberry Pi Application</a></p>

## Description

Allows the front end <a href="https://github.com/Wisbell/home-watcher-remake-front-end" target="blank">Home Watcher Angular application</a> to start and stop the camera.

## Installation

```bash
$ npm install
```

## Running the app
**Both this server and the <a href="https://github.com/Wisbell/home-watcher-remake-pi" target="blank">Home Watcher Raspberry Pi Application</a> should be cloned in the same directory in order for the server to run.  The dependencies for the Home Watcher App should be installed as well before running the server.**

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

### Endpoints

- /ping &nbsp; *Responds with 'pong' if server is online*
- /security/start &nbsp; *Starts Camera*
- /security/stop &nbsp; *Stops Camera*
