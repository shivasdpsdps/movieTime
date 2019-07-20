import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LocationComponent } from './location/location.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'moviesList', component: MoviesListComponent },
    { path: 'detail/:id', component: MovieDetailsComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
