import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-add',
  standalone: true, // Declare as a standalone component
  imports: [FormsModule], // Import required modules here
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  newMovie: Movie = { id: '0', title: '', realisator: '', releaseDate: new Date(), budget: 0, genre: '', status: '', synopsis: '' };

  constructor(private movieService: MovieService) {}

  addMovie(): void {
    this.movieService.addMovie(this.newMovie).subscribe(response => {
      console.log('Movie added:', response);
    });
  }
}
