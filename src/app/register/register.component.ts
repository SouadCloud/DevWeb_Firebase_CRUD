import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public loginS : LoginService, public router : Router ) { }
  email :string;
  password : string;
  ngOnInit() {
  }
  createUser(){

    this.loginS.signUp(this.email,this.password)
    .then((result) =>{
      this.router.navigate(['login']);
    }).catch((error)=>{
      
    });


  }
}
