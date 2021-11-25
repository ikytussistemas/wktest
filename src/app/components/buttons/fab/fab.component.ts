import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FabButtom } from './Ifab';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})
export class FabComponent implements OnInit {

  @Input() buttons: FabButtom[] = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.buttons.push({icon: 'home' , label: 'Home' , url: '/'})
  }

  goTo(url: string): void{
    this.router.navigate([url]);
  }
}
