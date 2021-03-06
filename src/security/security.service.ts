const childProcess = require('child_process');

import { Injectable } from '@nestjs/common';

@Injectable()
export class SecurityService {

  public securityAppProcess = null;
  private pathToHomeWatcherCameraApp = `/home/pi/home-watcher-remake-pi/app.js`;

  startSecurity(): boolean {
    try {
      console.log('Starting security app');

      this.securityAppProcess = childProcess.fork(this.pathToHomeWatcherCameraApp);

      this.securityAppProcess.on('exit', function (code, signal) {
        console.log(`Camera child process exited with code ${code} and signal ${signal}`);
        this.securityAppProcess = null;
      });

      // TODO: This will probably be used during failed start ups.
      //        Make it work or delete it
      this.securityAppProcess.on('message', (msg) => {
        console.log('Message from child', msg);
      });

      // TODO: Only show this if succesful start up
      console.log('Security app has successfully been started');

      return true;
    } catch (error) {
      console.log('error', error);
      return false;
    }
  }

  stopSecurity(): boolean {
    try {
      if(this.securityAppProcess) {
        console.log('Stopping security app');

        // https://nodejs.dev/how-to-exit-from-a-nodejs-program
  
        // process.kill(process.pid, 'SIGTERM')
  
        this.securityAppProcess.kill();
        this.securityAppProcess = null;
  
        console.log('Security app has successfully been stopped');

        return true;
      }

      console.log('Security app is not running');
      return false;
      
    } catch (error) {
      console.log('error', error);
      return false;
    }
  }
}
