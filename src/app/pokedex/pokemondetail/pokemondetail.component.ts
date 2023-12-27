import { PokedexService } from './../pokedex.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Pokemon, PokemonDetails } from '../interfaces/pokemon';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-pokemondetail',
  templateUrl: './pokemondetail.component.html',
  styleUrls: ['./pokemondetail.component.css']
})
export class PokemondetailComponent implements OnInit {
  public pokemon!: PokemonDetails;
  private _id!: string | number | undefined;
  public img_src!: string;
  constructor(private PokedexService: PokedexService, private _aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPokemon();
    this.getImage();
  }

  getImage(){
    this.img_src = this.PokedexService.getPokemonImageSrc(this._id as string);
  }

  getPokemon(){
    this._aRoute.paramMap.pipe(
      switchMap((params: ParamMap)=>{
        let id = params.get('id') == null ? 0: params.get('id')?.toString();
        this._id = id;
          return this.PokedexService.getPokemon(id as string);
      }),
      map(pokemon => this.pokemon = pokemon)
    ).subscribe();
  }

}
