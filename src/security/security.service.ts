// const childProcess: ChildProcess = require('child_process');
const childProcess = require('child_process');

import { Injectable } from '@nestjs/common';
// import { ChildProcess } from 'child_process';

@Injectable()
export class SecurityService {

  private securityAppProcess;

  startSecurity(): boolean {
    try {
      console.log('Starting security app');

      // this.securityAppProcess = childProcess.spawn('node', ['/c/Users/coolw/resumeProjects/home-watcher-remake/test_child_process/app']);
      // this.securityAppProcess = childProcess.fork(`C:/Users/coolw/resumeProjects/home-watcher-remake/test_child_process/child.js`);

      // this.securityAppProcess = childProcess.fork(`C:/Users/coolw/resumeProjects/home-watcher-remake/test_child_process/app.js`);
      this.securityAppProcess = childProcess.fork(`C:/Users/coolw/resumeProjects/home-watcher-remake/test_child_process/child.js`);

      this.securityAppProcess.on('exit', function (code, signal) {
        console.log(`child process exited with code ${code} and signal ${signal}`);
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

      console.log('Security app has successfully been stopped');

      return true;
    } catch (error) {
      console.log('error', error);
      return false;
    }
  }
}
