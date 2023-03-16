import { createReducer, on } from '@ngrx/store';
import { setErrorMessage, setLoadingSpinner } from './shared.actions';
import { initialState } from './shared.state';

const _sharedReducer = createReducer(
  initialState,
  on(setLoadingSpinner, (state, action) => {
    console.log(action,"action")
    return {
      ...state,
      isLoading: action.status,
    };
  })
  ,on(setErrorMessage,(state:any,action:any)=>{
    return {
      ...state,errorMessage:action.message
    }
  })
)

export function sharedReducer(state:any, action:any) {
  return _sharedReducer(state, action);
}