import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data.movies.map(movie => ({
        title: movie.title,
        genre: movie.genre,
        releaseDate: movie.release_date, // Map mismatched key
        budget: movie.budget,
        synopsis: movie.synopsis,
        directors: movie.directors,
        producers: movie.producers,
        status: movie.status
      }));
    });
  }
}
