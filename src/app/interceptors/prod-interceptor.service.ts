import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { catchError, concatMap, Observable, throwError } from 'rxjs';
import { TokenServiceService } from '../Service/token-service.service';
import { JwtDto } from '../Modelo/jwt-dto';
import { AuthServiceService } from '../Service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProdInterceptorService implements HttpInterceptor {

  constructor(private tokenService: TokenServiceService,private authService: AuthServiceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(!this.tokenService.isLogged()){
      return next.handle(req);
    }

    let intReq = req;
    const token = this.tokenService.getToken();
    if (token != null) {
      intReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token)});
    }
    return next.handle(intReq).pipe(catchError((err: HttpErrorResponse) =>{
      if(err.status === 401){
        const dto:JwtDto = new JwtDto(this.tokenService.getToken());
        return this.authService.refresToken(dto).pipe(concatMap((data : any) =>{
        this.tokenService.setToken(data.token);
        intReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token)});
        return next.handle(intReq);
        }));
      }else{
        this.tokenService.logOut();
        return throwError(err);
      }
    }));
  }
}

export const interceptorProvider = [{provide: HTTP_INTERCEPTORS, useClass: ProdInterceptorService, multi: true}];
