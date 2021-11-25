import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {

  @Input() message = 'Aguarde...';

  constructor() { }

  ngOnInit(): void {
  }

}
