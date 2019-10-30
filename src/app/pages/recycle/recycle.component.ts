import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-recycle',
  templateUrl: './recycle.component.html',
  styleUrls: ['./recycle.component.scss']
})
export class RecycleComponent implements OnInit {
  isVisibleMiddle: boolean;
  showDeleteBtn: boolean = false;
  isVisible = false;
  @ViewChild('verify',{static:true}) verify;

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
  showModal(): void {
    this.isVisible = true;
  }
  runParent(msg:string){ 
    this.isVisible = false;
    //alert(msg); 
  }
}
