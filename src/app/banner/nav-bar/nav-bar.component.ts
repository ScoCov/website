import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  navTo(address: string){
    this._router.navigate([`/`+address.toLocaleLowerCase()]);
  }


}
