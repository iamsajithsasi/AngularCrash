import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseList } from './app.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { PostDataComponent } from './injectdatang/post-data.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    PostDataComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CourseList
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
