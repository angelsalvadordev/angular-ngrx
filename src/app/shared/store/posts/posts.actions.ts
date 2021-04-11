import { Action } from '@ngrx/store';
import { Post } from './posts.model';

export enum PostActionTypes {
  GET_POSTS = '[POSTS] Get posts',
  GET_POSTS_SUCCESS = '[POSTS] Get posts success',
  GET_POSTS_FAILURE = '[POSTS] Get posts failure',

  ADD_POST = '[POSTS] Add post',
  ADD_POST_SUCCESS = '[POSTS] Add post success',
  ADD_POST_FAILURE = '[POSTS] Add post failure',

  DELETE_POST = '[POSTS] Delete post',
  DELETE_POST_SUCCESS = '[POSTS] Delete post success',
  DELETE_POST_FAILURE = '[POSTS] Delete post failure',
}

// GET POSTS
export class GetPostsAction implements Action {
  readonly type = PostActionTypes.GET_POSTS;
}

export class GetPostsSuccessAction implements Action {
  readonly type = PostActionTypes.GET_POSTS_SUCCESS;
  constructor(public payload: Post[]) {}
}

export class GetPostsFailureAction implements Action {
  readonly type = PostActionTypes.GET_POSTS_FAILURE;
  constructor(public payload: any) {}
}

// ADD POST
export class AddPostAction implements Action {
  readonly type = PostActionTypes.ADD_POST;
  constructor(public payload: Post) {}
}

export class AddPostSuccessAction implements Action {
  readonly type = PostActionTypes.ADD_POST_SUCCESS;
  constructor(public payload: Post[]) {}
}

export class AddPostFailureAction implements Action {
  readonly type = PostActionTypes.ADD_POST_FAILURE;
  constructor(public payload: any) {}
}

// DELETE POST
export class DeletePostAction implements Action {
  readonly type = PostActionTypes.DELETE_POST;
  constructor(public payload: number) {}
}

export class DeletePostSuccessAction implements Action {
  readonly type = PostActionTypes.DELETE_POST_SUCCESS;
  constructor(public payload: Post[]) {}
}

export class DeletePostFailureAction implements Action {
  readonly type = PostActionTypes.DELETE_POST_FAILURE;
  constructor(public payload: any) {}
}

export type PostAction =
  | GetPostsAction
  | GetPostsSuccessAction
  | GetPostsFailureAction
  | AddPostAction
  | AddPostSuccessAction
  | AddPostFailureAction
  | DeletePostAction
  | DeletePostSuccessAction
  | DeletePostFailureAction;
