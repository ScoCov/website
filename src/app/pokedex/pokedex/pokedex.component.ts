import { ActivatedRoute, Router } from '@angular/router';
import { PokedexService } from './../pokedex.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  public pokemon!: {name: string, url: string, id?: string}[];
  public filtered_pokemon!: {name:string, url:string, id?: string}[];
  public search_term: string = '';
  public pokemon_id!: string;
  public columnCount: number = 1

  constructor(private _ps :PokedexService, private _router: Router) { }

  ngOnInit(): void {
    this._ps.getAllPokemon().subscribe((poke)=>{
      this.pokemon = poke.results;
      this.pokemon.forEach(pokemon=>{
        pokemon
        pokemon.id = pokemon.url.substring(pokemon.url.lastIndexOf('mon/')+4, pokemon.url.lastIndexOf('/'));
      })
      this.filtered_pokemon = this.pokemon;
    });
  }

  onSearchInput(event: Event){
    this.search_term = (event.target as HTMLInputElement).value;
    this.filtered_pokemon = this.pokemon.filter(poke=>
      poke.name.includes(this.search_term.toLocaleLowerCase())
    );
    if (this.search_term === ''){
      this.filtered_pokemon = this.pokemon;
    }
  }

  goToPokemonDetails(event: Event){
    console.log(event)
    let target = event.target as HTMLElement;
    let tar = target.querySelector('.poke-img') as HTMLImageElement
    let id = tar.src.substring(tar.src.lastIndexOf('artwork/')+ 'artwork/'.length, tar.src.lastIndexOf('.png'));
    this._router.navigate(['pokedetail/', 1]);
  }

}
