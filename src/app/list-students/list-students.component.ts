import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/services/student.service';
import { Student } from '../shared/models/student';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  constructor(private studentService: StudentService, private translate : TranslateService) { }
  students: Student[];

  ngOnInit() : void {

    this.getAllStudents();
  }
  getAllStudents(){

    this.studentService.getStudentsList().subscribe(data =>{
      this.students = data.map(e=>{
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Student
        };
      })
    });
  }
  delete(id : string){

    Swal.fire({
      title: this.translate.instant('sweetDialog.title'),
      text: this.translate.instant('sweetDialog.text'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: this.translate.instant('sweetDialog.Yes'),
      cancelButtonText: this.translate.instant('sweetDialog.No')
    }).then((result) => {
      if (result.value) {
        this.studentService.deleteStudent(id);
        Swal.fire(
          this.translate.instant('sweetDialog.titleRep'),
          this.translate.instant('sweetDialog.msgRep'),
          'success'
        )
      }
    })
   

  }


}
