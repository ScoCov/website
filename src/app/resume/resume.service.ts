import { Injectable } from '@angular/core';
import { WORK_EXPERIENCE } from './data/workexpiernce';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor() { }

  getWorkExperience(){
    return WORK_EXPERIENCE;
  }
}
