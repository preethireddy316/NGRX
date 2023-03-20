import { sharedReducer } from "./shared/shared.reducer";
import { sharedState } from "./shared/shared.state";
import { SHARED_STATE_NAME } from "./shared/shared.selector";
import { AuthReducer, AUTH_STATE_NAME } from "../auth/state/auth.reducer";
import { AuthState } from "../auth/state/auth.state";

export interface AppState{
// [SHARED_STATE_NAME]:sharedState,
[AUTH_STATE_NAME]:AuthState
} 


export const appReducer = {
// [SHARED_STATE_NAME]:sharedReducer,
[AUTH_STATE_NAME]:AuthReducer
};