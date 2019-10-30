import { Component, OnInit } from '@angular/core';
import { EditorConfig } from '../../components/editor/model/editor-config';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';

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

  constructor(private modalService: NzModalService,private message: NzMessageService) { }

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
  showDeleteConfirm(): void {
    this.modalService.confirm({
      nzTitle: '您确定要删除此任务吗?',
      nzContent: '确认删除文章《😆》，文章将被移动到回收站，您可以在那里恢复它。60天后将被彻底删除。',
      nzOkText: '确认',
      nzOkType: 'danger',
      nzOnOk: () => console.log('OK'),
      nzCancelText: '取消',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  //全局提示
  createMessage(type: string): void {
    this.message.create(type, `This is a message of ${type}`);
  }

}
