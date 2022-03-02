import { Component, OnInit } from '@angular/core';
import { TokenServiceService } from 'src/app/Service/token-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  nombreUsuario: string;

  constructor(private tokenService: TokenServiceService) { }

  ngOnInit(): void {
   this.nombreUsuario = this.tokenService.getUserName();
  }

}
