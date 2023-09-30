import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseStudentsComponent } from './browse-students.component';

describe('BrowseStudentsComponent', () => {
  let component: BrowseStudentsComponent;
  let fixture: ComponentFixture<BrowseStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowseStudentsComponent]
    });
    fixture = TestBed.createComponent(BrowseStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
