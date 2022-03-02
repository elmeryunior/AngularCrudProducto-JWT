import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenServiceService } from 'src/app/Service/token-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged = false;
  isAdmin = false;

  constructor(private tokenService: TokenServiceService,private router: Router) { }

   ngOnInit() {
    this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();
  }

  onLogOut(): void {
    this.tokenService.logOut();
    //this.router.navigate(['/']);
    //window.location.reload();
  }

}
