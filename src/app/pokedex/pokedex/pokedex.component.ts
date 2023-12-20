import { PokedexService } from './../pokedex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  public pokemon!: {name: string, url: string}[];
  public filtered_pokemon!: {name:string, url:string}[];
  public search_term: string = '';

  constructor(private _ps :PokedexService) { }

  ngOnInit(): void {
    this._ps.getAllPokemon().subscribe((poke)=>{
      this.pokemon = poke.results;
      this.pokemon.forEach(pokemon=>{
        pokemon
      })
      this.filtered_pokemon = this.pokemon;
    });
  }

  onSearchInput(event: Event){
    this.search_term = (event.target as HTMLInputElement).value;
    this.filtered_pokemon = this.pokemon.filter(poke=>
      poke.name.includes(this.search_term)
    );
    if (this.search_term === ''){
      this.filtered_pokemon = this.pokemon;
    }
  }

}
