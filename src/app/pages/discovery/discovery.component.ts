import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.scss']
})
export class DiscoveryComponent implements OnInit {
  array = [1, 2, 3, 4];
  active: string = 'discovery';
  constructor() { }

  ngOnInit() {
  }

}
