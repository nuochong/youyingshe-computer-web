import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-login-title',
  templateUrl: './login-title.component.html',
  styleUrls: ['./login-title.component.scss']
})
export class LoginTitleComponent implements OnInit {
  // isActiveTitle:boolean = true;
  @Input() active: string;
  @Input()
  soonInput: string = "这是子组件默认值";
  constructor() {

  }

  ngOnInit() {
    console.log('this.active :', this.soonInput);
  }
  ngAfterViewInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['active'] !== undefined) {
      console.log('change :', changes['active']);
    }
  }

}
