import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: []
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() headerTransparent: boolean;

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  getStyle(): string{
    return `topo ${(this.headerTransparent) ? 'headerTransparent' : 'headerSolid' } fixed-top`;
  }

  goToHome(){
    this.router.navigate(['/']);
  }
}
