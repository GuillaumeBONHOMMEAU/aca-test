import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrls: ['./edit-students.component.scss']
})
export class EditStudentsComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  columnsToDisplay = ["firstName", "lastName", "delete"];
  dataSource: MatTableDataSource<Student>;
  studentForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required)
  });
  toast = Swal.mixin({
    toast: true,
    position: "bottom",
    timer: 2000,
    showConfirmButton: false,
    timerProgressBar: true,
    showCloseButton: true
  });

  constructor(private studentService: StudentService) { 
    this.dataSource = new MatTableDataSource(studentService.students);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  remove(student: Student) {
    Swal.fire({
      title: `Êtes-vous sûr de vouloir virer ${student.firstName} ${student.lastName} ?`,
      text: "Cette action est irréversible !",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Annuler",
      confirmButtonText: "Confirmer"
    }).then((result) => {
      if (result.isConfirmed) {
        this.studentService.removeStudent(student);
        this.dataSource.data = this.studentService.students;
        this.toast.fire({
          icon: "success",
          title: "Élève viré."
        });
      }
    });
  }

  submit() {
    if (this.studentForm.invalid) {
      this.toast.fire({
        icon: "error",
        title: "Veuillez remplir tous les champs requis."
      });
      return;
    }
    this.studentService.addStudent(new Student(
      this.studentForm.controls.firstName.value!,
      this.studentForm.controls.lastName.value!
    ));
    this.dataSource.data = this.studentService.students;
    this.studentForm.reset();
    this.toast.fire({
      icon: "success",
      title: "Élève ajouté."
    });
  }
  
}
