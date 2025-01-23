import { defineStore } from 'pinia';
import type { Post } from '../../types/Post';

export const usePostStore = defineStore('post', {
  state: () => ({
    post: null as Post | null,
    posts: [] as Post[],
  }),
  actions: {
    setPost(post: Post) {
      this.post = post;
    },
    setPosts(posts: Post[]) {
      this.posts = posts;
    },
  },
});
