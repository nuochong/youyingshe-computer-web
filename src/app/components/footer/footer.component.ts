import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  changeTools: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  change() {
    console.log('xxxx')
    this.changeTools = !this.changeTools;
  }
}
