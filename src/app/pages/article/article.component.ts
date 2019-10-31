import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { ElementRef } from '@angular/core';
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
  @ViewChild('modalReport', { static: true }) modalReport;
  @ViewChild('articleDirectoryLook', { static: true }) articleDirectoryLook;
  @ViewChild('articleNext', { static: true }) articleNext;
  subscribeScoll: any;
  columnTop: number;
  fixed: boolean = false;
  changeTitle: boolean = true;
  oldNum: number = 0;

  constructor(private el: ElementRef, private renderer2: Renderer2) { }

  ngOnInit() {
    this.columnTop = 0;

    this.subscribeScoll = fromEvent(window, 'scroll')
      .pipe(debounceTime(50)) // 防抖
      .subscribe((event) => {
        this.onWindowScroll();
        console.log('yyy')
      });
  }
  // 组件销毁时取消订阅事件，防止出现页面多次执行之后卡顿
  ngOnDestroy() {
    this.subscribeScoll.unsubscribe();
  }
  onWindowScroll() {
    console.log('xxx')
    this.columnTop = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop);
    console.log('this.columnTop :', this.columnTop);
    let temp = this.articleNext;
    console.log('temp :', temp.offsetWidth);
    let style = this.el.nativeElement.querySelector('.article-next');
    console.log('style :', style.offsetTop);
    if (this.columnTop > style.offsetTop) {
      console.log('超出了')
      this.renderer2.setStyle(style, 'position', 'fixed')
      this.renderer2.setStyle(style, 'top', '66px')
      this.renderer2.setStyle(style, 'width', '260px')
    } else {
      console.log('没有超出')
      this.renderer2.removeStyle(style, 'position')
      this.renderer2.removeStyle(style, 'top')
      this.renderer2.removeStyle(style, 'width')
    }
    if (this.oldNum < this.columnTop) {
      console.log('向下滑动')
      this.changeTitle = true;
    } else if (this.oldNum > this.columnTop) {
      this.changeTitle = false;
      console.log('向上滑动')
    }
    this.oldNum = this.columnTop;
    console.log('this.changeTitle :', this.changeTitle);

  }

  changeArticleDirectoryLook() {
    this.articleDirectoryLook.showModalMiddle();
  }


  showModalMiddle(): void {
    this.isVisibleMiddle = true;
    this.modalReport.showModalMiddle()
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
