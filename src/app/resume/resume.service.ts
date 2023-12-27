import { Injectable } from '@angular/core';
import { WORK_EXPERIENCE } from './data/workexpiernce';
import { SKILL_SET } from './data/skills';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor() { }

  getWorkExperience(){
    return WORK_EXPERIENCE;
  }

  getSkills() {
    return SKILL_SET;
  }
}
