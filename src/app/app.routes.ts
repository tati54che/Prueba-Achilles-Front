import { Routes } from '@angular/router';
import { UserSettings } from './features/user-settings/user-settings.component';
import { UsersListComponent } from './features/users-list/users-list.component';
import { DivFlexBoxComponent } from './features/div-flexbox/div-flexbox.component';
import { RxjsComponent } from './features/rxjs/rxjs.component';
export const routes: Routes = [
{
  //path: '', component: UserSettings },
  //{ path: '', component: UsersListComponent },

path: '', pathMatch: 'full', redirectTo: 'usuarios' },
  { path: 'usuarios', component: UsersListComponent },
  { path: 'configuracion', component: UserSettings },
{ path: 'flexbox', component: DivFlexBoxComponent },

  { path: 'rxjs', component: RxjsComponent },
  { path: '**', redirectTo: 'usuarios' }
];
