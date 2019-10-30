import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  showScreen:boolean = true;
  constructor() { }

  ngOnInit() {
  }
  isShowScreen():void{
    this.showScreen = !this.showScreen;
  }
}
