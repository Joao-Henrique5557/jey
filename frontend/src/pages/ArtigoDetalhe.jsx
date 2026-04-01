const ArtigoDetalhe = ({ post }) => {
  return (
    <article>
      <h1>{post.titulo}</h1>
      {post.conteudo}
    </article>
  );
};

export default ArtigoDetalhe;