import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'ap-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  isShow: boolean = false;

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toggle(){
     this.isShow = !this.isShow;
  }

}
