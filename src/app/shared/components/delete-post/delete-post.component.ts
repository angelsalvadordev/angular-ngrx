import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { postActions } from 'src/app/core/store/posts';
import AppState from '../../../core/models/app-state.interface';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.scss'],
})
export class DeletePostComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  @Input() index: number;

  ngOnInit(): void {}

  deletePost() {
    this.store.dispatch(postActions.deletePost({ payload: this.index }));
  }
}
