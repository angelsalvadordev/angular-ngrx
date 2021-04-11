import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { DeletePostAction } from '../../store/posts/posts.actions';
import AppState from './../../../core/models/app-state.model';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.scss'],
})
export class DeletePostComponent implements OnInit {
  constructor(private store: Store<AppState>, private toastr: ToastrService) {}

  @Input() index: number;

  ngOnInit(): void {}

  deletePost() {
    console.log('Eliminado');
    this.store.dispatch(new DeletePostAction(this.index));
    this.toastr.info(
      'Si bien está habilitado el flujo para eliminar un post, no lo podemos hacer en este momento ya que la data proviene de una fake api :P',
      `ELIMINO EL POST CON ID ${this.index}`
    );
  }
}
