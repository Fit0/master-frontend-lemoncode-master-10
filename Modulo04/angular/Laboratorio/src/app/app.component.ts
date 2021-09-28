import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'laboratorio';

  public name:string = '';
  public token: string ='';
  public login: boolean = false;

  constructor(private _authservice: AuthService){
    this.loadUser();
  }

  ngDoCheck(){
    this.loadUser();
  }
  loadUser(){
    this.login = this._authservice.isLogged();
  }
}
