import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelo/Producto';
import { ProductoserviceService } from 'src/app/Service/productoservice.service';
import { ToastrService } from 'ngx-toastr';
import { TokenServiceService } from 'src/app/Service/token-service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  productos: Producto[] = [];
  isAdmin = false;

  constructor(
    private productoservice: ProductoserviceService,
    private toastr: ToastrService,
    private tokenService: TokenServiceService
    ) { }

  ngOnInit(): void {
    this.cargarProductos();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarProductos(): void {
    this.productoservice.listado().subscribe(
      data => {
        this.productos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id:number) {
    this.productoservice.delete(+id).subscribe(
      data => {
        this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarProductos();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

}
