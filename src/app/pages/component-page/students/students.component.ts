import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  @ViewChild('f', {static: true}) registerForm: NgForm; 
  defaultSex = 'Male';
  defaultSecret = 'pet';
  user = {
    secret: '',
    userData: {
        email: '',
        fullName: '',
        sex: '',
        username: '',
      }
  };
  submitted = false;
  constructor() { }

  ngOnInit() {
  }
  
  onSubmit() {
    this.submitted = true;

    const userData = this.user.userData;
    const registerForm = this.registerForm.value;

    this.user.secret = registerForm.secret;
    userData.email = registerForm.userData.email;
    userData.fullName = registerForm.userData.fullName;
    userData.sex = registerForm.userData.sex;
    userData.username = registerForm.userData.username;
}

  suggestUserName () {
    const suggestedName = 'Superuser';
    this.registerForm.setValue({
        secret: 'car',
        userData: {
            email: 'gg@gmail.com',
            fullName: 'game',
            sex: 'Male',
            username: suggestedName,
        }
    });

    this.registerForm.form.patchValue({
      userData: {
          username: suggestedName
      }
  });
}

}

// ทั้ง 2 คำสั่งนี้ต่างกันตรงที่....
// // เซ็ตค่าให้กับทุก element >> ngModel >> ทุกตัว
// this.registerForm.setValue({});
// // เซ็ตค่าให้กับบาง element >> ngModel >> บางตัว
// this.registerForm.form.patchValue({});
// ***โดยใช้วิธีการเข้าถึงฟอร์มด้วย @ViewChild นั่นเองงงงงงงค้าบบบ
