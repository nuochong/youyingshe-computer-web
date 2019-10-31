import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
  btnState: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  changeBtnState() {
    this.btnState = !this.btnState;
  }
}
