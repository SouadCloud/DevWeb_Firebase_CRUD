import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  email : string;
  password : string;
  constructor(public loginS : LoginService) { }

  ngOnInit() {
  }
  login (){

    this.loginS.signIn(this.email,this.password);
  }
  resetpassword(){
    this.loginS.resetpassword(this.email);
  }

}
