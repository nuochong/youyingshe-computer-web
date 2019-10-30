import { Component, OnInit } from '@angular/core';
import { EditorConfig } from '../../components/editor/model/editor-config';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {
  showNewFile = false;
  title = 'app';
  conf = new EditorConfig();
  markdown = '测试语句';

  constructor() { }

  ngOnInit() {
  }

  // 同步属性内容
  syncModel(str): void {
    this.markdown = str;
  }
  //新建文集
  changeNewFile(){
    this.showNewFile = !this.showNewFile;
  }

}
