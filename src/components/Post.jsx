import Button from "./Button";
import { usePostStore } from "../store/usePostStore";

export default function Post({ post }) {
  const removePostStore = usePostStore((state) => state.removePost);
  return (
    <article>
      {post.title}- {post.content}
      <footer>
        <Button
          onClick={() => removePostStore(post)}
          className="secondary"
        >
          Eliminar
        </Button>
      </footer>
    </article>
  );
}
