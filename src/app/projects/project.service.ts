import { Injectable } from '@angular/core';
import { PROJECTS } from './data/projectinfo';
import { Project } from './interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Project[]{
    return PROJECTS;
  }
}
