import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/Modelo/Producto';
import { ProductoserviceService } from 'src/app/Service/productoservice.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  producto: Producto

  constructor(
    private productoservice:ProductoserviceService,
    private router: Router,
    private toastr: ToastrService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.productoservice.detail(id)
    .subscribe(
      data =>{
        this.producto = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  volver(): void{
    this.router.navigate(['listar']);
  }

}
