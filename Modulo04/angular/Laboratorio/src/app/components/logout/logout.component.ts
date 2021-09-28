import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _authservice: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    sessionStorage.removeItem('userLogin');
    sessionStorage.removeItem('token');

    this._router.navigate(['/login']);
  }

  logoutCancel(){
    this._router.navigate(['/dashboard']);
  }

}
