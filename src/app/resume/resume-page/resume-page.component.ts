import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';
import { Workexperience } from '../interfaces/workexperience';
import { Skill } from '../interfaces/skill';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent implements OnInit {
  public work_experience!: Workexperience[];
  public skills!: Skill[];

  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.work_experience = this.resumeService.getWorkExperience();
    this.skills = this.resumeService.getSkills();
  }

}
