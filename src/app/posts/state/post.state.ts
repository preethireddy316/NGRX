import { Post } from './../../model/model.post';

interface PostsState{posts:Post[]}

export interface PostState{
    posts:Post[]
}

export const initialState :PostState=
{posts:[{id:1,title:"sample title1",description:"sample description1"},{id:2,title:"sample title2",description:"sample description2"}]}