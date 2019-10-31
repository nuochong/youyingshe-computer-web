import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-article-more',
  templateUrl: './card-article-more.component.html',
  styleUrls: ['./card-article-more.component.scss']
})
export class CardArticleMoreComponent implements OnInit {
  isVisible = false;
  isConfirmLoading = false;
  constructor() { }

  ngOnInit() {
  }
  showModal(): void {
    this.isVisible = true;
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
  }
}
