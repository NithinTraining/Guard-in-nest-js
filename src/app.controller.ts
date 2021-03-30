import { Controller, Get, SetMetadata, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Roles } from './roles.decorator';
import { RolesGuard } from './roles.guard';

@Controller()
@UseGuards(RolesGuard)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
 
  //@SetMetadata('roles','admin')
  @Roles('admin')
  getHello(): string {
    
     
     
    return this.appService.getHello();
  
}
@Get('cat')

getCat():string{
  return 'every one can access';
}
}
