import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public authentif : AngularFireAuth, public router : Router, private toastr : ToastrService) { }

  
  signIn(email : string, password : string){
  return this.authentif.signInWithEmailAndPassword(email,password)
  .then((result) =>{
    this.router.navigate(['/']);
  }).catch((error)=>{
    console.log(error);
  });
  
  }

  signUp(email : string, password : string){
    return this.authentif.createUserWithEmailAndPassword(email,password)
    .then((result) =>{
      this.router.navigate(['login']);
    }).catch((error)=>{
      console.log(error);
    });
    
    }

  resetpassword(email : string){
    return this.authentif.sendPasswordResetEmail(email)
    .then(result =>{
      this.toastr.info('Consulter votre email','Reset Password')
    })

  }
  

}


