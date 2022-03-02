import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../Modelo/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoserviceService {

  productoURL = environment.productoURL;

  constructor(private http:HttpClient) { }

  public listado(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.productoURL+ 'lista');
  }

  public detail(id: number): Observable<Producto> {
    return this.http.get<Producto>(this.productoURL + 'detail/' + id);
  }

  public detailName(nombre: string): Observable<Producto> {
    return this.http.get<Producto>(this.productoURL + 'detailname/' + nombre);
  }

  public save(producto: Producto): Observable<any> {
    return this.http.post<any>(this.productoURL + 'create', producto);
  }

  public update(id: number, producto: Producto): Observable<any> {
    return this.http.put<any>(this.productoURL + 'update/' + id, producto);
  }

  public delete(id:number): Observable<any> {
    return this.http.delete<any>(this.productoURL + 'delete/' + id);
  }
}
