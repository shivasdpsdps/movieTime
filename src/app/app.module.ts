import { MoviesListService } from './movies-list/movies-list.service';
import { RatingComponent } from './movies-list/rating.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LocationComponent } from './location/location.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { RepeatDirective } from './repeat.directive';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LocationComponent,
    MoviesListComponent,
    RatingComponent,
    RepeatDirective,
    MovieDetailsComponent 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MoviesListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
