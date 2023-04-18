import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Address,
  Controls,
  EmergencyContacts,
  fullName,
  Parent,
  validation,
} from 'src/validation';
// import { Address, fullName, validation } from '';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css'],
})
export class MainFormComponent {
  studentForm: FormGroup;
  dataArray: validation[] = [];

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        middleName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['', [Validators.required, Validators.minLength(3)]],
      }),
      dob: ['', Validators.required],
      placeOfBirth: ['', [Validators.required, Validators.minLength(2)]],
      firstLanguage: ['', [Validators.required, Validators.minLength(2)]],
      address: this.fb.group({
        city: ['', [Validators.required, Validators.minLength(2)]],
        state: ['', [Validators.required, Validators.minLength(2)]],
        country: ['', [Validators.required, Validators.minLength(2)]],
        pin: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$'),
          ],
        ],
      }),
      father: this.fb.group({
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        educationQualification: ['', Validators.required],
        profession: ['', Validators.required],
        designation: ['', Validators.required],
        phone: ['', Validators.required],
      }),
      mother: this.fb.group({
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        educationQualification: ['', Validators.required],
        profession: ['', Validators.required],
        designation: ['', Validators.required],
        phone: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
      }),
      emergencyContacts: this.fb.array([
        this.fb.group({
          relation: ['', [Validators.required]],
          number: ['', [Validators.required]],
        }),
      ]),
    });
  }

  vname(): fullName | boolean {
    if (
      typeof this.firstName?.value == 'string' &&
      typeof this.lastName?.value === 'string' &&
      typeof this.middleName?.value === 'string'
    ) {
      return {
        firstName: this.firstName?.value,
        middleName: this.middleName?.value,
        lastName: this.lastName?.value,
      };
    }
    return false;
  }

  vAddress(): Address | boolean {
    if (
      typeof this.city?.value == 'string' &&
      typeof this.state?.value === 'string' &&
      typeof this.country?.value === 'string' &&
      typeof this.pin?.value === 'string'
    ) {
      return {
        city: this.city?.value,
        state: this.state?.value,
        country: this.country?.value,
        pin: Number(this.pin?.value),
      };
    }
    return false;
  }
  vfather(): Parent | boolean {
    if (
      typeof this.fname?.value == 'string' &&
      typeof this.femail?.value === 'string' &&
      typeof this.feducationQualification?.value === 'string' &&
      typeof this.fprofession?.value === 'string' &&
      typeof this.fdesignation?.value === 'string' &&
      typeof this.fphone?.value === 'string'
    ) {
      return {
        fullName: this.fname?.value,
        email: this.femail?.value,
        educationQualification: this.feducationQualification?.value,
        profession: this.fprofession?.value,
        designation: this.fdesignation?.value,
        phone: Number(this.fphone?.value),
      };
    }
    return false;
  }

  vmother(): Parent | boolean {
    if (
      typeof this.mname?.value == 'string' &&
      typeof this.memail?.value === 'string' &&
      typeof this.meducationQualification?.value === 'string' &&
      typeof this.mprofession?.value === 'string' &&
      typeof this.mdesignation?.value === 'string' &&
      typeof this.mphone?.value === 'string'
    ) {
      return {
        fullName: this.mname?.value,
        email: this.memail?.value,
        educationQualification: this.meducationQualification?.value,
        profession: this.mprofession?.value,
        designation: this.mdesignation?.value,
        phone: Number(this.mphone?.value),
      };
    }
    return false;
  }

  onSubmit() {
    // let Array:EmergencyContacts[]=[{}as Controls ]
    // for(let i of   this.emergencyContacts.value)

    // {
    // Array.push({
    //   relation:i.relation,
    //   monumber:i.number
    //  })
    // }

    // console.log(this.studentForm.value)
    if (
      this.vname() &&
      this.vAddress() &&
      this.vfather() &&
      this.vmother() &&
      typeof this.dob?.value == 'string' &&
      typeof this.placeOfBirth?.value == 'string' &&
      typeof this.firstLanguage?.value == 'string'
    ) {
      this.dataArray.push({
        name: {
          firstName: this.firstName?.value,
          middleName: this.middleName?.value,
          lastName: this.lastName?.value,
        },

        dob: this.dob?.value,
        placeOfBirth: this.placeOfBirth?.value,
        firstLanguage: this.firstLanguage?.value,
        address: {
          city: this.city?.value,
          state: this.state?.value,
          country: this.country?.value,
          pin: Number(this.pin?.value),
        },

        father: {
          fullName: this.fname?.value,
          email: this.femail?.value,
          educationQualification: this.feducationQualification?.value,
          profession: this.fprofession?.value,
          designation: this.fdesignation?.value,
          phone: Number(this.fphone?.value),
        },
        mother: {
          fullName: this.mname?.value,
          email: this.memail?.value,
          educationQualification: this.meducationQualification?.value,
          profession: this.mprofession?.value,
          designation: this.mdesignation?.value,
          phone: Number(this.mphone?.value),
        },
        emergencyContacts: [...this.emergencyContacts.value],
      });
    }
  }

  addEem() {
    this.emergencyContacts.push(
      this.fb.group({
        relation: ['', Validators.required],
        number: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
      })
    );
  }

  get name() {
    return <FormGroup>this.studentForm.get('name');
  }
  get firstName() {
    return this.name.get('firstName');
  }
  get middleName() {
    return this.name.get('middleName');
  }
  get lastName() {
    return this.name.get('lastName');
  }
  get dob() {
    return this.studentForm.get('dob');
  }
  get placeOfBirth() {
    return this.studentForm.get('placeOfBirth');
  }
  get firstLanguage() {
    return this.studentForm.get('firstLanguage');
  }
  get address() {
    return <FormGroup>this.studentForm.get('address');
  }
  get city() {
    return this.address?.get('city');
  }
  get state() {
    return this.address?.get('state');
  }
  get country() {
    return this.address?.get('country');
  }
  get pin() {
    return this.address?.get('pin');
  }

  // ===========father========
  get father() {
    return this.studentForm.get('father');
  }
  get fname() {
    return this.father?.get('fullName');
  }
  get femail() {
    return this.father?.get('email');
  }
  get feducationQualification() {
    return this.father?.get('educationQualification');
  }
  get fprofession() {
    return this.father?.get('profession');
  }
  get fdesignation() {
    return this.father?.get('designation');
  }
  get fphone() {
    return this.father?.get('phone');
  }

  // ==================mother ===========================
  get mother() {
    return this.studentForm.get('mother');
  }
  get mname() {
    return this.mother?.get('fullName');
  }
  get memail() {
    return this.mother?.get('email');
  }
  get meducationQualification() {
    return this.mother?.get('educationQualification');
  }
  get mprofession() {
    return this.mother?.get('profession');
  }
  get mdesignation() {
    return this.mother?.get('designation');
  }
  get mphone() {
    return this.mother?.get('phone');
  }
  // ===========================emergency===========================

  get emergencyContacts() {
    return this.studentForm.get('emergencyContacts') as FormArray;
  }
  // =============================
}
