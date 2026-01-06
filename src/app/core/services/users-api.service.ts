import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ApiUser {
  id: string;
  name: string;
  age: number;
}

@Injectable({ providedIn: 'root' })
export class UsersApiService {

  private url = 'https://6390b47b65ff4183111c4b91.mockapi.io/users/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<ApiUser[]>(this.url);
  }
}
