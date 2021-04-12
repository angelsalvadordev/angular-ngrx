import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import AppState from 'src/app/core/models/app-state.model';
import { postActions } from '../../store/posts/posts.actions';
import { Post } from './../../store/posts/posts.model';
import {
  selectPosts,
  selectPostsError,
  selectPostLoading,
} from './../../store/posts/posts.selector';

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
