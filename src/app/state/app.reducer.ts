import { counterReducer } from "../counter/state/counter.reducer";
import { postReducer } from "../posts/state/post.reducer";

export const appReducer = {
    counter:counterReducer,
    posts: postReducer
}