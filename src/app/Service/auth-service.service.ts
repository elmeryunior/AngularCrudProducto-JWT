import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { NuevoUsuario} from '../Modelo/nuevo-usuario';
import { LoginUsuario} from '../Modelo/login-usuario';
import { JwtDto } from '../Modelo/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  authURL = environment.authUrl;

  constructor(private http: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.http.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.http.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }
}
