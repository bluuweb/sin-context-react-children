import Button from "./Button";

export default function Post({ post, deletePost }) {
  return (
    <article>
      {post.title}- {post.content}
      <footer>
        <Button deletePost={deletePost} />
      </footer>
    </article>
  );
}
