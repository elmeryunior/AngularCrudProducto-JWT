import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/Modelo/Producto';
import { ProductoserviceService } from 'src/app/Service/productoservice.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  nombre = '';
  precio: number = null;

  constructor(
    private router: Router,
    private productoservice: ProductoserviceService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const producto = new Producto(this.nombre, this.precio);
    this.productoservice.save(producto).subscribe(
      data => {
        this.toastr.success('Producto Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['listar']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['listar']);
      }
    );
  }

}
