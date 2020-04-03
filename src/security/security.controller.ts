import { Controller, Get } from '@nestjs/common';
import { SecurityService } from './security.service';

@Controller('security')
export class SecurityController {
  constructor(private readonly securityService: SecurityService) {}

  @Get('start')
  start(): boolean {
    return this.securityService.startSecurity();
  }

  @Get('stop')
  stop(): boolean {
    return this.securityService.stopSecurity();
  }
}
