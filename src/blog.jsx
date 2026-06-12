// ===== Blog =====

function BlogList({ openPost }) {
  return (
    <div className="iworld" data-screen-label="Blog">
      <HouseWorld />
      <div className="iw-content">
        <header className="iw-hero">
          <div className="j-eyebrow">Blog</div>
          <h1 className="iw-title">Notes from <span className="outline">the field</span></h1>
        </header>
        <div className="j-card wide iw-card">
          <div className="iw-blog-grid">
            {BLOG_POSTS.map(p => (
              <div key={p.id} className="j-blog-card" onClick={() => openPost(p.id)}>
                <div className="meta">
                  <span>{p.category}</span>
                  <span className="dot"></span>
                  <span>{p.date}</span>
                  <span className="dot"></span>
                  <span>{p.readTime}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <span className="arrow">
                  Read post
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogReader({ postId, back, openPost }) {
  const post = BLOG_POSTS.find(p => p.id === postId);
  if (!post) {
    return (
      <div className="blog-reader">
        <a className="blog-back" onClick={back} style={{ cursor: "pointer" }}>← Back to blog</a>
        <p>Post not found.</p>
      </div>
    );
  }

  const renderBlock = ([tag, content], i) => {
    if (tag === "p") return <p key={i}>{content}</p>;
    if (tag === "h2") return <h2 key={i}>{content}</h2>;
    if (tag === "h3") return <h3 key={i}>{content}</h3>;
    if (tag === "blockquote") return <blockquote key={i}>{content}</blockquote>;
    return <p key={i}>{content}</p>;
  };

  const others = BLOG_POSTS.filter(p => p.id !== postId).slice(0, 2);

  return (
    <div className="blog-reader" data-screen-label={`Blog post: ${post.title}`}>
      <a className="blog-back" onClick={back} style={{ cursor: "pointer" }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 14, height: 14 }}><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back to blog
      </a>
      <div className="reader-meta">{post.category} · {post.date} · {post.readTime}</div>
      <h1>{post.title}</h1>
      <div className="cover-large">
        <ThreeScene build={buildBlogCover(post.cover)} />
      </div>
      <article>
        {post.body.map(renderBlock)}
      </article>

      <div style={{ marginTop: 60, paddingTop: 30, borderTop: "1px solid var(--line-2)" }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--ink-4)", textTransform: "uppercase", marginBottom: 16 }}>Read next</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {others.map(p => (
            <div key={p.id} className="j-blog-card" style={{ minHeight: 160 }} onClick={() => openPost(p.id)}>
              <div className="meta">
                <span>{p.category}</span>
                <span className="dot"></span>
                <span>{p.date}</span>
              </div>
              <h3 style={{ fontSize: 20 }}>{p.title}</h3>
              <span className="arrow">
                Read
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

window.BlogList = BlogList;
window.BlogReader = BlogReader;
