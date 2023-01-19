import { useState } from "react";
import LayoutPosts from "./components/LayoutPosts";
import AddPost from "./components/AddPost";

const initialPosts = [
  {
    id: 1,
    title: "Post 1",
    content: "Contenido del post 1",
  },
  {
    id: 2,
    title: "Post 2",
    content: "Contenido del post 2",
  },
  {
    id: 3,
    title: "Post 3",
    content: "Contenido del post 3",
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

      <LayoutPosts
        posts={posts}
        deletePost={deletePost}
      />
    </div>
  );
};

export default App;
