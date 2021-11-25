import { Component, OnInit } from '@angular/core';
import { IkButton } from '../../buttons/ButtonIcons';


export type ToolBarOptions = {
  buttons?: IkButton[],
  emptyMessage?: string,
}


@Component({
  selector: 'toolbar-base',
  templateUrl: './toolbar-base.component.html',
  styleUrls: ['./toolbar-base.component.scss']
})
export class ToolbarBaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
