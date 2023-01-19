import Post from "./Post";

export default function LayoutPosts({ posts, deletePost }) {
  return (
    <>
      <h2>Lista de todos los posts</h2>

      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          deletePost={deletePost}
        />
      ))}

      {posts.length === 0 && <article>No hay Posts</article>}

      <footer style={{ marginTop: "1rem" }}>Footer example posts</footer>
    </>
  );
}
