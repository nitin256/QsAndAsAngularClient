import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  public API = 'http://localhost:8080';
  public SUBJECT_API = this.API + '/qadb/subject';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get( 'http://localhost:8080/qadb/list-subjects');
  }

  get(id: string) {
    return this.http.get(this.SUBJECT_API + '/' + id);
  }


}
