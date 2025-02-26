import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../interfaces/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html',
  styleUrls: ['./projectcard.component.css'],
})
export class ProjectcardComponent implements OnInit {
  @Input()
  public project!: Project;
  public routerLink?: string | null;
  constructor(private _router: Router) {}

  ngOnInit(): void {
    this.routerLink = this.project.viewable
      ? `/` + this.project.url
      : `/projects`;
  }

  navTo(address: string) {
    this._router.navigate([`./` + address.toLocaleLowerCase()]);
  }
}
