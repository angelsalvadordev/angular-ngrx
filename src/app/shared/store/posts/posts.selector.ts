import { createSelector } from '@ngrx/store';
import { selectPostsState } from '../store.state';

/*
  SELECTORES: Para lectura de datos del state
*/
export const selectPosts = createSelector(
  selectPostsState,
  (state) => state.posts
);

export const selectPostsError = createSelector(
  selectPostsState,
  (state) => state.error
);

export const selectPostLoading = createSelector(
  selectPostsState,
  (state) => state.loading
);
