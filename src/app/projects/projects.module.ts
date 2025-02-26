import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectpageComponent } from './projectpage/projectpage.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProjectcardComponent } from './projectcard/projectcard.component';
import { PokedexModule } from '../pokedex/pokedex.module';


@NgModule({
  declarations: [
    ProjectpageComponent,
    ProjectcardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    PokedexModule
  ],
  exports: [
    ProjectpageComponent
  ]
})
export class ProjectsModule { }
