import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error/error404/error404.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ResumePageComponent } from './resume/resume-page/resume-page.component';
import { GamePageComponent } from './games/game-page/game-page.component';
import { PokedexComponent } from './pokedex/pokedex/pokedex.component';
import { PokemondetailComponent } from './pokedex/pokemondetail/pokemondetail.component';

const routes: Routes = [
  { path: '', title: 'Home', component: HomePageComponent},
  { path: 'home', title: 'Home', redirectTo: '', pathMatch: 'full'},
  { path: 'resume', title: 'Resume', component: ResumePageComponent},
  { path: 'games', title: '', component: GamePageComponent},
  { path: 'pokedex', title: '', component: PokedexComponent},
  { path: 'pokedetail/:id', component: PokemondetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
