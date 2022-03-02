import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root',
})
export class TokenServiceService {

  roles: Array<string> = [];

  constructor(
    private router: Router
  ) {}

  public setToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public isLogged():boolean{
    if(this.getToken()){
      return true;
    }
    return false;
  }

  public getUserName(): string {
    if(!this.getToken()){
      return null;
    }
    //esto es para separar el token y obtener la posición 1
    const payload = this.getToken().split('.')[1];
    //decodificar el subtoken obtenido
    const payloadDecoded = atob(payload);
    //convertir el subtoken decodificado a un JSON
    const value = JSON.parse(payloadDecoded);
    //se obtiene el nombre de usuario
    const username = value.sub;
    return username;
  }

  public isAdmin(): boolean {
    if(!this.isLogged()){
      return false;
    }
    //esto es para separar el token y obtener la posición 1
    const payload = this.getToken().split('.')[1];
    //decodificar el subtoken obtenido
    const payloadDecoded = atob(payload);
    //convertir el subtoken decodificado a un JSON
    const value = JSON.parse(payloadDecoded);
    //se obtienen los roles
    const roles = value.roles;
    //se verifica que se de rol admin
    if(roles.indexOf('ROLE_ADMIN') < 0){
      return false;
    }
    return true;
  }

  public logOut(): void {
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }
}
