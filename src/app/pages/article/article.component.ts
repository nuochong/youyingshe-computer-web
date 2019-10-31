import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  isVisibleMiddle: boolean;
  showDeleteBtn: boolean = false;
  isVisible = false;
  @ViewChild('admire', { static: true }) admire;
  showReplyArea: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }
  handleCancel() {
    this.isVisibleMiddle = false;
  }
  handleOk() {
    console.log('提交了 :');
    this.isVisibleMiddle = false;
  }
  showModal(): void {
    this.isVisible = true;
  }
  runParent(msg: string) {
    this.isVisible = false;
    //alert(msg); 
  }

  //显示评论区
  changeShowReplyArea() {
    this.showReplyArea = !this.showReplyArea;
  }

}
