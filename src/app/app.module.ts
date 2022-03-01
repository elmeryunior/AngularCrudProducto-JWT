import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListarComponent } from './Producto/listar/listar.component';
import { EditarComponent } from './Producto/editar/editar.component';
import { DetalleComponent } from './Producto/detalle/detalle.component';
import { NuevoComponent } from './Producto/nuevo/nuevo.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { interceptorProvider } from './interceptors/prod-interceptor.service';

// external librerias para animacion
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { MenuComponent } from './menu/menu/menu.component';
import { IndexComponent } from './index/index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    EditarComponent,
    DetalleComponent,
    NuevoComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
