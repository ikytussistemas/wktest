import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { TableField, TableOptions } from './table-models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tableOptions: TableOptions;
  @Input() entity: any[];
  @Input() lastObject: any;
  @Input() page=1;

  @Output() fnNext = new EventEmitter();
  @Output() fnPrev = new EventEmitter();
  @Output() fnList = new EventEmitter<number>();

  count: number = 5;
  counts: number[] = [2, 5, 10, 20, 50, 100];
  headers: string[] = [];
  fields: TableField[] = [];

  constructor() { }

  ngOnInit(): void {
    this.headers = this.tableOptions.headers;
    if(!this.headers.includes('Opções')){
      this.headers.push('Opções');
    }
    this.fields = this.tableOptions.fields;
  }

  nextPage() {
    this.fnNext.emit();
  }

  prevPage() {
    this.fnPrev.emit();
  }

  getList() {
    this.fnList.emit(this.count);
  }

}
