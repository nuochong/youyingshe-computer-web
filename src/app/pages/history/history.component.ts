import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  showScreen: boolean = false;
  constructor(private renderer2: Renderer2) { }

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
