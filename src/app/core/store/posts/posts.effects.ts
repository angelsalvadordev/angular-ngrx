import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { postActions } from './posts.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { PostsService } from '../../services/posts.service';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class PostEffects {
  constructor(
    private actions$: Actions,
    private postService: PostsService,
    private toastr: ToastrService
  ) {}

  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postActions.getPosts),
      mergeMap(() =>
        this.postService.getPosts().pipe(
          map((payload) => {
            return postActions.getPostsSuccess({ payload });
          }),
          catchError((error) => {
            error.getPostsError = [
              {
                field: 'get posts endpoint error',
                error: 'No se pudo obtener data de endpoint',
              },
            ];

            return of(postActions.getPostsFailure({ error }));
          })
        )
      )
    )
  );

  addPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postActions.addPost),
      mergeMap((data) =>
        this.postService.addPost(data.payload).pipe(
          map((payload) => {
            return postActions.addPostSuccess({ payload });
          }),
          catchError((error) => {
            error.addPostError = [
              {
                field: 'Add post endpoint error',
                error: 'No se pudo agregar un nuevo post',
              },
            ];
            return of(postActions.addPostFailure({ error }));
          })
        )
      )
    )
  );

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postActions.deletePost),
      mergeMap((data) =>
        this.postService.deletePost(data.payload).pipe(
          map((_) => {
            this.toastr.info(
              'Si bien está habilitado el flujo para eliminar un post, no lo podemos hacer en este momento ya que la data proviene de una fake api :P',
              `POST ${data.payload} ELIMINADO`
            );
            return postActions.deletePostSuccess({ payload: data.payload });
          }),
          catchError((error) => {
            error.deletePostError = [
              {
                field: 'Delete post endpoint error',
                error: 'No se pudo eliminar el post',
              },
            ];
            return of(postActions.deletePostFailure({ error }));
          })
        )
      )
    )
  );
}
