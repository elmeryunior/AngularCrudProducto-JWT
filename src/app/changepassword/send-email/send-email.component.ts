import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmailDto } from 'src/app/Modelo/email-dto';
import { EmailPasswordService } from 'src/app/Service/email-password.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

  mailTo : string;
  dto : EmailDto;

  constructor(
    private service:EmailPasswordService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onSendEmail():void{
    this.dto = new EmailDto(this.mailTo);
    this.service.sendEmail(this.dto).subscribe(
      data =>{
        this.toastr.success(data.mensaje,'OK',{
          timeOut: 3000, positionClass:'toast-top-center'
        });
      },
      err =>{
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut: 3000, positionClass:'toast-top-center'
        });
      }
    );
  }

}
