import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  code: FormArray;
  email: string;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const controls = [];
    for (let i = 0; i < 6; i++) {
      controls.push(['', [Validators.required]]);
    }
    this.code = this.fb.array(controls);
  }

  moveToNext(event) {
      let next = event.target.nextElementSibling;
      if (next) {
        next.focus();
      } else {
        event.target.blur();
      }
  }
}
