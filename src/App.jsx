import { useState } from "react";
import LayoutPosts from "./components/LayoutPosts";
import AddPost from "./components/AddPost";
import Post from "./components/Post";
import Button from "./components/Button";

const initialPosts = [
  {
    id: 1,
    title: "Post 1",
    content: "Contenido del post 1",
  },
];

const App = () => {
  const [posts, setPosts] = useState(initialPosts);

  const createPost = (post) => {
    setPosts([...posts, post]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="container">
      <h1>¿Es necesario el context?</h1>

      <AddPost createPost={createPost} />

      <LayoutPosts>
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            deletePost={deletePost}
          >
            <Button
              onClick={() => deletePost(post.id)}
              className="secondary"
            >
              Eliminar
            </Button>
          </Post>
        ))}

        {posts.length === 0 && <article>No hay Posts</article>}
      </LayoutPosts>
    </div>
  );
};

export default App;
