import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SecurityService } from './security/security.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private securityService: SecurityService
  ) {}

  @Get('ping')
  ping(): string {
    return 'pong';
  }

  @Get('camera-status')
  cameraStatus(): string {
    if (this.securityService.securityAppProcess)
      return 'online';
      
    return 'offline';
  }
}
