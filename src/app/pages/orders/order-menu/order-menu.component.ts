import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-menu',
  templateUrl: './order-menu.component.html',
  styleUrls: ['./order-menu.component.scss']
})
export class OrderMenuComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  goTo(url: string) {
    this.router.navigate([`/orders/${url}`]);
  }

}
