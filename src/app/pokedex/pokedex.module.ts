import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemondetailComponent } from './pokemondetail/pokemondetail.component';
import { PokeCardComponent } from './poke-card/poke-card.component';



@NgModule({
  declarations: [
    PokedexComponent,
    PokemondetailComponent,
    PokeCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokedexComponent
  ]
})
export class PokedexModule { }
