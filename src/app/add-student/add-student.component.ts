import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from '../shared/models/student';
import { StudentService } from '../shared/services/student.service';
import { ActivatedRoute, Router} from '@angular/router';

import { NgForm } from '@angular/forms';
import { ToastrModule,ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  
  public textAdd = "Add Student";
  public student = new Student();
  constructor( private studentService: StudentService, private route : ActivatedRoute, private router : Router, private toastr : ToastrService) { }
@ViewChild ('addForm', {static:false}) formAdd : NgForm;
  ngOnInit() : void{

 
    let id = this.route.snapshot.queryParams['idurl']
    if(id)
    {
      this.getStudent(id);
      this.textAdd = "Update Student";
      
    }
    
  }
  toastrSuccess() {

    if (this.textAdd == "Update Student"){

        this.toastr.success('Mise à jour éffectuée avec succès', this.textAdd, {timeOut : 3000});
    }
    else {
      
      this.toastr.success('Ajout éffectué avec succès', this.textAdd, {timeOut : 3000});

    }
  
  }
  toastrFailed() {

    if (this.textAdd == "Update Student"){

      this.toastr.error('Mise à jour echouée', this.textAdd, {timeOut : 3000});
    }
    else {
    
      this.toastr.error('Ajout echoué', this.textAdd, {timeOut : 3000});

    }
    
  }
 
  save() {
   
   if (!this.student.id)
    {
 
      this.studentService.AddStudent({ ...this.student }).then(res=>{
        this.toastrSuccess();
        this.formAdd.resetForm();
    })
  }
    else{
      this.studentService.updateStudent({...this.student}).then(res=>{
        this.toastrSuccess();
        /*this.router.navigateByUrl("all-students");*/

      })
      
    
    }

  }
  getStudent (id : string){
    
    this.studentService.getStudent(id).subscribe(res => {
 
        this.student = res.data() as Student,
        this.student.id = res.id;
        
    });
}
    

}
