import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-report',
  templateUrl: './modal-report.component.html',
  styleUrls: ['./modal-report.component.scss']
})
export class ModalReportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isVisibleTop = false;
  isVisibleMiddle = false;

  showModalTop(): void {
    this.isVisibleTop = true;
  }

  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }

  handleOkTop(): void {
    console.log('点击了确定');
    this.isVisibleTop = false;
  }

  handleCancelTop(): void {
    this.isVisibleTop = false;
  }

  handleOkMiddle(): void {
    console.log('click ok');
    this.isVisibleMiddle = false;
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }
  handleCancel(){
    this.isVisibleMiddle = false;
  }
  handleOk(){
    console.log('提交了 :');
    this.isVisibleMiddle = false;
  }
}
