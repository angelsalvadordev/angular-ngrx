import { createAction, props } from '@ngrx/store';
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
const getPosts = createAction(PostActionTypes.GET_POSTS);

const getPostsSuccess = createAction(
  PostActionTypes.GET_POSTS_SUCCESS,
  props<{ payload: Post[] }>()
);

const getPostsFailure = createAction(
  PostActionTypes.GET_POSTS_FAILURE,
  props<{ error: any }>()
);

// ADD POST
const addPost = createAction(
  PostActionTypes.ADD_POST,
  props<{ payload: Post }>()
);

const addPostSuccess = createAction(
  PostActionTypes.ADD_POST_SUCCESS,
  props<{ payload: Post }>()
);

const addPostFailure = createAction(
  PostActionTypes.ADD_POST_FAILURE,
  props<{ error: any }>()
);

// DELETE POST
const deletePost = createAction(
  PostActionTypes.DELETE_POST,
  props<{ payload: number }>()
);

const deletePostSuccess = createAction(
  PostActionTypes.DELETE_POST_SUCCESS,
  props<{ payload: any }>()
);

const deletePostFailure = createAction(
  PostActionTypes.DELETE_POST_FAILURE,
  props<{ error: any }>()
);

export const postActions = {
  getPosts,
  getPostsSuccess,
  getPostsFailure,
  addPost,
  addPostSuccess,
  addPostFailure,
  deletePost,
  deletePostSuccess,
  deletePostFailure,
};
