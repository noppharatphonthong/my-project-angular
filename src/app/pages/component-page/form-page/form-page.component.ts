import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppConstant } from 'src/app/constant/index';
declare var $: any;

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})


export class FormPageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    this.setForm1Default()
  }


  // ************************************************************************************************
  // ******************* Form ***********************************************************************
  @ViewChild('form1Html', { static: true }) form1Html: NgForm;
  form1Ts: any = new Form_1();
  form1Output: any = new Form_1();

  onSubmitForm1() {
    console.log("form1Html : ", this.form1Html);
    if (this.form1Html.status == "VALID") {
      this.setForm1Output()
    }
  }

  setForm1Default() {
    // inputData
    this.form1Ts.inputData.textInput = 'Mr Game Developer';
    this.form1Ts.inputData.textareaInput = '';
    this.form1Ts.inputData.numberInput = '';
    this.form1Ts.inputData.passwordInput = '';
    this.form1Ts.inputData.emailInput = '';
    this.form1Ts.inputData.fileInput = null;
    this.form1Ts.inputData.fileInputDtl = null;
    this.form1Ts.inputData.multipleFileInput = null;
    this.form1Ts.inputData.multipleFileInputDtl = null;
    this.form1Ts.inputData.checkboxInput = '';
    this.form1Ts.inputData.radioInput = "radio1";
     // selectData
    this.form1Ts.selectData.selectInput = null;
    this.form1Ts.selectData.multipleSelectInput = null;
    this.form1Ts.selectData.multipleSelectHideInput = null;
    this.form1Ts.selectData.multipleSelectGroupInput = null;
    this.form1Ts.selectData.multipleSelectCheckboxInput = null;
  }

  setForm1Auto() {
    // inputData
    this.form1Ts.inputData.textInput = 'Mr Game Developer';
    this.form1Ts.inputData.textareaInput = 'Mr Game Developer textarea input';
    this.form1Ts.inputData.numberInput = '12345';
    this.form1Ts.inputData.passwordInput = '34567';
    this.form1Ts.inputData.emailInput = 'Game@Angular.com';
    // this.form1Ts.inputData.fileInput=null;
    // this.form1Ts.inputData.fileInputDtl=null;
    // this.form1Ts.inputData.multipleFileInput=null;
    // this.form1Ts.inputData.multipleFileInputDtl=null;
    this.form1Ts.inputData.checkboxInput = true;
    this.form1Ts.inputData.radioInput = "radio2";

     // selectData
    this.form1Ts.selectData.selectInput = 1;
    this.form1Ts.selectData.multipleSelectInput = [1,2];
    this.form1Ts.selectData.multipleSelectHideInput = [2,3];
    this.form1Ts.selectData.multipleSelectGroupInput = [3,4];
    this.form1Ts.selectData.multipleSelectCheckboxInput = [1,2,3];
  }

  setForm1Output() {

    // inputData
    this.form1Output.inputData.textInput = this.form1Ts.inputData.textInput;
    this.form1Output.inputData.textareaInput = this.form1Ts.inputData.textareaInput;
    this.form1Output.inputData.numberInput = this.form1Ts.inputData.numberInput;
    this.form1Output.inputData.passwordInput = this.form1Ts.inputData.passwordInput;
    this.form1Output.inputData.emailInput = this.form1Ts.inputData.emailInput;
    this.form1Output.inputData.fileInput = this.form1Ts.inputData.fileInput;
    this.form1Output.inputData.fileInputDtl = this.form1Ts.inputData.fileInputDtl;
    this.form1Output.inputData.multipleFileInput = this.form1Ts.inputData.multipleFileInput;
    this.form1Output.inputData.multipleFileInputDtl = this.form1Ts.inputData.multipleFileInputDtl;
    this.form1Output.inputData.checkboxInput = this.form1Ts.inputData.checkboxInput;
    this.form1Output.inputData.radioInput = this.form1Ts.inputData.radioInput;

    // selectData
    this.form1Output.selectData.selectInput = this.form1Ts.selectData.selectInput;
    this.form1Output.selectData.multipleSelectInput = this.form1Ts.selectData.multipleSelectInput;
    this.form1Output.selectData.multipleSelectHideInput = this.form1Ts.selectData.multipleSelectHideInput;
    this.form1Output.selectData.multipleSelectGroupInput = this.form1Ts.selectData.multipleSelectGroupInput;
    this.form1Output.selectData.multipleSelectCheckboxInput = this.form1Ts.selectData.multipleSelectCheckboxInput;

  }

  clearForm() {
    this.setForm1Default()
    this.form1Html.resetForm();
    this.setForm1Output()
  }

  // ******************* Form End *******************************************************************
  // ************************************************************************************************



  // ************************************************************************************************
  // ******************* Input Type File ************************************************************

  inputTypeFileLabel: string = AppConstant.labelInputTypeFile.TH
  inputTypeFileLabelBrowse: string = AppConstant.labelInputTypeFileBrowse.TH

  onChangeFileInput(event) {
    this.form1Ts.inputData.fileInputDtl = event.target.files;
  }

  onChangeMultipleFileInput(event) {
    this.form1Ts.inputData.multipleFileInputDtl = event.target.files;
  }

  labelInputTypeFile(value: any) {
    var label = this.inputTypeFileLabel;
    if (value && value.length >= 1) {
      label = (value.length == 1) ? value[0].name : value.length + " file";
    }
    return label;
  }
  // ******************* Input Type File End ********************************************************
  // ************************************************************************************************

  // ************************************************************************************************
  // ******************* Input Type Select **********************************************************
  // Use ng-select
  public selectItems = [
    {id: 1, name: 'Item 1'},
    {id: 2, name: 'Item 2'},
    {id: 3, name: 'Item 3'},
    {id: 4, name: 'Item 4'},
    {id: 5, name: 'Item disabled' , disabled: true}
  ];

  public multipleSelectItems = [
    {id: 1, name: 'Item 1'},
    {id: 2, name: 'Item 2'},
    {id: 3, name: 'Item 3'},
    {id: 4, name: 'Item 4'},
    {id: 5, name: 'Item disabled' , disabled: true}
  ];

  public multipleSelectHideItems = [
    {id: 1, name: 'Item 1'},
    {id: 2, name: 'Item 2'},
    {id: 3, name: 'Item 3'},
    {id: 4, name: 'Item 4'},
    {id: 5, name: 'Item disabled' , disabled: true}
  ];
  
  public multipleSelectGroupItems = [
    {id: 1, name: 'Item 1',group:'Group 1',check:false},
    {id: 2, name: 'Item 2',group:'Group 1',check:false},
    {id: 3, name: 'Item 3',group:'Group 1',check:false},
    {id: 4, name: 'Item 4',group:'Group 2',check:false},
    {id: 5, name: 'Item 5',group:'Group 2',check:false}
  ];

  public multipleSelectCheckboxItems = [
    {id: 1, name: 'Item 1',group:'Group 1',check:false},
    {id: 2, name: 'Item 2',group:'Group 1',check:false},
    {id: 3, name: 'Item 3',group:'Group 1',check:false},
    {id: 4, name: 'Item 4',group:'Group 2',check:false},
    {id: 5, name: 'Item 5',group:'Group 2',check:false}
  ];
  
  // ******************* Input Type Select End ******************************************************
  // ************************************************************************************************

  // ************************************************************************************************
  // ******************* Input Date Picker **********************************************************
  // Use ng-pick-datetime


  chosenYearHandler( event:any,datepicker:any ) {
    console.log("event Year : ",event);
    var date = new Date(event)
    this.form1Ts.datePickerData.yearPickerInput = date;
    datepicker.close();
  }

  chosenMonthHandler( event:any,datepicker:any ) {
    console.log("event Month : ",event);
    var date = new Date(event)
    this.form1Ts.datePickerData.monthPickerInput = date;
    datepicker.close();
  }

  chosenMonthYearHandler( event:any,datepicker:any ) {
    console.log("event Month Year : ",event);
    var date = new Date(event)
    this.form1Ts.datePickerData.yearMonthPickerInput = date;
    datepicker.close();
  }

  // ******************* Input Date Picker End ******************************************************
  // ************************************************************************************************

}

// **************************************************************************************************
// ******************* Form1 Model ******************************************************************
class Form_1 {
  inputData: object = {
    textInput: '',
    textareaInput: '',
    numberInput: '',
    passwordInput: '',
    emailInput: '',
    fileInput: null,
    fileInputDtl: null,
    multipleFileInput: null,
    multipleFileInputDtl: null,
    checkboxInput: '',
    radioInput: ''
  }
  selectData: object = {
    selectInput: null,
    multipleSelectInput:null,
    multipleSelectHideInput: null,
    multipleSelectGroupInput:null,
    multipleSelectCheckboxInput:null
  }
  datePickerData: object = {
    yearPickerInput: null,
    monthPickerInput:null,
    datePickerInput: null,
    timePickerInput: null,
    dateTimePickerInput:null,
    yearMonthPickerInput:null
  }
}
// ******************* Form1 Model End **************************************************************
// **************************************************************************************************

