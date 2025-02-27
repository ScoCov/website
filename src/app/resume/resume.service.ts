import { EDUCATION } from './data/education';
import { Injectable } from '@angular/core';
import { WORK_EXPERIENCE } from './data/workexpiernce';
import { SKILL_SET } from './data/skills';
import { Education } from './interfaces/education';
import { Skill } from './interfaces/skill';
import { Workexperience } from './interfaces/workexperience';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor() { }

  getWorkExperience(): Workexperience[]{
    return WORK_EXPERIENCE;
  }

  getSkills(): Skill[] {
    return SKILL_SET;
  }

  getEducation(): Education {
    return EDUCATION;
  }
}
