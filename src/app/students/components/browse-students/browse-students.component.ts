import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-browse-students',
  templateUrl: './browse-students.component.html',
  styleUrls: ['./browse-students.component.scss']
})
export class BrowseStudentsComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  columnsToDisplay = ["firstName", "lastName"];
  dataSource: MatTableDataSource<Student>;

  constructor(public studentService: StudentService) { 
    this.dataSource = new MatTableDataSource(studentService.students);
    this.dataSource.filterPredicate = (student, filter) => new RegExp(filter, "i").test(student.firstName);
    // this.dataSource.filterPredicate = (student, filter) => student.firstName.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  onSearchChange(et: EventTarget | null) {
    this.dataSource.filter = (<HTMLInputElement>et)?.value;
  }
}
