import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import AppState from 'src/app/core/models/app-state.interface';
import { Post } from 'src/app/core/models/posts.interface';
import {
  postActions,
  selectPostLoading,
  selectPosts,
  selectPostsError,
} from 'src/app/core/store/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.posts$ = this.store.select(selectPosts);
    this.error$ = this.store.select(selectPostsError);
    this.loading$ = this.store.select(selectPostLoading);
    this.store.dispatch(postActions.getPosts());
  }
}
