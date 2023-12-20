import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterLink, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BannerComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BannerComponent
  ]
})
export class BannerModule { }
