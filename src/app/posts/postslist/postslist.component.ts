import { PostState } from './../state/post.state';
import { getPosts } from './../state/post.selector';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-postslist',
  templateUrl: './postslist.component.html',
  styleUrls: ['./postslist.component.css']
})
export class PostslistComponent implements OnInit {
posts:any;
constructor(private store:Store<PostState>){
}

ngOnInit(): void {
  this.store.select(getPosts).subscribe(data=>{
    this.posts=data
    console.log(this.posts)
  })
}

}
