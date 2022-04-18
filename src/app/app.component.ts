import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.form = this.fb.group({
      fullName: [''],
      email: [''],
      skills: this.fb.group({
        skill: [''],
        experience: [''],
        level: [''],
      })
    })
  }

  submitForm() {
    console.log(this.form.value)
  }
}
