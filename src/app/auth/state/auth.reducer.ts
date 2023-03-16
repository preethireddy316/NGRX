import { loginSuccess } from './auth.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState } from './auth.state';

export const AUTH_STATE_NAME='auth'

const _authReducer=createReducer(initialState,on(loginSuccess,(state:any,action:any)=>{
    return {...state,user:action.user}
}))

export function AuthReducer(state:any,action:any){
    _authReducer(state,action)
}