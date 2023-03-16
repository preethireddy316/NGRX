import { createAction, props } from '@ngrx/store';
const SET_LOADING_ACTION ='[shared state] set loading action'
const SET_ERROR_MESSAGE='[shared state] set error messege'

export const setLoadingSpinner=createAction(SET_LOADING_ACTION,props<{status:boolean}>())

export const setErrorMessage =createAction(SET_ERROR_MESSAGE,props<{message:string}>())

