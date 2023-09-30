import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowseStudentsComponent } from './students/components/browse-students/browse-students.component';
import { EditStudentsComponent } from './students/components/edit-students/edit-students.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { FrenchPaginator } from './app-paginator';

@NgModule({
  declarations: [
    AppComponent,
    BrowseStudentsComponent,
    EditStudentsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  providers: [
    {
      provide: MatPaginatorIntl, 
      useClass: FrenchPaginator
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
