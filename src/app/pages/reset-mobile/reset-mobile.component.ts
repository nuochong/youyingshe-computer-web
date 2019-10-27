import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-reset-mobile',
  templateUrl: './reset-mobile.component.html',
  styleUrls: ['./reset-mobile.component.scss']
})
export class ResetMobileComponent implements OnInit {
  styleModal: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  
  close($event) {
    console.log('传递的数据', $event)
    this.styleModal = !$event ? true : false;
  }
  changeStyleModal() {
    console.log('激活了')
    this.styleModal = !this.styleModal;
  }

}
