import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectQuestionsComponent } from './subject-questions.component';

describe('SubjectQuestionsComponent', () => {
  let component: SubjectQuestionsComponent;
  let fixture: ComponentFixture<SubjectQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
