import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { ProdGuardGuard as guard } from './guards/prod-guard.guard';
import { IndexComponent } from './index/index/index.component';
import { MenuComponent } from './menu/menu/menu.component';
import { DetalleComponent } from './Producto/detalle/detalle.component';
import { EditarComponent } from './Producto/editar/editar.component';
import { ListarComponent } from './Producto/listar/listar.component';
import { NuevoComponent } from './Producto/nuevo/nuevo.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  {
    path: 'listar',
    component: ListarComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin', 'user'] },
  },
  {
    path: 'detalle/:id',
    component: DetalleComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin', 'user'] },
  },
  {
    path: 'nuevo',
    component: NuevoComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'editar/:id',
    component: EditarComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
