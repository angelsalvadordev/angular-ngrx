import { PostAction, PostActionTypes } from './posts.actions';
import { Post } from './posts.model';

export interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | any;
}

const initialState: PostState = {
  posts: [],
  loading: false,
  error: '',
};

export function PostsReducer(
  state: PostState = initialState,
  action: PostAction
) {
  switch (action.type) {
    case PostActionTypes.GET_POSTS:
      return {
        ...state,
        loading: true,
      };
    case PostActionTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case PostActionTypes.GET_POSTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
