import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ngx-localstorage';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public authentif : AngularFireAuth, public router : Router, private toastr : ToastrService, private localstorage : LocalStorageService) { }

  
  signIn(email : string, password : string){
  return this.authentif.signInWithEmailAndPassword(email,password)
  
  
  }

  signUp(email : string, password : string){
    return this.authentif.createUserWithEmailAndPassword(email,password);
    
    
    }

  resetpassword(email : string){
    return this.authentif.sendPasswordResetEmail(email)
    .then(result =>{
      this.toastr.info('Consulter votre email','Reset Password')
    })

  }
  estAuthentifie (){
    if (this.localstorage.get('user')){
      return true;
    }
    else{
      return false;
    }

  }
  logout(){
    this.localstorage.remove('user');
  }
  

}


