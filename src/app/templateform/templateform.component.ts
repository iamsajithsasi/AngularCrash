import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.scss']
})
export class TemplateformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dataList = ['Email', 'phone'];
  formNameFn(name) {    
    // console.log(name.value);
    // console.log(name);
  }
  formCommentFn(comment) {    
    // console.log(name.value);
    // console.log(comment);
  }
  formSubmission(data) {
    console.log(data);
  }

}
