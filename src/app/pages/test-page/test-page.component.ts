import { Component, OnInit, QueryList, ViewChildren, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Location, DatePipe } from '@angular/common';
import { OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import * as _moment from 'moment';

const dateTimeCustomFormats = {};

const moment = (_moment as any).default ? (_moment as any).default : _moment;
/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css'],
  providers: [
    {provide: OWL_DATE_TIME_FORMATS, useValue: dateTimeCustomFormats},
  ],
})
export class TestPageComponent {
  constructor() {}

  ngOnInit() {}
  
}