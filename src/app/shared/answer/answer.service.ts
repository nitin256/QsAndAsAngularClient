import {FormBuilder, FormGroup} from '@angular/forms';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  public API = 'http://localhost:8080';
  public ANSWER_API = this.API + '/qadb/list-answers';

  constructor(private http: HttpClient) { }

  getAllAnswersForQuestionId(id: string) {
    return this.http.get(this.ANSWER_API + '/' + id);
  }
}
