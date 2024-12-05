import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
 private apiUrl = 'http://localhost:3000/movies';
 constructor(private http: HttpClient) { }
 getMessage() {
    return this.http.get(`${this.apiUrl}/`);
  }
}
