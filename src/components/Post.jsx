export default function Post({ post, deletePost }) {
  return (
    <li>
      {post.title}- {post.content}
      <button onClick={() => deletePost(post.id)}>Eliminar</button>
    </li>
  );
}
