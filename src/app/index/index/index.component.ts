import { Component, OnInit } from '@angular/core';
import { TokenServiceService } from 'src/app/Service/token-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  isLogged = false;
  nombreUsuario = '';

  constructor(private tokenService: TokenServiceService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
      console.log(this.isLogged);
    }else{
      this.isLogged = false;
      this.nombreUsuario = '';
      console.log(this.isLogged);
    }
  }

}
