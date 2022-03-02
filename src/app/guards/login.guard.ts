import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { TokenServiceService } from '../Service/token-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {


  constructor(
    private tokenService: TokenServiceService,
    private router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.tokenService.isLogged()) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

}
