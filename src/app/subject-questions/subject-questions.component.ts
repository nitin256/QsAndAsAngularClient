import { Component, OnDestroy, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {SubjectService} from '../shared/subject/subject.service';
import {NgForm} from '@angular/forms';
import {QuestionService} from '../shared/question/question.service';

class Subject {
  name: string;
  subjectId: number;
}


class Question {
  title: string;
  questionId: number;
  subject: Subject;
}

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-questions.component.html',
  styleUrls: ['./subject-questions.component.css']
})
export class SubjectQuestionsComponent implements OnInit, OnDestroy {
  questions: Array<Question>;
  subject: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private subjectService: SubjectService,
              private questionService: QuestionService
              ) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.questionService.getAllQuestionForSubjectId(id).subscribe((questions: any) => {
          if (questions) {
            this.questions = questions;
            this.subject.href = questions._links.self.href;
          } else {
            console.log(`Subject with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/subject-list']);
  }

}
