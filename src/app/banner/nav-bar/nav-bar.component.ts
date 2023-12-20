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

  goToHome() {
    this._router.navigate(['/home']);
  }

  goToResume() {
    this._router.navigate(['/resume']);
  }
  goToGames(){
    this._router.navigate(['/games'])
  }
  goToPokeDex() {
    this._router.navigate(['/pokedex']);
  }

}
