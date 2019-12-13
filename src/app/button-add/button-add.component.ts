import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent implements OnInit {
  @Input() type: string = "button";

  constructor() { }

  ngOnInit() {
  }

}
