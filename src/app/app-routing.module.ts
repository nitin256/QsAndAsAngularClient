import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubjectListComponent} from './subject-list/subject-list.component';
import {SubjectQuestionsComponent} from './subject-questions/subject-questions.component';
import {SubjectAddComponent} from './subject-add/subject-add.component';
import {AnswerListComponent} from './answer-list/answer-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/subject-list', pathMatch: 'full'},
  {
    path: 'subject-list',
    component: SubjectListComponent
  },
  {
    path: 'subject-add',
    component: SubjectAddComponent
  },
  {
    path: 'subject-questions/:id',
    component: SubjectQuestionsComponent
  },
  {
    path: 'subject-save',
    component: SubjectAddComponent
  },
  {
    path: 'questions-list',
    component: SubjectQuestionsComponent
  },
  {
    path: 'answers-list/:id',
    component: AnswerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
