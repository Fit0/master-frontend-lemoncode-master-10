import { Injectable } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { UserAuth } from '../model/userAuth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(userLogin: UserAuth): boolean {
    if (
      userLogin.name === 'master10@lemoncode.net' &&
      userLogin.pwd === '12345678'
    ) {
      sessionStorage.setItem('userlogin', userLogin.name);
      sessionStorage.setItem('token', 'asdfasfd');
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    sessionStorage.removeItem('userlogin');
    sessionStorage.removeItem('token');
  }

  isLogged(): boolean {
    if (sessionStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  getToken() {
    let token = sessionStorage.getItem('token');
    return token;
  }

  getUsername() {
    let userName = sessionStorage.getItem('userlogin');
    return userName;
  }
}
