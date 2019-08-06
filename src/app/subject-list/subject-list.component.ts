import { Component, OnInit } from '@angular/core';
import {SubjectService} from '../shared/subject/subject.service';

class Subject {
  name: string;
  subjectId: number;
}

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  subjects: Array<Subject>;

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.subjectService.getAll().subscribe((data) => {
      this.subjects = data;
    });
  }

}
