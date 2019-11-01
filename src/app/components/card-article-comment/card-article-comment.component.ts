import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-article-comment',
  templateUrl: './card-article-comment.component.html',
  styleUrls: ['./card-article-comment.component.scss']
})
export class CardArticleCommentComponent implements OnInit {
  isShowTools: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  changeFocus() {
    this.isShowTools = true;
  }
  cancelFocus() {
    this.isShowTools = false;
  }
}
