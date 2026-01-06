import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonCity } from '../models/city-common.model';
import { CommonUser } from '../models/user-common.model';

@Injectable({ providedIn: 'root' })
export class CommonApiService {
  private usuarioUrl = 'https://646b8fc77d3c1cae4ce3ffe0.mockapi.io/commonapi/users';
  private ciudadUrl = 'https://646b8fc77d3c1cae4ce3ffe0.mockapi.io/commonapi/cities';

  constructor(private http: HttpClient) {}
    getCiudades(): Observable<CommonCity[]> {
    return this.http.get<CommonCity[]>(this.ciudadUrl);
  }

  getUsuarios(): Observable<CommonUser[]> {
    return this.http.get<CommonUser[]>(this.usuarioUrl);
  }

  getCiudadesPorUsuarioId(userId: string) {
    return this.http.get<CommonCity[]>(this.ciudadUrl, { params: { userId } });
  }
}
