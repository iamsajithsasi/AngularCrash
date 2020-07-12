import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseList } from './app.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { PostDataComponent } from './injectdatang/post-data.component';
import { CoursesComponent } from './courses/courses.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { PostsComponent } from './posts/posts.component';
import { RouterModule } from '@angular/router';
import { CreatingroutesComponent } from './creatingroutes/creatingroutes.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    PostDataComponent,
    CoursesComponent,
    TemplateformComponent,
    ReactiveformsComponent,
    PostsComponent,
    CreatingroutesComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "test",
        component: CreatingroutesComponent
      }
    ])
  ],
  providers: [
    CourseList
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
