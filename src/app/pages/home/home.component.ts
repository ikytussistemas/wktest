import { Component, OnInit } from '@angular/core';

import { FabButtom } from 'src/app/components/buttons/fab/Ifab';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  buttons: FabButtom[] = [];

  constructor() { }

  ngOnInit(): void {
    this.buttons = [
      { icon: 'users', label: 'Clientes', url: '/customers' },
      { icon: 'file-invoice-dollar', label: 'Pedidos', url: '/orders' },
      { icon: 'table', label: 'Produtos', url: '/products' },
    ]
  }

}
