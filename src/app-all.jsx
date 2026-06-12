// ===== CONSOLIDATED APP =====
// Rich 3D scenes live in their own files and are loaded BEFORE this one:
//   data.jsx → robots.jsx → world.jsx → scenes-pages.jsx → globe.jsx → app-all.jsx
// This file owns the inline ThreeScene host + page components + routing, and
// wires each page to the detailed scene built in those modules.

// ===== Three.js Scene Host (inline, sized canvases) =====
function ThreeScene({ build, className, style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.THREE) return;
    const w = el.clientWidth || 400;
    const h = el.clientHeight || 400;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h, false);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
    camera.position.set(0, 0, 5);

    const ctx = { scene, camera, renderer, el, mouse: { x: 0, y: 0 } };
    const api = build(ctx) || {};

    let raf = 0, running = false;
    const start = performance.now();
    const tick = () => {
      if (!running) return;
      const t = (performance.now() - start) / 1000;
      api.update && api.update(t);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    const startLoop = () => { if (!running) { running = true; raf = requestAnimationFrame(tick); } };
    const stopLoop = () => { running = false; cancelAnimationFrame(raf); };

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? startLoop() : stopLoop()));
    }, { rootMargin: "60px" });
    io.observe(el);

    const onVis = () => (document.hidden ? stopLoop() : startLoop());
    document.addEventListener("visibilitychange", onVis);

    const onResize = () => {
      const nw = el.clientWidth, nh = el.clientHeight;
      if (!nw || !nh) return;
      renderer.setSize(nw, nh, false);
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
    };
    let resizeRaf = 0;
    const scheduleResize = () => {
      if (resizeRaf) return;
      resizeRaf = requestAnimationFrame(() => {
        resizeRaf = 0;
        onResize();
      });
    };
    // Defer out of the observer callback to avoid the benign
    // "ResizeObserver loop completed with undelivered notifications" warning.
    const ro = new ResizeObserver(scheduleResize);
    ro.observe(el);

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      ctx.mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      ctx.mouse.y = -(((e.clientY - r.top) / r.height) * 2 - 1);
    };
    el.addEventListener("pointermove", onMove);

    return () => {
      stopLoop();
      cancelAnimationFrame(resizeRaf);
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      el.removeEventListener("pointermove", onMove);
      api.dispose && api.dispose();
      renderer.dispose();
      while (el.firstChild) el.removeChild(el.firstChild);
    };
  }, [build]);
  return <div ref={ref} className={className} style={style}></div>;
}

// ===== Hero diorama: the four detailed robots on a meadow =====
// Uses ROBOT_BUILDERS / addRobotLights / addMeadow from robots.jsx (loaded first).
function buildHeroDiorama(ctx) {
  const { scene, camera } = ctx;
  camera.position.set(2.6, 1.8, 3.4);
  camera.lookAt(0, 0.7, 0);
  addRobotLights(scene);

  const stage = new THREE.Group();
  scene.add(stage);
  addMeadow(stage, 2.2);

  const built = [];
  const place = (kind, x, z, s, ry) => {
    const b = ROBOT_BUILDERS[kind]();
    b.group.position.set(x, kind === "drone" ? 1.0 : 0, z);
    b.group.scale.setScalar(s);
    b.group.rotation.y = ry;
    stage.add(b.group);
    built.push({ b, kind, baseY: b.group.position.y });
  };
  place("humanoid", -1.3, 0.15, 0.62, 0.5);
  place("quadruped", -0.25, -0.55, 0.66, -0.4);
  place("drone", 0.75, -0.3, 0.6, 0.2);
  place("rover", 1.3, 0.2, 0.62, -0.7);

  return {
    update(t) {
      built.forEach(({ b, kind, baseY }, i) => {
        b.update(t + i * 0.7);
        if (kind === "drone") b.group.position.y = baseY + Math.sin(t * 1.3) * 0.08;
      });
      stage.rotation.y = Math.sin(t * 0.16) * 0.4 + ctx.mouse.x * 0.35;
    },
    dispose() {
      scene.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material && o.material.dispose) o.material.dispose();
      });
    },
  };
}

// ===== Page Components =====
function Reveal({ children, delay = 0 }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add("in"), delay);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return <div ref={ref} className="reveal">{children}</div>;
}

function PubRow({ p }) {
  return (
    <div className="pub">
      <div className="pub-year">{p.year}</div>
      <div>
        <h4>{p.title}</h4>
        <p className="pub-authors">
          {p.authors.map((a, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && ", "}
              <span className={a.toLowerCase().includes("sai krishna") ? "me" : ""}>{a}</span>
            </React.Fragment>
          ))}
        </p>
        <div className="pub-venue">{p.venue}</div>
      </div>
      <div className="pub-actions">
        {p.featured && <span className="pub-chip featured">Featured</span>}
        <span className="pub-chip">{p.kind}</span>
      </div>
    </div>
  );
}

function HomePage({ go }) {
  return (
    <>
      <section className="hero" data-screen-label="Home hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <Reveal>
                <div className="hero-eyebrow">
                  <span className="pulse"></span>
                  <span>Athens · Georgia</span>
                </div>
                <h1 className="hero-name">
                  Sai Krishna<br/>
                  <span className="italic">Ghanta</span>
                </h1>
                <p className="hero-role">
                  PhD Student in AI <span className="at">at</span> the University of Georgia
                </p>
                <p className="hero-bio">
                  I work on <em>multi-robot systems</em>, computer vision, and autonomous navigation — frameworks where many robots map, localize, and reason about complex environments together, even when GPS and clean communication fail.
                </p>
                <p className="hero-bio">
                  Currently with <em>Dr. Ramviyas Parasuraman</em> at the HeRoLab. Previously: Samsung R&amp;D, IIIT Naya Raipur.
                </p>
                <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
                  <a href={PROFILE.scholar} target="_blank" rel="noopener noreferrer" className="btn-link">Scholar</a>
                  <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="btn-link">GitHub</a>
                  <a href={`mailto:${PROFILE.email}`} className="btn-link">Email</a>
                </div>
              </Reveal>
            </div>
            <div className="hero-scene">
              <ThreeScene build={buildHeroDiorama} style={{ width: "100%", height: "100%", minHeight: 440 }} />
            </div>
          </div>
        </div>
      </section>

      <section className="interests" data-screen-label="Interests">
        <div className="container">
          <Reveal>
            <h2 style={{ textAlign: "center", marginBottom: 60 }}>Research Interests</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
              {INTERESTS.map(int => (
                <div key={int.id} className="interest-card">
                  <h3>{int.title}</h3>
                  <p>{int.desc}</p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
                    {int.topics.map(t => <span key={t} className="chip">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ResearchPage() {
  return (
    <section className="research" data-screen-label="Research">
      <div className="container">
        <h1 style={{ marginBottom: 60 }}>Research Thrusts</h1>
        {THRUSTS.map((t, i) => (
          <div key={t.num} className="thrust" style={{ marginBottom: 100 }}>
            <Reveal delay={i * 100}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>
                <div>
                  <div className="thrust-num">{t.num}</div>
                  <h2>{t.title}</h2>
                  <p className="thrust-body">{t.body}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {t.keywords.map(k => <span key={k} className="chip small">{k}</span>)}
                  </div>
                </div>
                <div className="thrust-img">
                  <ThreeScene build={dioramaScene(t.scene)} style={{ width: "100%", height: "100%", minHeight: 340 }} />
                </div>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}

function PublicationsPage() {
  return (
    <>
      <PaperWorld />
      <section className="publications" data-screen-label="Publications">
        <div className="iw-content">
          <div className="container">
            <h1 style={{ marginBottom: 60 }}>Publications</h1>
            <div>
              {PUBLICATIONS.map(p => (
                <PubRow key={p.title} p={p} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function UpdatesPage() {
  return (
    <div className="journey">
      <JourneyWorld />
      <div className="j-sky" id="j-sky"></div>
      <div className="j-progress"><div id="j-progress-fill" className="j-progress-bar"></div></div>
      <div className="j-content">
        <section className="updates" data-screen-label="Updates">
          <div className="container">
            <h1 style={{ marginBottom: 60 }}>Updates</h1>
            <div style={{ maxWidth: 600 }}>
              {UPDATES.map(u => (
                <div key={u.date} className="update-item">
                  <div className="update-date">{u.date}</div>
                  <p>{u.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function CVPage() {
  return (
    <section className="cv" data-screen-label="CV">
      <div className="container">
        <h1>Curriculum Vitae</h1>
        <p style={{ marginTop: 20, marginBottom: 40 }}>
          <a href={PROFILE.cv} target="_blank" rel="noopener noreferrer" className="btn-link">Download PDF</a>
        </p>
        <div style={{ fontFamily: "var(--mono)", fontSize: 13, lineHeight: 1.8, color: "var(--ink-2)" }}>
          <p><strong>Education</strong></p>
          <p>PhD in Artificial Intelligence · University of Georgia (2024–present)</p>
          <p>B.Tech in Computer Science and Engineering · IIIT Naya Raipur (2019–2023)</p>
          <p style={{ marginTop: 30 }}><strong>Experience</strong></p>
          <p>Robotics Research Intern · HeRoLab, UGA (2024–present)</p>
          <p>Software Engineer Intern · Samsung R&amp;D (2023)</p>
          <p>AI/ML Researcher · IIIT Naya Raipur (2021–2023)</p>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="contact" data-screen-label="Contact">
      <div className="container">
        <h1 style={{ marginBottom: 40 }}>Get in Touch</h1>
        <div className="contact-grid">
          <div>
            <p className="hero-bio">
              I'm always interested in collaborations, research discussions, or just talking robots. Feel free to reach out.
            </p>
            <div className="contact-links" style={{ marginTop: 30 }}>
              <p><strong>Email:</strong> <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></p>
              <p><strong>GitHub:</strong> <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">{PROFILE.github}</a></p>
              <p><strong>Scholar:</strong> <a href={PROFILE.scholar} target="_blank" rel="noopener noreferrer">{PROFILE.scholar}</a></p>
            </div>
          </div>
          <div className="contact-globe">
            <ThreeScene build={buildGlobeScene} style={{ width: "100%", height: "100%", minHeight: 460 }} />
            <p className="contact-globe-cap mono">Places I've lived, studied & traveled · drag to spin</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogList({ openPost }) {
  return (
    <>
      <HouseWorld />
      <section className="blog" data-screen-label="Blog">
        <div className="iw-content">
          <div className="container">
            <h1 style={{ marginBottom: 60 }}>Blog</h1>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30 }}>
              {BLOG_POSTS.map(p => (
                <div key={p.id} className="blog-card" onClick={() => openPost(p.id)} style={{ cursor: "pointer" }}>
                  <div style={{ fontSize: 12, color: "var(--ink-3)", marginBottom: 8 }}>
                    {p.category} · {p.date} · {p.readTime}
                  </div>
                  <h3>{p.title}</h3>
                  <p style={{ marginTop: 12, marginBottom: 16 }}>{p.excerpt}</p>
                  <span style={{ color: "var(--accent)", fontWeight: 500 }}>Read →</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function BlogReader({ postId, back, openPost }) {
  const post = BLOG_POSTS.find(p => p.id === postId);
  if (!post) {
    return (
      <div className="container">
        <a onClick={back} style={{ cursor: "pointer", color: "var(--accent)" }}>← Back</a>
        <p>Post not found.</p>
      </div>
    );
  }

  return (
    <section className="blog-reader" data-screen-label={`Blog: ${post.title}`}>
      <div className="container">
        <a onClick={back} style={{ cursor: "pointer", color: "var(--accent)", marginBottom: 40, display: "inline-block" }}>← Back to blog</a>
        <div style={{ fontSize: 12, color: "var(--ink-3)", marginBottom: 12 }}>
          {post.category} · {post.date} · {post.readTime}
        </div>
        <h1 style={{ marginBottom: 40 }}>{post.title}</h1>
        <article style={{ maxWidth: 600, lineHeight: 1.8 }}>
          {post.body.map(([tag, content], i) => {
            if (tag === "p") return <p key={i} style={{ marginBottom: 20 }}>{content}</p>;
            if (tag === "h2") return <h2 key={i} style={{ marginTop: 40, marginBottom: 20 }}>{content}</h2>;
            if (tag === "h3") return <h3 key={i} style={{ marginTop: 30, marginBottom: 15 }}>{content}</h3>;
            if (tag === "blockquote") return <blockquote key={i} style={{ borderLeft: "3px solid var(--accent)", paddingLeft: 20, marginLeft: 0, marginBottom: 20, fontStyle: "italic" }}>{content}</blockquote>;
            return <p key={i}>{content}</p>;
          })}
        </article>
      </div>
    </section>
  );
}

// ===== Nav & Footer =====
function Nav({ page, go, blogPostOpen }) {
  const [open, setOpen] = React.useState(false);
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
        <div className="nav-brand" onClick={() => go("home")}>
          <span className="dot"></span>
          <span>Sai Krishna Ghanta</span>
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
          Built with care · Last updated <span style={{ color: "var(--ink-2)" }}>June 2026</span>
        </div>
      </div>
    </footer>
  );
}

// ===== App =====
function App() {
  const initial = (typeof window !== "undefined" && window.location.hash) || "";
  const parseHash = (h) => {
    h = (h || "").replace(/^#\/?/, "");
    if (!h) return { page: "home", post: null };
    if (h.startsWith("blog/")) return { page: "blog", post: h.slice(5) };
    return { page: h, post: null };
  };
  const [route, setRoute] = React.useState(parseHash(initial));

  React.useEffect(() => {
    const onHash = () => setRoute(parseHash(window.location.hash));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [route.page, route.post]);

  const go = (page) => {
    window.location.hash = page === "home" ? "" : `#/${page}`;
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
