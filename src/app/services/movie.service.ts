import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getMovieById(movieId: string): Observable<Movie> {
    return this.http.get<Movie>(`/api/movies/${movieId}`);
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiUrl, movie);
  }

  updateMovie(movieId: string, movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`/api/movies/${movieId}`, movie);
  }
}
