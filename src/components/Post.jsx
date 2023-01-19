export default function Post({ post, children }) {
  return (
    <article>
      {post.title}- {post.content}
      <footer>{children}</footer>
    </article>
  );
}
