import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../core/models/user.model';

type ApiUsuario = {
  name: string;
  age: number;
};

@Component({
  selector: 'app-users-list',
  standalone: true,
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {
  private http = inject(HttpClient);

  users: User[] = [];

  private apiUrlUsuarios =
    'https://6390b47b65ff4183111c4b91.mockapi.io/users/users';

  // Mock local (por si la API se cae)
  private mockResponse: ApiUsuario[] = [
    { name: 'Hermione Granger', age: 16 },
    { name: 'Albus Dumbledore', age: 156 },
    { name: 'Harry Potter', age: 16 },
    { name: 'Sirius Black', age: 42 },
  ];

  ngOnInit(): void {
    // Se inicializa en user por si la api falla
    this.users = this.mockResponse;

    // API real. se interará consumir
    this.http.get<ApiUsuario[]>(this.apiUrlUsuarios).subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.log('API se encuentra caída, se va a usar el MOCK local', err);
      },
    });
  }

  esMayor(u: User): boolean {
    return u.age >= 18;
  }
}
