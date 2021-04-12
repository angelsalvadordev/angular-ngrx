import { createReducer, on, Action } from '@ngrx/store';
import { postActions } from './posts.actions';
import { Post } from './posts.model';

export interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | any;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: '',
};

// Es el reemplazo de una logica con switch
const reducer = createReducer(
  initialState,

  on(postActions.getPosts, (state: PostsState) => ({
    ...state,
    loading: true,
  })),

  on(postActions.getPostsSuccess, (state, { payload }) => ({
    ...state,
    posts: payload,
    loading: false,
  })),

  on(postActions.getPostsFailure, (state: PostsState, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(postActions.deletePost, (state: PostsState) => ({
    ...state,
    loading: true,
  })),

  on(postActions.deletePostSuccess, (state: PostsState, { payload }) => {
    let updatingPosts = [...state.posts];
    updatingPosts = updatingPosts.filter((post) => post.id !== payload);

    return {
      ...state,
      posts: updatingPosts,
      loading: false,
    };
  }),

  on(postActions.deletePostFailure, (state: PostsState, { error }) => {
    return {
      ...state,
      loading: false,
      error,
    };
  })
);

export function postsReducer(
  state: PostsState = initialState,
  action: Action
): PostsState {
  return reducer(state, action);
}
