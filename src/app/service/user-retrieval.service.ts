import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user/userVO';

@Injectable({ providedIn: 'root' })
export class UserRetrievalService {
  //The url to the mock JSON file, this can be replaced with a real API endpoint
  private readonly url = 'assets/userVOMockResponse.json';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
}
