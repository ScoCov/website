import { Project } from './../interfaces/project';
import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-projectpage',
  templateUrl: './projectpage.component.html',
  styleUrls: ['./projectpage.component.css']
})
export class ProjectpageComponent implements OnInit {

  public projects!: Project[];

  constructor(private _projectService: ProjectService,private _router: Router) { }

  ngOnInit(): void {
    this.projects = this._projectService.getProjects();
  }

}
