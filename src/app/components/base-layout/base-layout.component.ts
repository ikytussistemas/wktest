import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

  @Input() entity: any = undefined;
  @Input() titletop: string;

  constructor(
  ) { }

  ngOnInit() {
  }

}
