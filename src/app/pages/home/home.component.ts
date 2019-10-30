import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isOver:boolean = true;
  isEdit:boolean = true;
  constructor() { }

  ngOnInit() {
  }
  changeEdit(){
    this.isEdit = !this.isEdit;
  }
}
