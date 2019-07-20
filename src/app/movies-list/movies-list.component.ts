import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Movies} from './movies';
import { MoviesListService } from './movies-list.service';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  providers: [MoviesListService]
})
export class MoviesListComponent implements OnInit {
  movies: Movies[];
  location: string;
  errorMessage: string;
  tempList: any[];
  constructor(private router: Router, private _MoviesListService: MoviesListService) {

  }

  ngDoCheck() {
  }
  ngOnInit() {
    this.getMovieList();
  }

  getMovieList() {
    this._MoviesListService.getMoviesList()
      .subscribe(hello => {
        this.movies = hello;
        if (sessionStorage.getItem('location')) {
          this.location = sessionStorage.getItem('location');
          this.tempList = [];
          this.movies.forEach(singleOrder => {
            if (singleOrder.location == this.location) {
              console.log(singleOrder);
              this.tempList.push(singleOrder);
            }
          });
          console.log('templist' + this.tempList);
          this.movies=this.tempList;
        }

      },
      error => this.errorMessage = <any>error);
  }
  goToDetail(movie:Movies){
    this.router.navigate(['/detail', movie.movieId]);
  }
}









