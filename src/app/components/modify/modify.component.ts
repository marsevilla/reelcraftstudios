import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../../models/movie.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modify',
  standalone: true,
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ModifyComponent implements OnInit {
  movieForm: FormGroup;
  movieId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.movieForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      director: ['', [Validators.required, Validators.minLength(2)]],
      budget: ['', [Validators.required, Validators.min(0)]],
      realisator: ['', [Validators.required, Validators.minLength(2)]],
      releaseDate: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      status: ['', [Validators.required]],
      synopsis: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    // Fetch the movie ID from the route parameters
    console.log('Fetched movie ID:', this.movieId); // Debugging line
    if (this.movieId) {
      this.loadMovie(this.movieId);
    } else {
      console.error('Movie ID not found in route parameters');
    }
  }

  loadMovie(movieId: string): void {
    this.movieService.getMovieById(movieId).subscribe(
      (movie: Movie) => {
        // Populate the form with the movie data
        this.movieForm.patchValue(movie);
      },
      error => {
        console.error('Error fetching movie:', error);
        alert('Error fetching movie data. Please try again.');
      }
    );
  }

  updateMovie(): void {
    if (this.movieForm.valid && this.movieId) {
      const updatedMovie: Movie = { id: this.movieId, ...this.movieForm.value };
      this.movieService.updateMovie(this.movieId, updatedMovie).subscribe(
        response => {
          console.log('Movie updated successfully:', response);
          alert('Movie updated successfully!');
          this.router.navigate(['/movies']); // Navigate back to the movie list or any desired page
        },
        error => {
          console.error('Error updating movie:', error);
          alert('Error updating movie. Please try again.');
        }
      );
    } else {
      console.error('Form is invalid or movie ID is missing');
      alert('Please correct the errors in the form before submitting.');
    }
  }
}
