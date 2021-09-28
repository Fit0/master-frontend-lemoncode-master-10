import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public islogin: boolean = false;
  public nameUser: string | null = '';

  constructor(private _authservice: AuthService) {}

  ngOnInit(): void {
    this.userIslogin();
  }

  ngDoCheck(){
    this.userIslogin();
  }

  userIslogin() : void{
    this.islogin = this._authservice.isLogged();
    this.nameUser = this._authservice.getUsername();
  }
}
