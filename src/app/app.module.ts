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

const allroutes: Routes = [
{ path: 'add-student', component: AddStudentComponent },
{ path: 'all-students', component: ListStudentsComponent },
{ path: '', component: ListStudentsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    ListStudentsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allroutes),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [StudentService,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
