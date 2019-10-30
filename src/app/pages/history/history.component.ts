import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  showScreen: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  isShowScreen(): void {
    this.showScreen = !this.showScreen;
  }
  over(e) {
    console.log('overe :', e);
  } 
  leave(e) {
    console.log('leavee :', e);
  }
}
