import { createSelector } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';
import { PostState } from './post.state';

const getPostState = createFeatureSelector<PostState>('posts')

export const getPosts = createSelector(getPostState,(state:any)=>{
    return state.posts
}) 