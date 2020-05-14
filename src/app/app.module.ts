import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { UserProfileComponent } from './Component/user-profile/user-profile.component';
import { MoviesComponent } from './Component/movies/movies.component';
import { GenreComponent } from './Component/genre/genre.component';
import { TheaterComponent } from './Component/theater/theater.component';
import { Routes, Router, RouterModule } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import { PosterComponent } from './component/poster/poster.component'; //app get, set'

const routes : Routes =[
  {path : 'Movies', component: MoviesComponent}, //skal matche
  {path : 'Profile', component: UserProfileComponent}, //skal matche
  {path : 'Info', component: ContactComponent}, //skal matche
  {path : 'Poster', component: PosterComponent},
]
@NgModule({
  declarations: [ //components, directives, pipes
    AppComponent,
    UserProfileComponent,
    MoviesComponent,
    GenreComponent,
    TheaterComponent,
    ContactComponent,
    PosterComponent
  ],
  imports: [ //modules
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],

  providers: [], //services
  bootstrap: [AppComponent]
})
export class AppModule { }
