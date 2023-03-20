import { sharedState } from './../../store/shared/shared.state';
import { setLoadingSpinner, setErrorMessage } from './../../store/shared/shared.actions';
import { Store } from '@ngrx/store';
// import { AuthService } from './../../service/auth.service';
// import { Injectable} from "@angular/core";
// import { Actions, createEffect, ofType } from "@ngrx/effects";
// import { loginStart, loginSuccess } from "./auth.actions";
// import { exhaustMap,map } from 'rxjs/operators';
// import { Action } from '@ngrx/store';
// import { Observable } from 'rxjs';

// @Injectable()

// export class AuthEffects{
//     constructor(private actions$:Actions,private AuthService:AuthService){

//     }

//  login$=createEffect(()=>{
//         return this.actions$.pipe(
//             ofType(loginStart),
//         exhaustMap((action)=>{
//                 return this.AuthService.login(action.email,action.password).pipe(
//                     map(()=>{
//                 return loginSuccess()
//             }
//             ))
//         }))})

// }

import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { loginStart, loginSuccess } from './auth.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { TypedAction } from '@ngrx/store/src/models';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService,private router:Router,private store:Store<sharedState>) {}

 l=(action: { email: string; password: string; } & TypedAction<"[auth page] login start">)=>{

    return this.authService.login(action.email, action.password).pipe(
        map((data) => {
          this.store.dispatch(setLoadingSpinner({status:false}))
          this.store.dispatch(setErrorMessage({message:''}))

          console.log('success in effects')
          const user=this.authService.formatUser(data)
          return loginSuccess({user});
        }),catchError(ErrorResponse=>{
          console.log(ErrorResponse.error.error.message)
          const message = this.authService.getErrorMessege(ErrorResponse.error.error.message)
          
          return of(setErrorMessage({message:message}));
          
        })
      );
  }

  login$:any = createEffect((): Observable<any> => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => this.l(action))
    );
  });


  loginRedirect=createEffect(()=>{
    return this.actions$.pipe(ofType(loginSuccess),tap(action=>{
      this.router.navigate(['/'])
    }))
  },{dispatch:false})
}