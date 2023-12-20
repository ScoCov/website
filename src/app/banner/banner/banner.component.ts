import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public website_title!: string;

  constructor() { }

  ngOnInit(): void {
    this.website_title = 'Scott Covell'
  }

}
