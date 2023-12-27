import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemondetailComponent } from './pokemondetail/pokemondetail.component';



@NgModule({
  declarations: [
    PokedexComponent,
    PokemondetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokedexComponent
  ]
})
export class PokedexModule { }
