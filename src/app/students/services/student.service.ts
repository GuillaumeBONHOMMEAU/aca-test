import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from './../models/student.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[];

  constructor() { 
    this.students = [
      new Student("Pierre", "Caillou"),
      new Student("Jean", "Casquette"),
      new Student("John", "Jaune"),
      new Student("Alexis", "Sept"),
      new Student("Jeanne", "Arc"),
    ];
  }

  public addStudent(student: Student) {
    this.students.push(student);
  }

  public removeStudent(student: Student) {
    this.students.splice(this.students.indexOf(student), 1);
  }

}
