export default function Button({ deletePost }) {
  return (
    <button
      onClick={() => deletePost(post.id)}
      className="contrast"
    >
      Eliminar
    </button>
  );
}
