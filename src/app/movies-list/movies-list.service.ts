import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Movies } from './movies';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class MoviesListService {
    username:string;
    movies:any[];
    constructor(private http: HttpClient) { }
        getMoviesList(): Observable<Movies[]>{
         return this.http.get<Movies[]>('assets/movies/movies.json').pipe(
             tap(data => console.log('Data fetched:'+JSON.stringify(data))),
            catchError(this.handleError));

    }
    private handleError(err:HttpErrorResponse) {
    let errMsg:string='';
    if (err.error instanceof Error) {
       // A client-side or network error occurred. Handle it accordingly.
       console.log('An error occurred:', err.error.message);
       let errMsg=err.error.message;} 
       else {
       // The backend returned an unsuccessful response code.
       // The response body may contain clues as to what went wrong,
       console.log(`Backend returned code ${err.status}`);
         let errMsg=err.error.status;
     }
        return Observable.throw(errMsg); 
  }
  getMovies(id: number) {
        return this.getMoviesList()
                      .map(movies => movies.filter(movie => movie.movieId === id)[0]);
    }
}
