import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Movies } from '../movies-list/movies';
import { MoviesListService } from '../movies-list/movies-list.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movies: Movies;
  movieDetail: any[];
  id = 0;
  sub: any;
  constructor(private MoviesListService: MoviesListService, private route: ActivatedRoute) {
    //     this.id = +this.route.snapshot.paramMap.get('id');
    // this.movies = this.MoviesListService.movies.filter((movies: any) => movies.movieId === this.id)[0];
  }

  ngOnInit() {
    this.getDetails();
  }
  getDetails() {
    this.sub = this.route.paramMap.switchMap((params: ParamMap) =>
      this.MoviesListService.getMovies(+params.get('id')))
      .subscribe((movies) => {
        this.movies = movies;
        console.log(this.movies);
      }

      );
  }
}
