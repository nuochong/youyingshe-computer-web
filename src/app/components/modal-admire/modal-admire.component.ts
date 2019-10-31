import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-admire',
  templateUrl: './modal-admire.component.html',
  styleUrls: ['./modal-admire.component.scss']
})
export class ModalAdmireComponent implements OnInit {
  @Input() isVisible:boolean;
  isConfirmLoading = false;
  @Output() private outer=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
    this.outer.emit('msg from child') 
  }
}
