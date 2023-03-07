import { CounterState } from "../counter/state/counter.state";
import { PostState } from "../posts/state/post.state";

export interface AppState{
    counter:CounterState,
    posts:PostState
} 
