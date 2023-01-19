export default function LayoutPosts({ children }) {
  return (
    <>
      <h2>Lista de todos los posts</h2>

      {children}

      <footer style={{ marginTop: "1rem" }}>Footer example posts</footer>
    </>
  );
}
