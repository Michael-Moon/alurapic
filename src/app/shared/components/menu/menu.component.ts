import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'ap-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  isShown: boolean = false;

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toggle(){
     this.isShown = !this.isShown;
  }

}
