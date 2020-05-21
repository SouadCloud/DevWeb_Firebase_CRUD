import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { StudentService } from './shared/services/student.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ListStudentsComponent } from './list-students/list-students.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'; 
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component'
import {NgxLocalStorageModule} from 'ngx-localstorage';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { PermissionGuard } from './shared/guards/permission.guard';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
const allroutes: Routes = [
{ path: 'add-student', component: AddStudentComponent, canActivate :[PermissionGuard] },
{ path: 'all-students', component: ListStudentsComponent, canActivate :[PermissionGuard] },
{ path: '', component: AuthComponent },
{ path: 'login', component: AuthComponent },
{ path: 'register', component: RegisterComponent},
{ path: 'resetpwd', component: ResetPwdComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    ListStudentsComponent,
    AuthComponent,
    RegisterComponent,
    ResetPwdComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot(),
    RouterModule.forRoot(allroutes),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireAuthModule,
    NgxLocalStorageModule.forRoot(),
    BsDropdownModule.forRoot(),
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
  ],
  providers: [StudentService,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
