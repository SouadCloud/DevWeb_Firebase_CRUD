import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private firestore: AngularFirestore) { }
  AddStudent(student:Student)
  {
    return this.firestore.collection('Students').add(student);

  }
  getStudentsList(){
    return this.firestore.collection('Students').snapshotChanges();
  }
  deleteStudent(studentId : string){
    this.firestore.doc('Students/' + studentId).delete();
  }
  getStudent(studentId : string){
    return this.firestore.doc('Students/' + studentId).get();
  }
  updateStudent(student){
    return this.firestore.doc('Students/' + student.id).update(student);
  }
}
