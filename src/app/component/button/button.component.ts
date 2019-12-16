import { Component, OnInit, Input } from '@angular/core';
import { ButtonConstant } from 'src/app/constant/index';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() class: string;
  public buttonConstant = {
    "class": "",
    "textTH": "",
    "textEN": "",
    "icon": ""
  };
  constructor() { }

  ngOnInit() {
    this.checkClassButton();
  }

  checkClassButton = () => {
    for (var key in ButtonConstant) {
      if (ButtonConstant.hasOwnProperty(key)) {
        var obj = ButtonConstant[key];
        if (obj.class == this.class) {
          // console.log("Class Button : " + obj.class);
          this.buttonConstant = obj;
        }
      }
    }
  }
}
