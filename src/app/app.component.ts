import { Component, OnInit } from '@angular/core';
import { LoginService } from './shared/services/login.service';
import { LocalStorageService } from 'ngx-localstorage';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'crudFireBase';
  userConnected : string;
  constructor(public loginS : LoginService, private localstorage : LocalStorageService, private translate: TranslateService){
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
  }
  ngOnInit(){
    this.userConnected = this.localstorage.get('user');
    
  }
  logout(){
    this.loginS.logout();
  }
  switchLang(lang : string){
    this.translate.use(lang);
  }
  setTitle(event){
    console.log(event);
  }
}
