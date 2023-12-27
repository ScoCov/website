import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokedexresults } from './interfaces/pokedexresults';
import { Observable } from 'rxjs';
import { Pokemon, PokemonDetails } from './interfaces/pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private POKEDEX_API_URL: string =
  'https://pokeapi.co/api/v2/pokemon/';
  private LIMITERS: string = '?offset=0&limit=1010';

  constructor(private _http: HttpClient) { }

  getAllPokemon(): Observable<Pokedexresults>{
    return this._http.get<Pokedexresults>(this.POKEDEX_API_URL+this.LIMITERS);
  }

  getPokemon(_id: string): Observable<PokemonDetails>{
    const url = this.POKEDEX_API_URL+_id;
    console.log(url)
    return this._http.get<PokemonDetails>(url);
  }

  getPokemonImageSrc(_id: string): string{
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${_id}.png`;
  }
}
