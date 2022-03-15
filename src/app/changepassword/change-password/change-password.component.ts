import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChangePasswordDto } from 'src/app/Modelo/change-password-dto';
import { EmailPasswordService } from 'src/app/Service/email-password.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  password:string;
  confirmPassword:string;
  tokenPassword:string;
  dto: ChangePasswordDto;

  constructor(
    private router: Router,
    private service:EmailPasswordService,
    private toastr: ToastrService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onChangePassword():void{
    if(this.password !== this.confirmPassword){
      this.toastr.error('Las contraseñas no coinciden','Fail',{
        timeOut: 3000, positionClass:'toast-top-center'
      });
      return;
    }
    this.tokenPassword = this.activateRoute.snapshot.params['tokenPassword']; //de esta forma se obtiene el token que viene de la URL
    this.dto = new ChangePasswordDto(this.password,this.confirmPassword,this.tokenPassword);
    this.service.changePassword(this.dto).subscribe(
      data =>{
        this.toastr.success(data.mensaje,'OK',{
          timeOut: 3000, positionClass:'toast-top-center'
        });
        this.router.navigate(['/login']);
      },
      err =>{
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut: 3000, positionClass:'toast-top-center'
        });
      }
    );
  }

}
