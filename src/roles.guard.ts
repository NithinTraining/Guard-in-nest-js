import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const user={
      name:"nithin",
      roles:['user']
    }
    const roles=this.reflector.get<string>('roles',context.getHandler())
    console.log(roles)
    if(!roles)
     {
       return true;
     }
    const requiredRoles='admin'
    if(!user.roles.includes(requiredRoles))
    {
return false;
    }
    return true;
  }
}
