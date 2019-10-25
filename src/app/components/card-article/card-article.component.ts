import { Component, OnInit, Input, } from '@angular/core';

@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.scss']
})
export class CardArticleComponent implements OnInit {
  @Input() isHaveImg: boolean;
  // isHaveImg:boolean = false;

  constructor() { }

  ngOnInit() {
    this.isHaveImg = this.isHaveImg ? this.isHaveImg : false;
  }

}
