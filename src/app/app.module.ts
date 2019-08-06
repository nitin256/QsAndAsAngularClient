import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { SubjectListComponent } from './subject-list/subject-list.component';
import {MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule} from '@angular/material';
import { SubjectQuestionsComponent } from './subject-questions/subject-questions.component';
import {FormsModule} from '@angular/forms';
import { SubjectAddComponent } from './subject-add/subject-add.component';
import { AnswerListComponent } from './answer-list/answer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectListComponent,
    SubjectQuestionsComponent,
    SubjectAddComponent,
    AnswerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
