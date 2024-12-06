import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../models/movie.model';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-all',
  imports: [],
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data
    });
  }

}
