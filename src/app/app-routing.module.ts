import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { DetalleComponent } from './Producto/detalle/detalle.component';
import { EditarComponent } from './Producto/editar/editar.component';
import { ListarComponent } from './Producto/listar/listar.component';
import { NuevoComponent } from './Producto/nuevo/nuevo.component';

const routes: Routes = [
  {path: 'listar', component: ListarComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'nuevo', component: NuevoComponent},
  {path: 'editar/:id', component: EditarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
