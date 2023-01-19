import Post from "./Post";
import AddPost from "./AddPost";
import { usePostStore } from "../store/usePostStore";

export default function LayoutPosts() {
  const postStore = usePostStore((state) => state.posts);

  return (
    <>
      <AddPost />

      <h2>Lista de todos los posts</h2>

      {postStore.map((post) => (
        <Post
          key={post.id}
          post={post}
        />
      ))}

      {postStore.length === 0 && <article>No hay Posts</article>}

      <footer style={{ marginTop: "1rem" }}>Footer example posts</footer>
    </>
  );
}
