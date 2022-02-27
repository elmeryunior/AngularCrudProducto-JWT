import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/Modelo/Producto';
import { ProductoserviceService } from 'src/app/Service/productoservice.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  producto:Producto

  constructor(
    private productoservice: ProductoserviceService,
    private activatedRoute:ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.productoservice.detail(id)
    .subscribe(data=>{
      this.producto = data;
    },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.productoservice.update(id,this.producto).subscribe(
      data => {
        this.toastr.success('Producto Actualizado', 'OK', {
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
