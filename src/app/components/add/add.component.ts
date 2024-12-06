import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../../models/movie.model';

@Component({
  selector: 'app-add',
  standalone: true,
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AddComponent {
  movieForm: FormGroup;

  constructor(private fb: FormBuilder, private movieService: MovieService) {
    this.movieForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      realisator: ['', [Validators.required, Validators.minLength(2)]],
      director: ['', [Validators.required, Validators.minLength(2)]],
      budget: ['', [Validators.required, Validators.min(0)]],
      releaseDate: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      status: ['', [Validators.required]],
      synopsis: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  addMovie(): void {
    if (this.movieForm.valid) {
      const newMovie: Movie = this.movieForm.value;
      this.movieService.addMovie(newMovie).subscribe(
        response => {
          console.log('Movie added successfully:', response);
          alert('Movie added successfully!');
          this.movieForm.reset(); // Reset the form after successful submission
        },
        error => {
          console.error('Error adding movie:', error);
          alert('Error adding movie. Please try again.');
        }
      );
    } else {
      console.error('Form is invalid');
      alert('Please correct the errors in the form before submitting.');
    }
  }
}
