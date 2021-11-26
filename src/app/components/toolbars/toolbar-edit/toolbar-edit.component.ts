import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ToolBarOptions } from '../toolbar-base/toolbar-base.component';

@Component({
  selector: 'toolbar-edit',
  templateUrl: './toolbar-edit.component.html',
  styleUrls: ['./toolbar-edit.component.scss']
})
export class ToolbarEditComponent implements OnInit {

  @Input() formulario: FormGroup
  @Input() toolBarOptions: ToolBarOptions;

  constructor() { }

  ngOnInit(): void {
    (this.toolBarOptions) ? '' : this.toolBarOptions = { buttons:[], emptyMessage:'' }
  }
}
