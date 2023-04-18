import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Address, fullName, validation } from '';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent {

  studentForm: FormGroup;
  // dataArray=[{}as validation]

  constructor(private fb: FormBuilder) { 


    this.studentForm = this.fb.group({
      name: this.fb.group({
        firstName: ['', Validators.required],
        middleName: '',
        lastName: ['', Validators.required]
      }),
      dob: ['', Validators.required],
      placeOfBirth: ['', [Validators.required,Validators.minLength(2)]],
      firstLanguage: ['', [Validators.required,Validators.minLength(2)]],
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
        phone: ['', [Validators.required,Validators.pattern(/^[0-9]\d*$/)]]
      }),
      emergencyContacts: this.fb.array([
        this.fb.group({
          relation: ['', [Validators.required]],
          number: ['', [Validators.required,Validators.pattern(/^[0-9]\d*$/)]]
        })
      ])
   
    });
  }

  onSubmit() {
    console.log(this.studentForm.value)

// if( (typeof this.name?.get('firstName')?.value == 'string' && typeof this.name?.get('middleName')?.value == 'string'&&
// typeof this.name?.get('lastName')?.value == 'string')&&
// (typeof this.studentForm.get('dob')?.value == 'object')
// ){


//       let sname:fullName={
//         firstName:this.name?.get('firstName')?.value,
//         middleName:this.name?.get('middleName')?.value,
//         lastName:this.name?.get('lastName')?.value,
//     }
//     let dob1 = this.studentForm.get('dob')?.value;
//     let pb = this.studentForm.get('placeOfBirth')?.value;
//     let fl = this.studentForm.get('firstLanguage')?.value;
//     let add:Address{
//       city:this.address.get('city')?.value,
//       state: this.,
//       country: this.,
//       pin: number
//     }
//    this.dataArray.push({
//     name: sname,
//     dob:dob1,
//     placeOfBirth:pb,
//     firstLanguage:fl,
//     address:
//    }
//    )
//   }
  }
  get emergencyContacts(){
    return this.studentForm.get('emergencyContacts') as FormArray
  }

  addEem() {
    this.emergencyContacts.push(this.fb.group({
      relation: ['', Validators.required],
      number: ['', [Validators.required,Validators.pattern(/^[0-9]\d*$/)]]
    }))
    }

    get name(){
      return this.studentForm.get('name')
    }
    get address(){
      return this.studentForm.get('address')
    }
    get placeOfBirth(){
      return this.studentForm.get('placeOfBirth')
    }
}
