import { Pokemon } from '../interfaces/pokemon';
import { PokedexService } from './../pokedex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  public pokemon!: {name: string, url: string}[];

  constructor(private _ps :PokedexService) { }

  ngOnInit(): void {
    this._ps.getAllPokemon().subscribe((poke)=>{
      this.pokemon= poke.results;
    });

  }

}
