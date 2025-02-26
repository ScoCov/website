import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error/error404/error404.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ResumePageComponent } from './resume/resume-page/resume-page.component';
import { PokedexComponent } from './pokedex/pokedex/pokedex.component';
import { PokemondetailComponent } from './pokedex/pokemondetail/pokemondetail.component';
import { ProjectpageComponent } from './projects/projectpage/projectpage.component';

const routes: Routes = [
  { path: '', title: 'Home', component: HomePageComponent},
  { path: 'home', title: 'Home', redirectTo: '', pathMatch: 'full'},
  { path: 'resume', title: 'Resume', component: ResumePageComponent},
  { path: 'pokedex', title: '', component: PokedexComponent},
  { path: 'pokedetail/:id', component: PokemondetailComponent},
  { path: 'projects', component: ProjectpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
