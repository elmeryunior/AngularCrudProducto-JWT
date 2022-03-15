import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { ChangePasswordComponent } from './changepassword/change-password/change-password.component';
import { SendEmailComponent } from './changepassword/send-email/send-email.component';
import { LoginGuard } from './guards/login.guard';
import { ProdGuardGuard } from './guards/prod-guard.guard';
import { IndexComponent } from './index/index/index.component';
import { DetalleComponent } from './Producto/detalle/detalle.component';
import { EditarComponent } from './Producto/editar/editar.component';
import { ListarComponent } from './Producto/listar/listar.component';
import { NuevoComponent } from './Producto/nuevo/nuevo.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent, canActivate:[LoginGuard] },
  { path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },
  { path: 'sendemail', component: SendEmailComponent, canActivate:[LoginGuard] },
  { path: 'change-password/:tokenPassword', component: ChangePasswordComponent, canActivate:[LoginGuard] },
  { path: 'listar', component: ListarComponent, canActivate: [ProdGuardGuard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'detalle/:id', component: DetalleComponent, canActivate: [ProdGuardGuard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'nuevo', component: NuevoComponent, canActivate: [ProdGuardGuard], data: { expectedRol: ['admin'] } },
  { path: 'editar/:id', component: EditarComponent, canActivate: [ProdGuardGuard], data: { expectedRol: ['admin'] } },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
