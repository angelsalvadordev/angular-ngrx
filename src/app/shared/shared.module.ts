import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { DeletePostComponent } from './components/delete-post/delete-post.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [PostComponent, PostsComponent, DeletePostComponent],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 7000,
      positionClass: 'toast-bottom-center',
    }),
  ],
  exports: [PostComponent, PostsComponent],
})
export class SharedModule {}
