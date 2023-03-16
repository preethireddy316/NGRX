import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from '@angular/core';
import { AuthResponseData } from '../model/AuthResponseData.model';
import { User } from '../model/user.model';

@Injectable({
    providedIn: 'root',
  })

export class AuthService{
constructor(private http:HttpClient){
}

login(email:string,password:string):Observable<AuthResponseData>{
  console.log('success')
  return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRBASE_KEY}`,
  { email, password, returnSecureToken: true })
}

formatUser(data:AuthResponseData){
const expirationDate=new Date(new Date().getTime()+ +data.expiresIn*1000)  
const user=new User(data.email, data.idToken, data.localId, expirationDate)
return user;
}

getErrorMessege(errMsg:string){
switch(errMsg){
  case 'EMAIL_NOT_FOUND':
    return 'email not found'
    case 'INVALID_PASSWORD':
      return 'invalid password'
    default:
      return 'unknown Error occured'
}

}

}