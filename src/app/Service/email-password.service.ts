import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChangePasswordDto } from '../Modelo/change-password-dto';
import { EmailDto } from '../Modelo/email-dto';

@Injectable({
  providedIn: 'root'
})
export class EmailPasswordService {

  changePasswordUrl = environment.changePasswordUrl;

  constructor(private http: HttpClient) { }

  public sendEmail(dto:EmailDto):Observable<any>{
    return this.http.post<any>(this.changePasswordUrl + 'send-email', dto);
  }

  public changePassword(dto:ChangePasswordDto):Observable<any>{
    return this.http.post<any>(this.changePasswordUrl + 'change-password', dto);
  }
}
