import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-page',
  templateUrl: './button-page.component.html',
  styleUrls: ['./button-page.component.css']
})
export class ButtonPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  aaaa=()=>{
    console.log("aaaaaaa");
  }

}
