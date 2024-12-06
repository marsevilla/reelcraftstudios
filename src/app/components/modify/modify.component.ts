import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-modify',
  imports: [],
  templateUrl: './modify.component.html',
  styleUrl: './modify.component.css'
})
export class ModifyComponent {
  movie: Movie = { id: '0', title: '', realisator: '', releaseDate: new Date(), budget: 0, genre: '', status: '', synopsis: '' };

  constructor(private movieService: MovieService) {}

  modifyMovie(): void {
    this.movieService.modifyMovie(this.movie).subscribe(response => {
      console.log('Movie modified:', response);
    });
  }
}
