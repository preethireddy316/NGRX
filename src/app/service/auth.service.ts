import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { environment } from "src/environments/environment";
import { AppState } from "../state/app.state";


export class AuthService{
constructor(private http:HttpClient,private store: Store<AppState>){

}

login(email:string,password:string){
    this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${environment.FIRBASE_KEY}`,{email,password,returnSecureToken:true})
}
}