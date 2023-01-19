import { usePostStore } from "../store/usePostStore";
import Button from "./Button";

export default function AddPost() {
  const addPostStore = usePostStore((state) => state.addPost);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const title = data.get("title");
    const content = data.get("content");

    addPostStore({ title, content, id: Date.now() });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Título"
        name="title"
        defaultValue="Post 4"
      />
      <input
        type="text"
        placeholder="Contenido"
        name="content"
        defaultValue="Contenido del post 4"
      />
      <Button
        type="submit"
        className="secondary"
      >
        Crear Post
      </Button>
    </form>
  );
}
