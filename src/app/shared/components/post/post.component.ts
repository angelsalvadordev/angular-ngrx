import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/core/models/posts.interface';

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
