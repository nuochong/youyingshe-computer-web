import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  expression: boolean = false;
  @ViewChild('dropdownmenu',{static: false}) menu:ElementRef;
  @ViewChild('dropdown',{static: false}) dropdown:ElementRef;
  constructor() { }

  ngOnInit() {
  }

  dropdownMenu($event): void {
    $event.preventDefault();
    this.expression = !this.expression;
  }
  dropdownMenuOpen(){
    this.expression = true;
    console.log('进入')
  }
  dropdownMenuHidden($event){
    //this.expression = false;
    console.log('离开',$event[0])
    console.log('离开',$event[0].toElement)
    console.log('this.menu :', this.menu.nativeElement);
    if($event[0].toElement != this.menu.nativeElement){
      console.log('相等了')
      this.expression = false;
    }

  }
  dropdowns($event){
    if($event[0].toElement != this.dropdown.nativeElement){
      console.log('相等了')
      this.expression = false;
    }
  }
  @HostListener('mouseleave', ['$event']) onMouseLeave(e) {
    // console.log('全局离开事件',e)
    // const index = this.getActived();

    // this.setActiveLine(index);
  }
}
