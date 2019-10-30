import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recycle',
  templateUrl: './recycle.component.html',
  styleUrls: ['./recycle.component.scss']
})
export class RecycleComponent implements OnInit {
  isVisibleMiddle: boolean;

  constructor() { }

  ngOnInit() {
  }

  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }
  handleCancel(){
    this.isVisibleMiddle = false;
  }
  handleOk(){
    console.log('提交了 :');
    this.isVisibleMiddle = false;
  }
}
