// ===== App =====

function Nav({ page, go, blogPostOpen }) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [scrollPct, setScrollPct] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const pct = Math.min(1, Math.max(0, window.scrollY / max));
      setScrollPct(pct);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
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

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="nav-brand" style={{ "--scroll-pct": scrollPct }} onClick={() => go("home")}>
          <svg className="brand-tree" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line className="tree-ground" x1="5" y1="46" x2="45" y2="46" strokeWidth="1.5" strokeLinecap="round"/>
            <path className="tree-trunk" d="M21 46 C22 38, 20 34, 18 30 C22 28, 28 28, 32 30 C30 34, 28 38, 29 46 Z"/>
            <path className="tree-branches" d="M18 30 C12 26, 8 24, 4 18 C8 20, 13 22, 18 30 Z M32 30 C38 26, 42 24, 46 18 C42 20, 37 22, 32 30 Z M22 30 C18 22, 14 18, 12 10 C16 14, 19 18, 22 30 Z M28 30 C32 22, 36 18, 38 10 C34 14, 31 18, 28 30 Z"/>
            <path className="tree-twigs" d="M4 18 L6 14 M46 18 L44 14 M12 10 L6 14 M12 10 L18 7 M38 10 L30 7 M38 10 L44 14 M22 30 L25 15 M25 15 L25 11 M25 15 L15 12 M25 15 L35 12 M4 18 L2 20 M46 18 L48 20 M18 7 L20 5 M30 7 L30 5 M6 14 L10 15 M44 14 L40 15" strokeWidth="1.0" strokeLinecap="round"/>
            <circle className="tree-canopy c1" cx="4" cy="18" r="3.2"/>
            <circle className="tree-canopy c2" cx="6" cy="14" r="3.8"/>
            <circle className="tree-canopy c3" cx="12" cy="9" r="4.2"/>
            <circle className="tree-canopy c4" cx="18" cy="7" r="4.2"/>
            <circle className="tree-canopy c5" cx="24" cy="6" r="4.8"/>
            <circle className="tree-canopy c6" cx="30" cy="7" r="4.2"/>
            <circle className="tree-canopy c7" cx="38" cy="9" r="4.2"/>
            <circle className="tree-canopy c8" cx="44" cy="14" r="3.8"/>
            <circle className="tree-canopy c9" cx="46" cy="18" r="3.2"/>
            <circle className="tree-canopy c10" cx="15" cy="12" r="3.8"/>
            <circle className="tree-canopy c11" cx="25" cy="11" r="5.2"/>
            <circle className="tree-canopy c12" cx="35" cy="12" r="3.8"/>
            <circle className="tree-canopy c13" cx="2" cy="20" r="2.8"/>
            <circle className="tree-canopy c14" cx="48" cy="20" r="2.8"/>
            <circle className="tree-canopy c15" cx="20" cy="5" r="3.8"/>
            <circle className="tree-canopy c16" cx="30" cy="5" r="3.8"/>
            <circle className="tree-canopy c17" cx="10" cy="15" r="3.2"/>
            <circle className="tree-canopy c18" cx="40" cy="15" r="3.2"/>
            <path className="tree-roots" d="M10 20 L10 40 M16 22 L16 38 M34 22 L34 38 M40 20 L40 40 M6 22 L6 32 M44 22 L44 32" strokeWidth="0.8" strokeLinecap="round" strokeDasharray="1.5 2"/>
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
