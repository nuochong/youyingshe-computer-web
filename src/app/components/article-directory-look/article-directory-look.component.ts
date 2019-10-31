import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-directory-look',
  templateUrl: './article-directory-look.component.html',
  styleUrls: ['./article-directory-look.component.scss']
})
export class ArticleDirectoryLookComponent implements OnInit {

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
  handleCancel() {
    this.isVisibleMiddle = false;
  }
  handleOk() {
    console.log('提交了 :');
    this.isVisibleMiddle = false;
  }
}
