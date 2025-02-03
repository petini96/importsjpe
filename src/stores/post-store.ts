import { defineStore } from 'pinia';
import type { Post } from '../types/Post';
import { fetchPosts } from '../services/postService';

export const usePostStore = defineStore('post', {
  state: () => ({
    selectedPost: null as Post | null,
    post: null as Post | null,
    posts: [] as Post[],
  }),
  actions: {
    async fetchPosts(page: number = 0, size: number = 10): Promise<void> {
      try {
        const fetchedPosts = await fetchPosts(page, size);
        this.setPosts(fetchedPosts.content);
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
      }
    },
    setSelectedPost(post: Post): void {
      this.selectedPost = post;
    },
    setPost(post: Post): void {
      this.post = post;
    },
    setPosts(posts: Post[]): void {
      this.posts = posts;
    },
  },
});
