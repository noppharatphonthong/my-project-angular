import { Component, OnInit, Input } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-sidebar-cuttom',
  templateUrl: './sidebar-cuttom.component.html',
  styleUrls: ['./sidebar-cuttom.component.css']
})
export class SidebarCuttomComponent implements OnInit {
  @Input() text:String;
  constructor() { }

  ngOnInit() {}

  onClickMenu=()=>{
    $('#sidebar').toggleClass('active');
  }


}
