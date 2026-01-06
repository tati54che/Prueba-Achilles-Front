import { Component, DestroyRef, inject, ChangeDetectorRef } from '@angular/core';

import { CommonModule } from '@angular/common';
//import { forkJoin, map, switchMap, finalize } from 'rxjs';
import { forkJoin } from 'rxjs';
import { finalize, map, switchMap } from 'rxjs/operators';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonApiService } from '../../core/services/common-api.service';

import { CommonCity } from '../../core/models/city-common.model';
import { CommonUser } from '../../core/models/user-common.model';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs.component.html'
})
export class RxjsComponent {
  private destroyRef = inject(DestroyRef);

  users: CommonUser[] = [];
  cities: CommonCity[] = [];
  citiesByUser: CommonCity[] = [];

constructor(private api: CommonApiService, private cdr: ChangeDetectorRef) {}


cargarParalelo(): void {

  console.log('Clic botón Paralelo...');
  this.cdr.detectChanges();

  forkJoin({
    users: this.api.getUsuarios(),
    cities: this.api.getCiudades()
  })
  .pipe(takeUntilDestroyed(this.destroyRef))
  .subscribe({
    next: ({ users, cities }) => {
      this.users = Array.isArray(users) ? users : [];
      this.cities = Array.isArray(cities) ? cities : [];

      console.log('Total de usuarios:', this.users.length);
      console.log('Total de ciudades:', this.cities.length);

      this.cdr.detectChanges();
    },
    error: (err) => {
      console.error(err);
      this.users = [];
      this.cities = [];

      this.cdr.detectChanges();
    }
  });
}


 cargarSecuencial(): void {
  console.log('Clic botón Secuencial...');
  this.cdr.detectChanges();

  this.api.getUsuarios()
    .pipe(
      takeUntilDestroyed(this.destroyRef),
      map(users => users[0].id),
      switchMap(() => this.api.getCiudades()),
      map(cities => cities.map(c => ({ ...c, country: 'Belgium' })))
    )
    .subscribe({
     next: (cities) => {
  this.citiesByUser = cities;

  console.log('Cantidad de ciudades del usuario seleccionado:', cities.length);
  cities.forEach((c, index) => {
    console.log(`${index + 1}. ${c.name} - ${c.country}`);
  });

    this.cdr.detectChanges();
  },
      error: (err) => {
        console.error(err);
        this.citiesByUser = [];
        this.cdr.detectChanges();
      }
    });
}

  trackByCity(index: number, city: CommonCity): string {
    return city.id;
  }
}
