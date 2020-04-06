// const childProcess: ChildProcess = require('child_process');
const childProcess = require('child_process');

import { Injectable } from '@nestjs/common';
// import { ChildProcess } from 'child_process';

@Injectable()
export class SecurityService {

  private securityAppProcess;
  private pathToHomeWatcherCameraApp

  startSecurity(): boolean {
    try {
      console.log('Starting security app');

      this.securityAppProcess = childProcess.fork(`/home/pi/Home-Watcher-remake-PI/app.js`);

      this.securityAppProcess.on('exit', function (code, signal) {
        console.log(`Camera child process exited with code ${code} and signal ${signal}`);
      });

      this.securityAppProcess.on('message', (msg) => {
        console.log('Message from child', msg);
      });

      console.log('Security app has successfully been started');

      return true;
    } catch (error) {
      console.log('error', error);
      return false;
    }
  }

  stopSecurity(): boolean {
    try {

      console.log('Stopping security app');

      // https://nodejs.dev/how-to-exit-from-a-nodejs-program

      // process.kill(process.pid, 'SIGTERM')

      this.securityAppProcess.kill();
      this.securityAppProcess = null;

      console.log('Security app has successfully been stopped');

      return true;
    } catch (error) {
      console.log('error', error);
      return false;
    }
  }
}
