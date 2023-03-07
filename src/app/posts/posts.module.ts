import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostslistComponent } from "./postslist/postslist.component";
import { StoreModule } from '@ngrx/store';
import { postReducer } from './state/post.reducer';
import { CommonModule } from '@angular/common';

const routes:Routes=[{path:'',component:PostslistComponent}]

@NgModule({
    declarations:[PostslistComponent],
    imports:[RouterModule.forChild(routes),FormsModule,CommonModule,ReactiveFormsModule,
        StoreModule.forFeature('posts',postReducer)]
})

export class PostsModule{

}