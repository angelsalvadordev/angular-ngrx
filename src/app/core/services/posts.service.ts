import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/posts.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}
  api = 'https://jsonplaceholder.typicode.com';

  getPosts() {
    return this.http.get<Post[]>(`${this.api}/posts`, {
      responseType: 'json',
    });
  }

  addPost(post: Post) {
    return this.http.post<Post>(`${this.api}/posts`, post, {
      responseType: 'json',
    });
  }

  deletePost(id: number) {
    return this.http.delete<any>(`${this.api}/posts/${id}`, {
      responseType: 'json',
    });
  }
}
