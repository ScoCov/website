import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { WorkexperienceComponent } from './workexperience/workexperience.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';



@NgModule({
  declarations: [
    ResumePageComponent,
    WorkexperienceComponent,
    SkillsComponent,
    EducationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResumePageComponent
  ]
})
export class ResumeModule { }
