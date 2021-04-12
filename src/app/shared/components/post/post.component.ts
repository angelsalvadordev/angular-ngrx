import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../core/store/posts/posts.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Input() index: number;

  constructor() {}

  ngOnInit(): void {}
}
