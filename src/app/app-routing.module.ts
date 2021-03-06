import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from 'src/app/login/login.component';
import {PeliculasComponent} from 'src/app/peliculas/peliculas.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'peliculas', component: PeliculasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
