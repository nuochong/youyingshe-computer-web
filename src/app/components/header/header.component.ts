import { Component, OnInit, HostListener, ViewChild, ElementRef, Input, Renderer2 } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  expression: boolean = false;
  expression2: boolean = false;
  @ViewChild('dropdownmenu', { static: false }) menu: ElementRef;
  @ViewChild('dropdown', { static: false }) dropdown: ElementRef;
  @ViewChild('dropdownmenu2', { static: false }) menu2: ElementRef;
  @ViewChild('dropdown2', { static: false }) dropdown2: ElementRef;
  dayNight: boolean = false;
  fontFamily: string = 'hei';
  fontStyle: string = 'jian';
  styleModal: boolean = false;
  @Input() active: string;

  subscribeScoll: any;
  columnTop: number;
  changeTitle: boolean = false;
  oldNum: number = 500;
  constructor(private el: ElementRef, private renderer2: Renderer2) { }

  ngOnInit() {

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
    this.columnTop = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop);
    console.log('this.columnTop :', this.columnTop);
    console.log('this.oldNum :', this.oldNum);
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


  close($event) {
    console.log('传递的数据', $event)
    this.styleModal = !$event ? true : false;
  }
  changeStyleModal() {
    console.log('激活了')
    this.styleModal = !this.styleModal;
  }
  changeDayNight() {
    this.dayNight = !this.dayNight;
    console.log('this.dayNight :', this.dayNight);
  }
  dropdownMenu($event): void {
    $event.preventDefault();
    this.expression = !this.expression;
  }
  dropdownMenuOpen() {
    this.expression = true;
    console.log('进入')
  }
  dropdownMenuHidden($event) {
    console.log('离开', $event[0].toElement)
    console.log('this.menu :', this.menu.nativeElement);
    if ($event[0].toElement != this.menu.nativeElement) {
      console.log('相等了')
      this.expression = false;
    }
  }
  dropdownMenuOpen2() {
    this.expression2 = true;
    console.log('进入')
  }
  dropdownMenuHidden2($event) {
    console.log('离开', $event[0].toElement)
    console.log('this.menu :', this.menu2.nativeElement);
    if ($event[0].toElement != this.menu2.nativeElement) {
      console.log('相等了')
      this.expression2 = false;
    }
  }
  dropdowns($event) {
    if ($event[0].toElement != this.dropdown.nativeElement) {
      console.log('相等了')
      this.expression = false;
    }
  }
  @HostListener('mouseleave', ['$event']) onMouseLeave(e) {
    // console.log('全局离开事件',e)
  }
}
