import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

      const aux = localStorage.getItem('_msu-permission');

      if (aux && aux === 'true') {
        return true;
      }

      this.router.navigate(['/login']);
      return false;
    }
}