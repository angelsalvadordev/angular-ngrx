import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  GetPostsAction,
  PostActionTypes,
  GetPostsSuccessAction,
  GetPostsFailureAction,
  AddPostAction,
  AddPostSuccessAction,
  AddPostFailureAction,
  DeletePostAction,
  DeletePostSuccessAction,
  DeletePostFailureAction,
} from './posts.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { PostsService } from './../../../core/services/posts.service';
import { of } from 'rxjs';

@Injectable()
export class PostEffects {
  constructor(private actions$: Actions, private postService: PostsService) {}

  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType<GetPostsAction>(PostActionTypes.GET_POSTS),
      mergeMap(() =>
        this.postService.getPosts().pipe(
          map((data) => {
            console.log('data ', data);
            return new GetPostsSuccessAction(data);
          }),
          catchError((error) => of(new GetPostsFailureAction(error)))
        )
      )
    )
  );

  addPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType<AddPostAction>(PostActionTypes.ADD_POST),
      mergeMap((data) =>
        this.postService.addPost(data.payload).pipe(
          map((data) => {
            return new AddPostSuccessAction(data);
          }),
          catchError((error) => of(new AddPostFailureAction(error)))
        )
      )
    )
  );

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType<DeletePostAction>(PostActionTypes.DELETE_POST),
      mergeMap((data) =>
        this.postService.deletePost(data.payload).pipe(
          map((data) => {
            return new DeletePostSuccessAction(data);
          }),
          catchError((error) => of(new DeletePostFailureAction(error)))
        )
      )
    )
  );
}
