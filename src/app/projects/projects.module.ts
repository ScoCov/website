import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectpageComponent } from './projectpage/projectpage.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    ProjectpageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    ProjectpageComponent
  ]
})
export class ProjectsModule { }
