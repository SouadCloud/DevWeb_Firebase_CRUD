import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.css']
})
export class ResetPwdComponent implements OnInit {

  email : string;
  constructor(public loginS : LoginService, public router : Router, public toastr : ToastrService) { }

  ngOnInit() {
  }
  resetpassword(){
    this.loginS.resetpassword(this.email)
    .then(result =>{
      this.router.navigate(['/login']);
    })
    .catch(err => {
      this.toastr.error('Verify your address mail','Reset Password');
    }
    )


  }

}
