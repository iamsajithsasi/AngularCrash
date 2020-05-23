import { Component, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { CourseList } from './app.service';

@Component({
  selector: 'app-root',
  // template: `
  //   <h1>{{getTitle()}}</h1>
  //   <ul>
  //     <li *ngFor="let course of courses">{{course}}</li>
  //   </ul>
  // `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angularcrash1';
  isActive = false;
  isFavorite = false;
  getTitle() {
    return this.title
  }
  // method 1
  courses = ['course1', 'course2', 'course3']
  // method 2
  // courses;
  // constructor() {
  //   let service = new CourseList();
  //   this.courses = service.getCourses();
  //   // tightly coupled should be avoided
  // }
  // method 3
  // courses;
  // constructor(service:CourseList) {
  //   this.courses = service.getCourses();
  //   // import the dependency in the module providers
  // }
  emailDefault = 'iamsajith@gmail.com';
  // event binding
  // onKeyUp($event) {
  //   console.log('(Event Binding) Enter was pressed with value', $event.target.value);
  // }
  // onKeyUp(email) {
  //   console.log('(Template variable) Enter was pressed with value', email);
  // }
  // two way biding
  email = 'example@gmail.com';
  onKeyUp() {
    console.log('(2 way binding) Enter was pressed with value', this.email);
  }
  // output emitter
  isFavoriteStatus() {
    console.log('Favorite changed');
  }
}
