import { Component, Input, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';
import { Workexperience } from '../interfaces/workexperience';

@Component({
  selector: 'app-workexperience',
  templateUrl: './workexperience.component.html',
  styleUrls: ['./workexperience.component.css']
})
export class WorkexperienceComponent implements OnInit {
  @Input()
  public work_experience!: Workexperience;
  public duties!: string[];
  constructor() { }

  ngOnInit(): void {
    this.duties = this.work_experience.duties;
  }

}
