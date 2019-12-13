import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navbar-costom',
  templateUrl: './navbar-costom.component.html',
  styleUrls: ['./navbar-costom.component.css']
})
export class NavbarCostomComponent implements OnInit {
  @Input() username: String;
  private numberOfNoti = 9;
  constructor() { }

  ngOnInit() {
  }

  onClickMenu = (e) => {
    e.preventDefault();
    $("#sidebar").toggleClass('active');
  };
  
}
