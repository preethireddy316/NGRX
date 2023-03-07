import { createReducer } from '@ngrx/store';
import { initialState } from './auth.state';

export const AUTH_STATE_NAME='auth'

const _authReducer=createReducer(initialState)

export function AuthReducer(state:any,action:any){
    _authReducer(state,action)
}