import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  showDeleteBtn: boolean = false;
  isVisible = false;
  @ViewChild('bindEmail', { static: true }) bindEmail;
  constructor() { }

  ngOnInit() {
  }
  changeShowDeleteBtn() {
    this.showDeleteBtn = true;
  }
  showModal(): void {
    this.isVisible = true;
  }
  runParent(msg: string) {
    this.isVisible = false;
    //alert(msg); 
  }
}
