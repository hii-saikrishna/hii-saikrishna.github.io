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
        <div className="nav-brand" onClick={() => go("home")}>
          <svg className="brand-tree" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line className="tree-ground" x1="8" y1="36" x2="32" y2="36" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round"/>
            <path className="tree-trunk" d="M20 36 L20 20" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
            <path className="tree-branches" d="M20 26 C14 22, 10 20, 8 16 M20 24 C26 20, 30 18, 32 14 M20 22 C16 18, 12 14, 11 10 M20 22 C24 18, 28 14, 29 10" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round"/>
            <circle className="tree-canopy c1" cx="8" cy="14" r="4" fill="var(--accent)"/>
            <circle className="tree-canopy c2" cx="14" cy="8" r="5" fill="var(--accent)"/>
            <circle className="tree-canopy c3" cx="20" cy="6" r="5.5" fill="var(--accent)"/>
            <circle className="tree-canopy c4" cx="26" cy="8" r="5" fill="var(--accent)"/>
            <circle className="tree-canopy c5" cx="32" cy="12" r="4.5" fill="var(--accent)"/>
            <circle className="tree-canopy c6" cx="11" cy="10" r="3.5" fill="var(--accent)"/>
            <circle className="tree-canopy c7" cx="29" cy="9" r="3.5" fill="var(--accent)"/>
            <path className="tree-roots" d="M12 16 L11 28 M14 14 L13 26 M26 14 L27 26 M28 13 L29 27 M10 17 L9 30 M30 15 L31 29" stroke="var(--accent)" strokeWidth="0.8" strokeLinecap="round" strokeDasharray="1.5 2"/>
          </svg>
          <span className="brand-monogram">GSK</span>
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
