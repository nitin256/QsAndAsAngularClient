import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  public API = 'http://localhost:8080';
  public QUESTION_API = this.API + '/qadb/list-questions';

  constructor(private http: HttpClient) { }

  getAll(id: number): Observable<any> {
    return this.http.get( 'http://localhost:8080/qadb/list-questions/' + id);
  }

  getAllQuestionForSubjectId(id: string) {
    return this.http.get(this.QUESTION_API + '/' + id);
  }

}
