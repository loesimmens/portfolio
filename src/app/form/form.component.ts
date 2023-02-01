import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
    "firstName": ["Harriet", Validators.required],
    "password": ["1234", Validators.required]
  })

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("Reactive form submitted");
    console.log(this.form.value);

    this.form.valueChanges
      .pipe(
        map((value) => {
          value.firstName = value.firstName ? value.firstName.toUpperCase() : "";
          return value;
        }),
        filter((value) => this.form.valid)
      )
      .subscribe((value) => {
        console.log("Reactive form valid value: vm = ",
          JSON.stringify(value));
      })
  }

  fullUpdate() {
    this.form.setValue({firstName: 'Partial', password: 'monkey'});
  }

  partialUpdate() {
    this.form.patchValue({firstName: 'Partial'});
  }

  reset () {
    this.form.reset();
  }
}
