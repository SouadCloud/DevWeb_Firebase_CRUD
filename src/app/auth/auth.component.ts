import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-localstorage';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  email : string;
  password : string;
  constructor(public loginS : LoginService, public router : Router, public toastr : ToastrService,private localstroage : LocalStorageService) { }

  ngOnInit() {
  }
  login (){

    this.loginS.signIn(this.email,this.password)
    .then((result) =>{
      this.router.navigate(['all-students']);
      this.localstroage.set('user',result.user.email)
    }).catch((error)=>{
      this.toastr.error('Vérifier votre adresse mail')
    });
  }
  

}
