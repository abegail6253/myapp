import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/register'; // Replace with your backend API endpoint

  constructor(private http: HttpClient) {}

  registerUser(user: any) {
    return this.http.post(this.apiUrl, user);
  }
}
