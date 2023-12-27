import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../interfaces/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input()
  public skill!: Skill;
  constructor() { }

  ngOnInit(): void {
  }

}
