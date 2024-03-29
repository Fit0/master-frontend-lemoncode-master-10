import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class IdentityGuard implements CanActivate {
  constructor(private _router: Router, private _authService: AuthService) {}

  canActivate() {
    if (this._authService.isLogged()) {
      return true;
    } else {
      this._router.navigate(['login']);
      return false;
    }
  }
}
