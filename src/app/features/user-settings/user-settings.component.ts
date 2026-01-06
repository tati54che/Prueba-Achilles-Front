import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfo} from '../user-info/user-info.component';

export interface DetailView {
  name: string;
  age: number;
}

@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [UserInfo, CommonModule],
  templateUrl: './user-settings.component.html'
})
export class UserSettings {

  usuarios: DetailView[] = [
    { name: 'Cristiano Ronaldo', age: 38 },
    { name: 'Leo Messi', age: 39 },
    { name: 'Neymar', age: 37 },
    { name: 'Paolo Guerrero', age: 37 }
  ];


  detailView: DetailView = this.usuarios[0];

cambiarUsuario() {
  const random = Math.floor(Math.random() * this.usuarios.length);
  this.detailView = this.usuarios[random];
}

actualizarEdadUsuario(nuevaEdad: number): void {
    //MUESTRA EN CONSOLA LA NUEVA EDAD DEL PADREE
    console.log('Nueva edad en el COMPONENTE padre:', nuevaEdad);
  }
}
