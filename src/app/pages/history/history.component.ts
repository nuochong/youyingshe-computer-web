import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  showScreen: boolean = false;
  constructor(private el: ElementRef, private renderer2: Renderer2) { }

  ngOnInit() {
  }
  isShowScreen(): void {
    this.showScreen = !this.showScreen;
  }
  over(e) {
    console.log('overe :', e);
    //this.renderer2.setStyle(e.fromElement,'color','red')
    console.log(e.target.querySelector('span'))
    const span = e.target.querySelector('span');
    const title = span.getAttribute('data-title')
    span.innerText = title

  }
  leave(e) {
    console.log('leavee :', e);
    const span = e.target.querySelector('span');
    const timeage = span.getAttribute('data-timeago')
    span.innerText = timeage
  }
}
