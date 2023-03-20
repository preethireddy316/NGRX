import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AUTH_STATE_NAME } from './auth.reducer';
import { AuthState } from './auth.state';

const getAuthState = createFeatureSelector<AuthState>('auth')

export const isAuthenticated =createSelector(getAuthState,(state=>
    {   
        console.log(state,"state.user")
    return state.user?true:false;
    }
    ))