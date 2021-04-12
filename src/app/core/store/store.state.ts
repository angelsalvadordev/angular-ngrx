import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import AppState from '../models/app-state.model';
import { postsReducer, PostsState } from './posts/posts.reducer';

export const reducers: ActionReducerMap<AppState> = {
  posts: postsReducer,
};

export const selectPostsState = createFeatureSelector<AppState, PostsState>(
  'posts'
);
