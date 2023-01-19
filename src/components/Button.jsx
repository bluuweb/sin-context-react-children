export default function Button({ deletePost, postId }) {
  return (
    <button
      onClick={() => deletePost(postId)}
      className="contrast"
    >
      Eliminar
    </button>
  );
}
