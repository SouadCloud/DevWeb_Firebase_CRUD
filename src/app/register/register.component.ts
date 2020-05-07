import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public loginS : LoginService ) { }
  email :string;
  password : string;
  ngOnInit() {
  }
  createUser(){

    this.loginS.signUp(this.email,this.password)


  }
}
