import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserAuth } from '../../model/userAuth';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user: UserAuth = { name: '', pwd: '' };
  public error: string = '';

  constructor(
    private _userAuth: AuthService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(this.user.name);
    if (this._userAuth.login(this.user)) {
      this._router.navigate(['dashboard']);
    } else {
      //this._router.navigate(['home']);
      this.error = 'Incorrect username or password.';
    }
  }

  login(_user: UserAuth) {
    this.user.name = _user.name;
    this.user.pwd = _user.pwd;

    if (this._userAuth.login(this.user)) {
      this._router.navigate(['dashboard']);
    } else {
      //this._userAuth.logout();
      this._router.navigate(['home']);
    }
  }
}
