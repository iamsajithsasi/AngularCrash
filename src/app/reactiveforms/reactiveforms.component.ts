import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss']
})
export class ReactiveformsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    userComment: new FormControl('', Validators.required)
  }
  );

  get userName() {
    return this.myForm.get('userName');
  }

}
