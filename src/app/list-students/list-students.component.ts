import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/services/student.service';
import { Student } from '../shared/models/student';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  constructor(private studentService: StudentService) { }
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
      title: 'E vous sûr ?',
      text: "Voulz vous supprimr l'étudiant!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui!'
    }).then((result) => {
      if (result.value) {
        this.studentService.deleteStudent(id);
        Swal.fire(
          'Supprimé!',
          'Etudiant supprimé.',
          'success'
        )
      }
    })
   

  }


}
