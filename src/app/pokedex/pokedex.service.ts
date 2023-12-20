import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokedexresults } from './interfaces/pokedexresults';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private POKEDEX_API_URL: string = 'https://pokeapi.co/api/v2/pokemon/?limit=1010';

  constructor(private _http: HttpClient) { }

  getAllPokemon(): Observable<Pokedexresults>{
    return this._http.get<Pokedexresults>(this.POKEDEX_API_URL);
  }
}
