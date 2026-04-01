const FeedItem = ({ post }) => {
  return (
    <article className="feed-item">
      <header className="feed-header">
        <h2>{post.titulo}</h2>
        <p className="feed-meta">
          {post.autor} • {post.data}
        </p>
      </header>

      <div className="feed-content">
        {post.resumo}
      </div>
    </article>
  );
};

export default FeedItem;