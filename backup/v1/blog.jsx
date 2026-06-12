// ===== Blog =====

function BlogList({ openPost }) {
  return (
    <section className="section no-border">
      <div className="container">
        <Reveal>
          <div className="section-head" style={{ alignItems: "start" }}>
            <div>
              <div className="section-eyebrow">Blog</div>
              <h2 className="section-title">Notes &amp; <span className="italic">writing</span></h2>
              <p className="section-sub">Short essays on the things I'm thinking about — cooperative SLAM, Gaussian processes for robotics, the PhD process, conference notes, and the tooling I actually use.</p>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--ink-4)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                {BLOG_POSTS.length} posts
              </span>
              <a className="btn" href={`mailto:${PROFILE.email}?subject=Blog%20subscription`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z"/><path d="M4 8l8 6 8-6"/></svg>
                Subscribe by email
              </a>
            </div>
          </div>
        </Reveal>

        <div className="blog-grid">
          {BLOG_POSTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}>
              <div className="blog-card" onClick={() => openPost(p.id)}>
                <div className="cover">
                  <ThreeScene build={buildBlogCover(p.cover)} />
                </div>
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
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
    if (tag === "code") return <pre key={i}><code>{content}</code></pre>;
    return <p key={i}>{content}</p>;
  };

  // Related posts
  const others = BLOG_POSTS.filter(p => p.id !== postId).slice(0, 2);

  return (
    <div className="blog-reader">
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

      {/* Related */}
      <div style={{ marginTop: 60, paddingTop: 30, borderTop: "1px solid var(--line-2)" }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--ink-4)", textTransform: "uppercase", marginBottom: 16 }}>Read next</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {others.map(p => (
            <div key={p.id} className="blog-card" style={{ minHeight: 180 }} onClick={() => openPost(p.id)}>
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
