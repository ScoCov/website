import { Component, Input, OnInit } from '@angular/core';
import { Pokemon, PokemonDetails } from '../interfaces/pokemon';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {

  constructor(private _router: Router) { }
  @Input()
  public poke!: {name: string, url: string, id?: string}
  ngOnInit(): void {
  }

  goToPokemonDetails(){
    // let target = event.target as HTMLElement;
    // let tar = target.querySelector('.poke-img') as HTMLImageElement
    // let id = tar.src.substring(tar.src.lastIndexOf('artwork/')+ 'artwork/'.length, tar.src.lastIndexOf('.png'));
    this._router.navigate(['pokedetail/', this.poke.id]);
  }

}
