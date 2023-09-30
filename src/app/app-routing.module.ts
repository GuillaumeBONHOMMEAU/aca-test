import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseStudentsComponent } from './students/components/browse-students/browse-students.component';
import { EditStudentsComponent } from './students/components/edit-students/edit-students.component';

const routes: Routes = [
  {
    "path": "",
    "redirectTo": "browse",
    "pathMatch": "full"
  },
  {
    "path": "browse",
    "component": BrowseStudentsComponent
  },
  {
    "path": "edit",
    "component": EditStudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
