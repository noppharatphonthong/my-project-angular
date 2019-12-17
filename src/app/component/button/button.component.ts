import { Component, OnInit, Input } from '@angular/core';
import { ButtonConstant } from 'src/app/constant/index';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() class: string;
  @Input() type: string;
  @Input() textTH: string;
  @Input() textEN: string;
  @Input() icon: string;
  @Input() color: any;
  @Input() backgroundColor: any;
  @Input() styleCustom: string ;
  @Input() disabled: boolean = false;
  
  public buttonConstant = {
    "class": "",
    "textTH": "",
    "textEN": "",
    "icon": ""
  };
  constructor() { }

  ngOnInit() {
    this.type=(this.type=='app-submit')?'submit':'button';
    this.checkClassButton();
  }

  checkClassButton = () => {
    for (var key in ButtonConstant) {
      if (ButtonConstant.hasOwnProperty(key)) {
        var obj = ButtonConstant[key];
        if (obj.class == this.class) {
          // console.log("Class Button : " + obj.class);
          this.buttonConstant = obj;
          if(ButtonConstant.custom.class==this.class){
            this.buttonConstant.textTH =(this.textTH)? this.textTH : obj.textTH;
            this.buttonConstant.textEN =(this.textEN)? this.textEN : obj.textEN;
            this.buttonConstant.icon =(this.icon)? this.icon : obj.icon;
            this.styleCustom =  (this.styleCustom)? JSON.parse(this.styleCustom.replace(/'/g, '"')):"";            
          }
        }
      }
    }
  }
}
