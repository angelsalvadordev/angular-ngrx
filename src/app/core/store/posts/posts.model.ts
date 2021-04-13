import { Post } from '../../models/posts.interface';

export interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | any;
}
