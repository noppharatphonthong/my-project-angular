import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm  } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {
  @ViewChild('formHtml1', {static: true}) formHtml1: NgForm;
  formTs1:any = new Form_1();
  formSubmit1:any = new Form_1();

  constructor() { }

  ngOnInit() {
    // this.formTs1.textInput="";
  }
  
  onSubmit(){
    console.log("formHtml1 : ",this.formHtml1);
    console.log("formTs1   : ",this.formTs1);
    
    this.formSubmit1.inputData.textInput = this.formTs1.inputData.textInput;
    this.formSubmit1.inputData.numberInput = this.formTs1.inputData.numberInput;
  }

}

// form1 Model
class Form_1 {
  inputData:object={
    textInput:'',
    numberInput:''
  }
}

