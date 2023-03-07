import { AuthService } from './../../service/auth.service';
import { Injectable} from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginStart, loginSuccess } from "./auth.actions";
import { exhaustMap,map } from 'rxjs/operators';
import { Action } from '@ngrx/store';

@Injectable()

export class AuthEffects{
    constructor(private actions$:Actions,private AuthService:AuthService){

    }

 login$=createEffect(()=>{
        return this.actions$.pipe(
            ofType(loginStart),
        exhaustMap((action)=>{
                return this.AuthService.login(action.email,action.password).pipe(
                    map(()=>{
                return loginSuccess()
            }
            ))
        }))})

}