import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastService } from '../toast';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() title: string;
  @Input() isBtnSave= true;
  @Output()fnSave = new EventEmitter();

  display='none';

  constructor(
    private toast: ToastService,
  ) { }

  open(){
    this.display='block';
  }
  onCloseHandled(){
    this.display='none';
  }
  save() {
    this.fnSave.emit('');
  }

}
