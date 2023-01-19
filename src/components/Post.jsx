import Button from "./Button";

export default function Post({ post, deletePost }) {
  return (
    <article>
      {post.title}- {post.content}
      <footer>
        <Button
          onClick={() => deletePost(post.id)}
          className="secondary"
        >
          Eliminar
        </Button>
      </footer>
    </article>
  );
}
