import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = ['course1', 'course2'];
  // courses = [];
  viewMode = 'Course1';
  courseList = [];

  loadCourse() {
    this.courseList = ['course1', 'course2'];
  }
  courseListTrack(index, courseList) {
    return courseList? courseList.id : undefined
  }
  constructor() { }

  ngOnInit(): void {
  }

}
