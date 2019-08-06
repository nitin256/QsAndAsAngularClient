import { Component, OnInit } from '@angular/core';
import {AnswerService} from '../shared/answer/answer.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionService} from '../shared/question/question.service';

class Answer {
  content: string;
  answerId: number;
}

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css']
})
export class AnswerListComponent implements OnInit {
  answers: Array<Answer>;
  question: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private questionService: QuestionService,
              private answerService: AnswerService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.answerService.getAllAnswersForQuestionId(id).subscribe((answers: any) => {
          if (answers) {
            this.answers = answers;
            this.question.href = answers._links.self.href;
          } else {
            console.log(`Answer for id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  gotoList() {
    this.router.navigate(['/question-list']);
  }

}
