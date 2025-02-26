import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorModule } from './error/error.module';
import { BannerModule } from './banner/banner.module';
import { HomeModule } from './home/home.module';
import { ResumeModule } from './resume/resume.module';
import { PokedexModule } from './pokedex/pokedex.module';
import { HttpClientModule } from '@angular/common/http'
import { ProjectsModule } from './projects/projects.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ErrorModule,
    BannerModule,
    HomeModule,
    ResumeModule,
    PokedexModule,
    ProjectsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
