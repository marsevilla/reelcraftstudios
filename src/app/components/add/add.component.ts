import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../../models/movie.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AddComponent {
  movieForm: FormGroup;

  constructor(private fb: FormBuilder, private movieService: MovieService) {
    this.movieForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      realisator: ['', [Validators.required]],
      releaseDate: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      status: ['', [Validators.required]],
      synopsis: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  addMovie(): void {
    if (this.movieForm.valid) {
      const newMovie: Movie = this.movieForm.value;
      this.movieService.addMovie(newMovie).subscribe(response => {
        console.log('Movie added:', response);
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
