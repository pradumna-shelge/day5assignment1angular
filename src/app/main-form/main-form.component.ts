import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent {

  studentForm: FormGroup;

  constructor(private fb: FormBuilder) { 


    this.studentForm = this.fb.group({
      name: this.fb.group({
        firstName: ['', Validators.required],
        middleName: '',
        lastName: ['', Validators.required]
      }),
      dob: ['', Validators.required],
      placeOfBirth: ['', Validators.required],
      firstLanguage: ['', Validators.required],
      address: this.fb.group({
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
        pin: ['', Validators.required]
      }),
      father: this.fb.group({
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        educationQualification: ['', Validators.required],
        profession: ['', Validators.required],
        designation: ['', Validators.required],
        phone: ['', Validators.required]
      }),
      mother: this.fb.group({
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        educationQualification: ['', Validators.required],
        profession: ['', Validators.required],
        designation: ['', Validators.required],
        phone: ['', Validators.required]
      }),
      emergencyContacts: this.fb.array([
        this.fb.group({
          relation: ['', Validators.required],
          number: ['', Validators.required]
        })
      ])
   
    });
  }

  onSubmit(): void {
    console.log(this.studentForm.value);
    
  }
  get emergencyContacts(){
    return this.studentForm.get('emergencyContacts') as FormArray
  }

  addEem() {
    this.emergencyContacts.push(this.fb.group({
      relation: ['', Validators.required],
      number: ['', Validators.required]
    }))
    }
}
