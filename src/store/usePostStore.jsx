import { create } from "zustand";

const initialPosts = [
  {
    id: 1,
    title: "Post 1",
    content: "Contenido del post 1",
  },
];

export const usePostStore = create((set) => ({
  posts: initialPosts,
  addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
  removePost: (post) =>
    set((state) => ({ posts: state.posts.filter((t) => t !== post) })),
}));
