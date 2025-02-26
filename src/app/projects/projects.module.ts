import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from './interfaces/project';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectpageComponent } from './projectpage/projectpage.component';


@NgModule({
  declarations: [
    ProjectpageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectpageComponent
  ]
})
export class ProjectsModule { }
