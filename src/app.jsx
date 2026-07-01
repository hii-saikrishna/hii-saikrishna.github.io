// ===== App =====

function Nav({ page, go, blogPostOpen }) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    { id: "home", label: "Home" },
    { id: "research", label: "Research" },
    { id: "publications", label: "Publications" },
    { id: "blog", label: "Blog" },
    { id: "updates", label: "Updates" },
    { id: "cv", label: "CV" },
    { id: "contact", label: "Contact" },
  ];
  const activeId = blogPostOpen ? "blog" : page;
  const isExpanded = scrolled || page !== "home";

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className={`nav-brand ${isExpanded ? "expanded" : ""}`} onClick={() => go("home")}>
          <span className="brand-slash">//</span>
          <span className="brand-text">
            <span className="brand-collapsed">GSK</span>
            <span className="brand-expanded">Sai Krishna Ghanta</span>
          </span>
        </div>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {items.map(it => (
            <span
              key={it.id}
              className={`nav-link ${activeId === it.id ? "active" : ""}`}
              onClick={() => { go(it.id); setOpen(false); }}
            >{it.label}</span>
          ))}
        </div>
        <button className="menu-btn" onClick={() => setOpen(o => !o)} aria-label="menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 22, height: 22 }}>
            <path d={open ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"}/>
          </svg>
        </button>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div>© 2026 Sai Krishna Ghanta · Athens, GA</div>
        <div className="mono" style={{ fontSize: 11, letterSpacing: "0.06em" }}>
          Built with care · Last updated <span style={{ color: "var(--ink-2)" }}>May 2026</span>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const initial = (typeof window !== "undefined" && window.location.hash) || "";
  const parseHash = (h) => {
    h = (h || "").replace(/^#\/?/, "");
    if (!h) return { page: "home", post: null };
    if (h.startsWith("blog/")) return { page: "blog", post: h.slice(5) };
    const [page, anchor] = h.split("/");
    return { page, post: null, anchor: anchor || null };
  };
  const [route, setRoute] = React.useState(parseHash(initial));

  React.useEffect(() => {
    const onHash = () => setRoute(parseHash(window.location.hash));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  React.useEffect(() => {
    if (route.anchor) {
      window.requestAnimationFrame(() => {
        const target = document.getElementById(`research-${route.anchor}`);
        if (target) target.scrollIntoView({ block: "start", behavior: "smooth" });
      });
      return;
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [route.page, route.post, route.anchor]);

  const go = (page, anchor) => {
    window.location.hash = page === "home" ? "" : `#/${page}${anchor ? `/${anchor}` : ""}`;
  };
  const openPost = (id) => {
    window.location.hash = `#/blog/${id}`;
  };
  const backToBlog = () => {
    window.location.hash = "#/blog";
  };

  let content;
  if (route.page === "home") content = <HomePage go={go} />;
  else if (route.page === "research") content = <ResearchPage />;
  else if (route.page === "publications") content = <PublicationsPage />;
  else if (route.page === "updates") content = <UpdatesPage />;
  else if (route.page === "cv" || route.page === "resume") content = <CVPage />;
  else if (route.page === "contact") content = <ContactPage />;
  else if (route.page === "blog") {
    content = route.post
      ? <BlogReader postId={route.post} back={backToBlog} openPost={openPost} />
      : <BlogList openPost={openPost} />;
  } else {
    content = <HomePage go={go} />;
  }

  return (
    <>
      <Nav page={route.page} go={go} blogPostOpen={!!route.post} />
      <main>{content}</main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
