// ===== CONSOLIDATED APP =====
// Rich 3D scenes live in their own files and are loaded BEFORE this one:
//   data.jsx → robots.jsx → world.jsx → scenes-pages.jsx → globe.jsx → app-all.jsx
// This file owns the inline ThreeScene host + page components + routing.

// ===== Error boundary — a thrown render/effect error must never blank the page =====
class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { failed: false }; }
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() { /* swallow — keep the shell usable */ }
  render() {
    if (this.state.failed) {
      return (
        <section className="page">
          <div className="container">
            <div className="page-eyebrow">Something hiccuped</div>
            <h1 className="page-title">A piece didn't load</h1>
            <p className="page-lede">Try refreshing the page. The rest of the site is still here in the menu above.</p>
          </div>
        </section>
      );
    }
    return this.props.children;
  }
}

// ===== Three.js Scene Host (inline, sized canvases) =====
function ThreeScene({ build, className, style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.THREE) return;
    let cleanup = null;
    try {
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
        resizeRaf = requestAnimationFrame(() => { resizeRaf = 0; onResize(); });
      };
      const ro = new ResizeObserver(scheduleResize);
      ro.observe(el);

      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        ctx.mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
        ctx.mouse.y = -(((e.clientY - r.top) / r.height) * 2 - 1);
      };
      el.addEventListener("pointermove", onMove);

      cleanup = () => {
        stopLoop();
        cancelAnimationFrame(resizeRaf);
        io.disconnect();
        ro.disconnect();
        document.removeEventListener("visibilitychange", onVis);
        el.removeEventListener("pointermove", onMove);
        api.dispose && api.dispose();
        renderer.dispose();
        // Actually release the GPU context — Safari caps simultaneous WebGL
        // contexts low, and dispose() alone leaves them allocated across navigation,
        // which makes later scenes (the globe, the hero drone) silently fail to show.
        try { renderer.forceContextLoss(); } catch (e) { /* older three */ }
        while (el.firstChild) el.removeChild(el.firstChild);
      };
    } catch (e) {
      // WebGL unavailable / scene build failed — leave the host empty, page stays alive.
      if (el) while (el.firstChild) el.removeChild(el.firstChild);
    }
    return () => { cleanup && cleanup(); };
  }, [build]);
  return <div ref={ref} className={className} style={style}></div>;
}

// ===== Reveal on scroll =====
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

const Arrow = ({ dir = "right" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {dir === "left"
      ? <path d="M15 18l-6-6 6-6" />
      : <path d="M9 18l6-6-6-6" />}
  </svg>
);

// ===== Hero photo gallery — passive auto-rotating portraits =====
function HeroGallery() {
  const items = window.HOME_GALLERY || [];
  const n = items.length;
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    if (n < 2) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % n), 5000);
    return () => clearInterval(id);
  }, [n]);

  if (!n) return null;
  return (
    <div className="hero-gallery">
      <div className="hg-stage">
        {items.map((g, i) => (
          <img key={g.src} src={g.src} alt={PROFILE.name}
            className={`hg-img ${i === idx ? "active" : ""}`} draggable="false" />
        ))}
      </div>
    </div>
  );
}

// ===== Publication link buttons =====
const PUB_LINK_DEFS = [
  ["paper", "Paper"],
  ["preprint", "Preprint"],
  ["github", "Code"],
  ["video", "Video"],
  ["blog", "Blog"],
  ["scholar", "Scholar"],
];
function PubLinks({ links }) {
  const present = PUB_LINK_DEFS.filter(([k]) => links && links[k]);
  if (!present.length) return null;
  return (
    <div className="pub-links">
      {present.map(([k, label]) => {
        const href = links[k];
        const internal = href.charAt(0) === "#";
        return (
          <a key={k} className={`pub-linkbtn ${k}`} href={href}
            {...(internal ? {} : { target: "_blank", rel: "noopener noreferrer" })}>
            <span className="dot"></span>{label}
          </a>
        );
      })}
    </div>
  );
}

// ===== Publication card =====
function PubRow({ p }) {
  return (
    <article className="pub-card">
      {p.image && (
        <div className="pub-thumb">
          <img src={p.image} alt="" loading="lazy" />
          {p.featured && <span className="pub-feat">Featured</span>}
        </div>
      )}
      <div className="pub-main">
        <div className="pub-meta-row">
          <span className="pub-year">{p.year}</span>
          <span className="pub-kind">{p.kind}</span>
        </div>
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
        {p.overview && <p className="pub-overview">{p.overview}</p>}
        <PubLinks links={p.links} />
      </div>
    </article>
  );
}

// ===== Pages =====
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
                  Sai Krishna <span className="italic">Ghanta</span>
                </h1>
                <p className="hero-pronounce">
                  <span className="hp-say">say <em>“sigh · krish-na · gun-ta”</em></span>
                  <span className="hp-dot">·</span>
                  <span className="hp-call">just call me <strong>Sai</strong></span>
                </p>
                <p className="hero-bio">
                  I am a third-year Ph.D. candidate in Artificial Intelligence at the{" "}
                  <a href="https://www.uga.edu" target="_blank" rel="noopener noreferrer">University of Georgia</a>,
                  working under the supervision of{" "}
                  <a href="https://computing.uga.edu/directory/people/ramviyas-nattanmai-parasuraman" target="_blank" rel="noopener noreferrer">Dr. Ramviyas Parasuraman</a>.
                  My research combines multi-robot systems, spatial intelligence, embodied AI to help robots map, localize, plan, and act in complex real-world environments.
                </p>
                <p className="hero-bio">
                  Previously, I was a research intern at the{" "}
                  <a href="https://engineering.louisville.edu/research/centersinstitutes/larri/" target="_blank" rel="noopener noreferrer">Louisville Automation &amp; Robotics Research Institute</a>,
                  where I worked with{" "}
                  <a href="https://engineering.louisville.edu/faculty/sabur-h-baidya/" target="_blank" rel="noopener noreferrer">Dr. Sabur Baidya</a>,
                  and an AI research intern at Samsung R&amp;D Institute through the PRISM program.
                </p>
                <p className="hero-bio hero-bio-highlight">
                  I was selected as a recipient of the{" "}
                  <a href="https://www.chishiki-ai.org/awardees/" target="_blank" rel="noopener noreferrer">2026 NSF Chishiki AI Fellowship</a>{" "}
                  at the University of Texas at Austin, and will also be working with{" "}
                  <a href="https://oden.utexas.edu/people/directory/Krishna-Kumar/" target="_blank" rel="noopener noreferrer">Dr. Krishna Kumar</a>.
                </p>
                <div className="hero-socials" aria-label="Academic and social links">
                  <a href={PROFILE.scholar} target="_blank" rel="noopener noreferrer" className="btn-link social-link" aria-label="Google Scholar profile">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2.8 8.1 12 13.2l9.2-5.1L12 3Zm-6.6 7.5v4.2c0 2.3 3 4.3 6.6 4.3s6.6-2 6.6-4.3v-4.2L12 14.2l-6.6-3.7Z" fill="currentColor" /></svg>
                    <span>Scholar</span>
                  </a>
                  <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="btn-link social-link" aria-label="GitHub profile">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.4a9.6 9.6 0 0 0-3 18.7c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.4-1.1.6-1.3-2.2-.2-4.5-1.1-4.5-4.8 0-1.1.4-1.9 1-2.6-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.7 1a9.5 9.5 0 0 1 4.8 0c1.8-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.5 1 2.6 0 3.7-2.3 4.6-4.5 4.8.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A9.6 9.6 0 0 0 12 2.4Z" fill="currentColor" /></svg>
                    <span>GitHub</span>
                  </a>
                  <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="btn-link social-link" aria-label="LinkedIn profile">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.1 8.8H2.4v12.1h2.7V8.8ZM3.8 3.1a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Zm17.8 10.9c0-3.4-1.8-5-4.3-5-2 0-2.9 1.1-3.4 1.9h-.1V8.8h-2.6v12.1h2.7v-6c0-1.6.3-3.1 2.2-3.1s1.9 1.8 1.9 3.2v5.9h2.7l-.1-6.9Z" fill="currentColor" /></svg>
                    <span>LinkedIn</span>
                  </a>
                  <a href={PROFILE.cv} target="_blank" rel="noopener noreferrer" className="btn-link social-link" aria-label="Download CV or résumé">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.4 2.8h7.8L19 7.6v13.6H6.4V2.8Zm7 1.7v4h4l-4-4ZM8.7 12.4h6.6v-1.5H8.7v1.5Zm0 3.1h6.6V14H8.7v1.5Zm0 3.1h4.8v-1.5H8.7v1.5Z" fill="currentColor" /></svg>
                    <span>CV / Résumé</span>
                  </a>
                </div>
                <a href={`mailto:${PROFILE.email}`} className="hero-email hero-email-card" aria-label="Email Sai Krishna Ghanta">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 6.5h15v11h-15v-11Zm1.4 1.4 6.1 4.2 6.1-4.2H5.9Zm12.2 8.2V9.6L12 13.8 5.9 9.6v6.5h12.2Z" fill="currentColor" /></svg>
                  <span>I’ll be happy to hear from you about research, collaboration, ideas, or anything else — feel free to reach out to <span className="email-inline">{PROFILE.email}</span>.</span>
                </a>
              </Reveal>
            </div>
            <HeroGallery />
          </div>
        </div>
      </section>

      <section className="section interests" data-screen-label="Interests">
        <div className="container">
          <Reveal>
            <div className="page-eyebrow" style={{ textAlign: "center" }}>Focus areas</div>
            <h2 style={{ textAlign: "center", marginBottom: 48 }}>Research <span className="ital">Interests</span></h2>
            <div className="interest-grid">
              {INTERESTS.map((int) => (
                <button
                  key={int.id}
                  type="button"
                  className="interest-card interest-card-link"
                  onClick={() => go("research", int.id)}
                  aria-label={`Read more about ${int.title}`}
                >
                  <div className="glyph-wrap">
                    <ThreeScene build={dioramaScene(int.scene, 0.8)} />
                  </div>
                  <h3>{int.title}</h3>
                  <p>{int.desc}</p>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <MountainHome />
    </>
  );
}

function ResearchPage() {
  return (
    <section className="research page" data-screen-label="Research">
      <div className="container">
        <div className="page-head">
          <div className="page-eyebrow">What I work on</div>
          <h1 className="page-title">Research <span className="ital">Interests</span></h1>
          <p className="page-lede">Three intertwined directions — embodied reasoning in real spaces, cooperative mapping across many robots, and learning a belief over the invisible fields that fill a room.</p>
        </div>
        {THRUSTS.map((t, i) => (
          <Reveal key={t.id} delay={i * 80}>
            <div id={`research-${t.id}`} className="thrust" style={{ "--t-accent": t.accent, "--t-tint": t.tint }}>
              <div className="thrust-body">
                <span className="thrust-badge"><span className="b-dot"></span>Interest {String(i + 1).padStart(2, "0")}</span>
                <h3>{t.title}</h3>
                <p className="thrust-tagline">{t.tagline}</p>
                <p>{t.body}</p>
                <div className="thrust-stats">
                  {t.stats.map((s) => (
                    <div key={s.k} className="thrust-stat">
                      <span className="k">{s.k}</span>
                      <span className="v">{s.v}</span>
                    </div>
                  ))}
                </div>
                <div className="thrust-keywords">
                  {t.keywords.map((k) => <span key={k} className="thrust-keyword">{k}</span>)}
                </div>
                <div className="thrust-resources">
                  {t.resources.map((r) => (
                    <a key={r.label} className="thrust-resource" href={r.href}
                      {...(r.href.startsWith("#") ? {} : { target: "_blank", rel: "noopener noreferrer" })}>
                      <span>{r.label}</span><span className="arr">→</span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="thrust-media">
                <ThreeScene build={dioramaScene(t.scene)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <MountainResearch />
    </section>
  );
}

function PublicationsPage() {
  return (
    <>
      <PaperWorld />
      <section className="publications" data-screen-label="Publications">
        <div className="iw-content">
          <div className="iw-hero">
            <div className="page-eyebrow">Selected work</div>
            <h1 className="iw-title">Publications</h1>
            <p className="page-lede" style={{ marginTop: 14 }}>Peer-reviewed and in-review work on multi-robot mapping, semantic SLAM, and spatial learning. <span style={{ color: "var(--accent-ink)" }}>* indicates lead / first author.</span></p>
          </div>
          {PUB_GROUPS.map((group) => {
            const items = PUBLICATIONS
              .filter((p) => p.kind === group.kind)
              .sort((a, b) => b.year - a.year);
            if (!items.length) return null;
            return (
              <div key={group.kind} className="iw-card">
                <div className="pub-group-head">
                  <h2>{group.label}</h2>
                  <span className="count">{items.length}</span>
                </div>
                {items.map((p) => <PubRow key={p.title} p={p} />)}
              </div>
            );
          })}
        </div>
      </section>
      <MountainPublications />
    </>
  );
}

function UpdatesPage() {
  const years = [];
  UPDATES.forEach((u) => { if (!years.includes(u.year)) years.push(u.year); });
  return (
    <div className="journey">
      <JourneyWorld />
      <div className="j-sky" id="j-sky"></div>
      <div className="j-progress"><div id="j-progress-fill" className="j-progress-bar"></div></div>
      <div className="j-content">
        <header className="j-hero" data-screen-label="Milestones">
          <div className="j-eyebrow">The road so far</div>
          <h1 className="j-title">Mile<span className="outline">stones</span></h1>
          <p className="j-lede">A scrolling trail through the work — papers shipped, field trials run, and the moves that got me here.</p>
          <div className="j-cue"><span className="j-cue-line"></span>Scroll to travel</div>
        </header>
        {years.map((y, yi) => (
          <section key={y} className="j-section" data-screen-label={String(y)}>
            <div className="j-zone">
              <span className="j-zone-num">{String(yi + 1).padStart(2, "0")}</span>
              <span className="j-zone-word">{y}</span>
            </div>
            <div className="j-card year-card">
              {UPDATES.filter((u) => u.year === y).map((u, i) => (
                <div key={i} className="ms-item">
                  <div className="ms-head">
                    <span className="ms-date">{u.date}</span>
                    <span className="ms-tag">{u.tag}</span>
                  </div>
                  <p className="ms-text">{u.text}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
        <footer className="j-outro">
          <blockquote className="credo">
            <p className="credo-quote">{CREDO.quote}</p>
            <cite className="credo-by">{CREDO.by}</cite>
          </blockquote>
          <button className="btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to the trailhead ↑</button>
        </footer>
        <MountainMilestones />
      </div>
    </div>
  );
}

// The CSS earth disc is a *fallback* for when WebGL can't run. The WebGL canvas
// is transparent, so if we always render the fallback it shows through behind the
// real 3D globe — you'd see two globes. Render it only when no canvas mounted.
function ContactGlobe() {
  const hostRef = React.useRef(null);
  const [showFallback, setShowFallback] = React.useState(false);
  React.useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    // Child (ThreeScene) effects run before this one, so the canvas — if WebGL
    // succeeded — already exists. Re-check shortly after in case THREE loaded late.
    const check = () => setShowFallback(!host.querySelector("canvas"));
    check();
    const t = setTimeout(check, 400);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="contact-globe" ref={hostRef}>
      {showFallback && (
        <span className="contact-globe-fallback" aria-hidden="true">
          <span className="contact-globe-earth"></span>
        </span>
      )}
      <ThreeScene build={buildGlobeScene} style={{ width: "100%", height: "100%", minHeight: "var(--contact-globe-h)" }} />
      <p className="contact-globe-cap mono">every dot is a place I've been · drag to spin</p>
    </div>
  );
}

// ===== Trip gallery — horizontal scroll strip (mixed sizes) + fitted lightbox =====
const isVideo = (s) => /\.(mp4|webm|mov|m4v)$/i.test(s || "");

function TripGallery() {
  const items = window.TRIP_GALLERY || [];
  const [active, setActive] = React.useState(null);
  const [featured, setFeatured] = React.useState(0);
  const stripRef = React.useRef(null);
  const dragged = React.useRef(false);

  // Lightbox: keyboard nav + lock the page so it can't scroll behind the photo.
  React.useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      else if (e.key === "ArrowRight") setActive((i) => (i + 1) % items.length);
      else if (e.key === "ArrowLeft") setActive((i) => (i - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, items.length]);

  // Drag-to-scroll the strip (so a plain mouse can pan it, not just a trackpad).
  React.useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    let down = false, startX = 0, startScroll = 0;
    const onDown = (e) => { down = true; dragged.current = false; startX = e.clientX; startScroll = el.scrollLeft; el.classList.add("dragging"); };
    const onMove = (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 5) dragged.current = true;
      el.scrollLeft = startScroll - dx;
    };
    const onUp = () => { down = false; el.classList.remove("dragging"); };
    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  if (!items.length) return null;
  const cur = active !== null ? items[active] : null;
  const safeFeatured = Math.min(featured, items.length - 1);
  const feat = items[safeFeatured];
  const selectThumb = (i) => { if (!dragged.current) setFeatured(i); };

  return (
    <section className="section trips" data-screen-label="Trips">
      <div className="container">
        <div className="page-eyebrow">Out in the world</div>
        <h2 className="trips-title">Places I've <span className="ital">wandered</span></h2>
        <p className="trips-lede">Conferences, labs, and the people along the way — newest first. Pick a moment below; tap the big one to open it full screen.</p>

        <figure className="trips-featured" role="button" tabIndex={0}
          aria-label={`Open ${feat.title}`}
          onClick={() => setActive(safeFeatured)}
          onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); setActive(safeFeatured); } }}>
          {isVideo(feat.src)
            ? <video key={feat.src} ref={(el) => { if (el) el.muted = true; }} src={feat.src}
                muted loop autoPlay playsInline preload="auto" draggable="false" />
            : <img key={feat.src} src={feat.src} alt={feat.title} draggable="false" />}
          <span className="tf-zoom" aria-hidden="true"><Arrow dir="right" /></span>
          <figcaption className="tf-cap">
            {(feat.place || feat.when) && (
              <span className="tf-sub">
                {feat.place && <span>{feat.place}</span>}
                {feat.place && feat.when && <span className="trip-dot">·</span>}
                {feat.when && <span>{feat.when}</span>}
              </span>
            )}
            {feat.title && <span className="tf-title">{feat.title}</span>}
            {feat.desc && <span className="tf-desc">{feat.desc}</span>}
          </figcaption>
        </figure>

        <div className="trips-rail" ref={stripRef}>
          {items.map((g, i) => (
            <button key={g.src + i} type="button"
              className={`trip-thumb ${i === safeFeatured ? "active" : ""}`}
              aria-label={`${g.place || ""} ${g.title || ""}`.trim()}
              onClick={() => selectThumb(i)}>
              {isVideo(g.src)
                ? <video src={g.src + "#t=0.1"} muted playsInline preload="metadata" />
                : <img src={g.src} alt={g.title} loading="lazy" draggable="false" />}
              {isVideo(g.src) && <span className="tt-vid" aria-hidden="true">▶</span>}
              {g.when && <span className="tt-when">{g.when}</span>}
            </button>
          ))}
        </div>
      </div>

      {cur && (
        <div className="trip-lightbox" onClick={() => setActive(null)} role="dialog" aria-modal="true">
          <button className="tl-close" onClick={() => setActive(null)} aria-label="Close">×</button>
          {items.length > 1 && (
            <button className="tl-nav prev" aria-label="Previous"
              onClick={(e) => { e.stopPropagation(); setActive((i) => (i - 1 + items.length) % items.length); }}>
              <Arrow dir="left" />
            </button>
          )}
          <figure className="tl-figure" onClick={(e) => e.stopPropagation()}>
            {isVideo(cur.src)
              ? <video src={cur.src} controls autoPlay playsInline />
              : <img src={cur.src} alt={cur.title} />}
            <figcaption>
              <div className="tl-head">
                {cur.place && <span className="tl-place">{cur.place}</span>}
                {cur.when && <span className="tl-when">{cur.when}</span>}
              </div>
              {cur.title && <div className="tl-title">{cur.title}</div>}
              {cur.desc && <p className="tl-desc">{cur.desc}</p>}
            </figcaption>
          </figure>
          {items.length > 1 && (
            <button className="tl-nav next" aria-label="Next"
              onClick={(e) => { e.stopPropagation(); setActive((i) => (i + 1) % items.length); }}>
              <Arrow dir="right" />
            </button>
          )}
        </div>
      )}
    </section>
  );
}

function AboutPage() {
  const nature = <NatureBackdrop />;
  return (
    <div className="nature-page about-nature-page">
      {nature}
      <section className="about page" data-screen-label="About">
        <div className="container">
          <div className="page-head">
            <div className="page-eyebrow">About</div>
            <h1 className="page-title">A bit about <span className="ital">me</span></h1>
          </div>
          <div className="about-combined">
            <div className="about-intro">
              <p>
                I'm happiest outdoors — a quiet trail, a good viewpoint, somewhere to slow down and
                just look. I'm also a creature of habit. I'll run the exact same routine, every single
                day, and be perfectly content about it. <span className="about-wink">:)</span>
              </p>
              <p>
                The one thing that breaks the routine is travel. I want to see as much of this planet
                as I possibly can. In robotics we have a word for it, <em>exploration</em> — pushing an
                agent out to fill in the unknown parts of a map. This globe is mine. Every dot is a place
                I've actually stood, and I'm nowhere near done filling it in.
              </p>
            </div>
            <ContactGlobe />
          </div>
        </div>
      </section>
      <TripGallery />
      <MountainLandscape />
    </div>
  );
}

function NatureBackdrop() {
  return (
    <div className="nature-backdrop" aria-hidden="true">
      {Array.from({ length: 14 }).map((_, i) => (
        <span key={i} className={`maple-leaf leaf-${i + 1}`}>
          <svg viewBox="0 0 100 124" focusable="false" aria-hidden="true">
            <path className="leaf-stem" d="M47 87 53 87 51 121 49 121Z" />
            <path className="leaf-blade" d="M50 6 58 28 67 22 61 41 90 33 68 55 85 75 60 77 57 90 43 90 40 77 15 75 32 55 10 33 39 41 33 22 42 28Z" />
            <path className="leaf-veins" d="M50 86V12 M50 70 86 36 M50 78 80 72 M50 70 14 36 M50 78 20 72" />
          </svg>
        </span>
      ))}
    </div>
  );
}

// Realistic 3D mountain footer — procedural displaced terrain (elevation-coloured
// green slopes → rock → snow), atmospheric haze, a sky and a sun rising behind the range.
function buildMountainFooter({ scene, camera, renderer }) {
  renderer.setClearColor(0x000000, 0);
  const disposables = [];
  const track = (o) => { disposables.push(o); return o; };

  // ---- value-noise + ridged fractal for the heightfield ----
  const hash = (x, y) => { const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return s - Math.floor(s); };
  const vnoise = (x, y) => {
    const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
    const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
    const a = hash(xi, yi), b = hash(xi + 1, yi), c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1);
    return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
  };
  const ridged = (x, y, p) => { let val = 0, amp = 0.5, f = 1; for (let i = 0; i < 6; i++) { let n = vnoise(x * f + i * 7.3, y * f - i * 3.1); n = 1 - Math.abs(2 * n - 1); val += amp * Math.pow(n, p); amp *= 0.5; f *= 2.07; } return val; };
  const ampZ = (z) => 1.6 + 20 * Math.exp(-Math.pow((z + 15) / 18, 2)); // tall range mid-scene, low valley + far
  const heightAt = (x, z) => ridged(x * 0.03 + 10, z * 0.05 + 5, 2.4) * ampZ(z)
    + ridged(x * 0.10 + 2, z * 0.12 - 4, 3.0) * 2.4   // crisp mid-frequency ridges → definition
    + vnoise(x * 0.02 - 3, z * 0.02 + 8) * 0.8;

  // ---- sky + atmospheric fog ----
  const skyC = document.createElement("canvas"); skyC.width = 8; skyC.height = 256;
  const sc = skyC.getContext("2d");
  const sg = sc.createLinearGradient(0, 0, 0, 256);
  sg.addColorStop(0, "#9ec9ec"); sg.addColorStop(0.5, "#c2e0ee"); sg.addColorStop(0.8, "#dcefe9"); sg.addColorStop(1, "#e9f4ea");
  sc.fillStyle = sg; sc.fillRect(0, 0, 8, 256);
  scene.background = track(new THREE.CanvasTexture(skyC));
  scene.fog = new THREE.Fog(0xdcece4, 28, 96);

  camera.fov = 40;
  camera.position.set(0, 6.6, 20);
  camera.updateProjectionMatrix();
  camera.lookAt(0, 6.1, -16);

  scene.add(new THREE.HemisphereLight(0xffffff, 0x9fb39a, 0.8));
  const sunLight = new THREE.DirectionalLight(0xfff0d2, 2.2); // strong key light → crisp relief
  sunLight.position.set(-16, 14, 7);
  scene.add(sunLight);
  scene.add(new THREE.AmbientLight(0xdfeef0, 0.22));

  // ---- displaced terrain, elevation-coloured ----
  const geo = track(new THREE.PlaneGeometry(160, 130, 260, 200));
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const col = new Float32Array(pos.count * 3);
  const cMeadow = new THREE.Color(0x8aac63), cForest = new THREE.Color(0x4f8a4c),
    cHigh = new THREE.Color(0x3a6b40), cRock = new THREE.Color(0x8c9081), cSnow = new THREE.Color(0xf4f9f4);
  const outC = new THREE.Color(), baseC = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const h = heightAt(x, z); pos.setY(i, h);
    const dd = 0.7, hx = heightAt(x + dd, z) - heightAt(x - dd, z), hz = heightAt(x, z + dd) - heightAt(x, z - dd);
    const slope = Math.sqrt(hx * hx + hz * hz) / (2 * dd);
    if (h < 5) baseC.copy(cMeadow).lerp(cForest, h / 5);
    else if (h < 10) baseC.copy(cForest).lerp(cHigh, (h - 5) / 5);
    else if (h < 13) baseC.copy(cHigh).lerp(cRock, (h - 10) / 3);
    else baseC.copy(cRock).lerp(cSnow, Math.min(1, (h - 13) / 2.5));
    outC.copy(baseC);
    outC.lerp(cRock, Math.min(0.4, Math.max(0, (slope - 1.15)) * 0.4)); // steep faces → rock
    if (h > 12 && slope < 0.8) outC.lerp(cSnow, 0.6);                    // flat high → snow
    col[i * 3] = outC.r; col[i * 3 + 1] = outC.g; col[i * 3 + 2] = outC.b;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  geo.computeVertexNormals();
  scene.add(new THREE.Mesh(geo, track(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.97, metalness: 0 }))));

  // ---- shining sun: golden disc + warm halo, rising behind the range ----
  const sunPos = new THREE.Vector3(-12, 20.5, -30);
  const makeGlow = (c0, c1, scale, op) => {
    const c = document.createElement("canvas"); c.width = c.height = 128;
    const g = c.getContext("2d");
    const rg = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    rg.addColorStop(0, c0); rg.addColorStop(0.42, c1); rg.addColorStop(1, "rgba(255,238,190,0)");
    g.fillStyle = rg; g.fillRect(0, 0, 128, 128);
    const sp = new THREE.Sprite(track(new THREE.SpriteMaterial({ map: track(new THREE.CanvasTexture(c)), transparent: true, depthWrite: false, fog: false, blending: THREE.AdditiveBlending, opacity: op })));
    sp.scale.set(scale, scale, 1); sp.position.copy(sunPos);
    return sp;
  };
  const glowOuter = makeGlow("rgba(255,240,200,0.8)", "rgba(255,212,135,0.3)", 26, 0.85);
  const glowInner = makeGlow("rgba(255,252,242,1)", "rgba(255,230,170,0.7)", 10, 1);
  scene.add(glowOuter); scene.add(glowInner);
  const disc = new THREE.Mesh(
    track(new THREE.CircleGeometry(2.0, 40)),
    track(new THREE.MeshBasicMaterial({ color: 0xffe9a6, fog: false, transparent: true }))
  );
  disc.position.copy(sunPos); disc.renderOrder = 1;
  scene.add(disc);

  // ---- soft billboard clouds ----
  const cloudTex = (() => {
    const c = document.createElement("canvas"); c.width = 256; c.height = 128;
    const g = c.getContext("2d");
    for (let k = 0; k < 7; k++) {
      const cx = 40 + Math.random() * 176, cy = 54 + Math.random() * 30, r = 26 + Math.random() * 30;
      const rg = g.createRadialGradient(cx, cy, 0, cx, cy, r);
      rg.addColorStop(0, "rgba(255,255,255,0.95)"); rg.addColorStop(1, "rgba(255,255,255,0)");
      g.fillStyle = rg; g.beginPath(); g.arc(cx, cy, r, 0, 7); g.fill();
    }
    return track(new THREE.CanvasTexture(c));
  })();
  const clouds = [];
  for (let i = 0; i < 3; i++) {
    const sp = new THREE.Sprite(track(new THREE.SpriteMaterial({ map: cloudTex, transparent: true, depthWrite: false, opacity: 0.82, fog: false })));
    sp.scale.set(20, 10, 1);
    sp.position.set(-22 + i * 20, 12 + Math.random() * 3, -22 - Math.random() * 6);
    clouds.push(sp); scene.add(sp);
  }

  return {
    update(t) {
      const b = 1 + Math.sin(t * 0.8) * 0.05;
      glowOuter.scale.set(26 * b, 26 * b, 1);
      clouds.forEach((c, i) => { c.position.x += 0.01 + i * 0.004; if (c.position.x > 40) c.position.x = -40; });
    },
    dispose() {
      scene.background = null;
      disposables.forEach((d) => d.dispose && d.dispose());
    },
  };
}

function MountainLandscape() {
  return <ThreeScene className="mountain-3d" build={buildMountainFooter} />;
}

// ===== Shared noise utilities for all mountain scenes =====
const _mHash = (x, y) => { const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return s - Math.floor(s); };
const _mNoise = (x, y) => {
  const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = _mHash(xi, yi), b = _mHash(xi + 1, yi), c = _mHash(xi, yi + 1), d = _mHash(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
};
const _mRidged = (x, y, p, oct) => {
  let val = 0, amp = 0.5, f = 1;
  for (let i = 0; i < (oct || 6); i++) {
    let n = _mNoise(x * f + i * 7.3, y * f - i * 3.1);
    n = 1 - Math.abs(2 * n - 1);
    val += amp * Math.pow(n, p); amp *= 0.5; f *= 2.07;
  }
  return val;
};
const _mSmooth = (x, y, oct) => {
  let val = 0, amp = 0.5, f = 1;
  for (let i = 0; i < (oct || 5); i++) {
    val += amp * _mNoise(x * f + i * 5.1, y * f - i * 2.7);
    amp *= 0.48; f *= 2.03;
  }
  return val;
};

// Helper: build a sky canvas texture from gradient stops
function _makeSky(stops) {
  const c = document.createElement("canvas"); c.width = 8; c.height = 256;
  const ctx = c.getContext("2d");
  const g = ctx.createLinearGradient(0, 0, 0, 256);
  stops.forEach(([pos, col]) => g.addColorStop(pos, col));
  ctx.fillStyle = g; ctx.fillRect(0, 0, 8, 256);
  return c;
}

// Helper: build soft billboard clouds
function _makeClouds(scene, track, count, opts) {
  const { yBase, yRand, zBase, zRand, xSpread, scaleW, scaleH, opacity, color } = {
    yBase: 12, yRand: 3, zBase: -22, zRand: 6, xSpread: 20, scaleW: 20, scaleH: 10, opacity: 0.82, color: [255, 255, 255], ...opts
  };
  const cloudTex = (() => {
    const c = document.createElement("canvas"); c.width = 256; c.height = 128;
    const g = c.getContext("2d");
    for (let k = 0; k < 7; k++) {
      const cx = 40 + Math.random() * 176, cy = 54 + Math.random() * 30, r = 26 + Math.random() * 30;
      const rg = g.createRadialGradient(cx, cy, 0, cx, cy, r);
      const [cr, cg, cb] = color;
      rg.addColorStop(0, `rgba(${cr},${cg},${cb},0.95)`); rg.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
      g.fillStyle = rg; g.beginPath(); g.arc(cx, cy, r, 0, 7); g.fill();
    }
    return track(new THREE.CanvasTexture(c));
  })();
  const clouds = [];
  for (let i = 0; i < count; i++) {
    const sp = new THREE.Sprite(track(new THREE.SpriteMaterial({ map: cloudTex, transparent: true, depthWrite: false, opacity, fog: false })));
    sp.scale.set(scaleW, scaleH, 1);
    sp.position.set(-xSpread + i * (2 * xSpread / count), yBase + Math.random() * yRand, zBase - Math.random() * zRand);
    clouds.push(sp); scene.add(sp);
  }
  return clouds;
}

// ===== 1. Waterfall Valley — Home page =====
function buildWaterfallValley({ scene, camera, renderer }) {
  renderer.setClearColor(0x000000, 0);
  const disposables = [];
  const track = (o) => { disposables.push(o); return o; };

  // Terrain: lush valley with natural gullies where waterfalls form
  const ampZ = (z) => 2.4 + 18 * Math.exp(-Math.pow((z + 12) / 16, 2));
  // Noise-based drainage channels — natural gully paths
  const gully = (x, z) => {
    const g1 = Math.exp(-Math.pow((_mNoise(x * 0.06 + 1.5, z * 0.02 + 3.0) - 0.5) * 6, 2));
    const g2 = Math.exp(-Math.pow((_mNoise(x * 0.04 - 2.3, z * 0.03 + 7.1) - 0.48) * 5.5, 2));
    const g3 = Math.exp(-Math.pow((_mNoise(x * 0.05 + 4.2, z * 0.025 - 1.8) - 0.52) * 6.5, 2));
    return Math.max(g1, g2, g3);
  };
  const heightAt = (x, z) => {
    const valleyW = 14;
    const valleyFactor = Math.min(1, Math.pow(Math.abs(x) / valleyW, 1.8));
    const base = _mRidged(x * 0.025 + 3, z * 0.04 + 7, 2.6) * ampZ(z) * (0.35 + 0.65 * valleyFactor);
    const detail = _mRidged(x * 0.07 + 1, z * 0.09 - 2, 2.5) * 2.2;
    const micro = _mSmooth(x * 0.18 + 5, z * 0.16 - 7, 3) * 0.6;
    const broad = _mSmooth(x * 0.015 - 1, z * 0.02 + 4) * 1.2;
    // Carve gullies slightly into the terrain
    const g = gully(x, z);
    const carve = g > 0.3 ? (g - 0.3) * 1.8 : 0;
    return base + detail + micro + broad - carve;
  };

  // Misty morning sky
  const skyTex = track(new THREE.CanvasTexture(_makeSky([
    [0, "#a8d5e2"], [0.35, "#c5e4d9"], [0.6, "#d8efe0"], [0.85, "#e4f5e8"], [1, "#edf8ed"]
  ])));
  scene.background = skyTex;
  scene.fog = new THREE.Fog(0xd8efe0, 22, 85);

  camera.fov = 42;
  camera.position.set(0, 8.2, 22);
  camera.updateProjectionMatrix();
  camera.lookAt(0, 5.0, -18);

  scene.add(new THREE.HemisphereLight(0xffffff, 0x8fb89a, 0.9));
  const sun = new THREE.DirectionalLight(0xfff5d6, 1.8);
  sun.position.set(-10, 16, 5);
  scene.add(sun);
  scene.add(new THREE.AmbientLight(0xe2f0e8, 0.25));

  // Terrain mesh with animated waterfall channels
  const geo = track(new THREE.PlaneGeometry(160, 130, 280, 220));
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const col = new Float32Array(pos.count * 3);
  const cMeadow = new THREE.Color(0x72b858), cLushGrass = new THREE.Color(0x5a9e48),
    cForest = new THREE.Color(0x3d7a3e), cDeepGreen = new THREE.Color(0x2a5c30),
    cEarth = new THREE.Color(0x6a7a5a), cCliff = new THREE.Color(0x7a8872),
    cHighMoss = new THREE.Color(0x9aaa82), cHaze = new THREE.Color(0xc0d8c4);
  // Waterfall colors — white foam with subtle green-teal tint
  const cFoam = new THREE.Color(0xe8f4ee), cSpray = new THREE.Color(0xd5ebe0),
    cWetRock = new THREE.Color(0x4a6a4e);
  const outC = new THREE.Color(), baseC = new THREE.Color();

  // Track waterfall vertices for animation
  const wfVerts = []; // { idx, strength, h, z, baseR, baseG, baseB }

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const h = heightAt(x, z); pos.setY(i, h);
    const dd = 0.6, hx = heightAt(x + dd, z) - heightAt(x - dd, z), hz = heightAt(x, z + dd) - heightAt(x, z - dd);
    const slope = Math.sqrt(hx * hx + hz * hz) / (2 * dd);
    const veg = _mNoise(x * 0.12 + 3.3, z * 0.1 - 1.7);
    const g = gully(x, z);

    // Base vegetation coloring
    if (h < 3) baseC.copy(cMeadow).lerp(cLushGrass, h / 3 + veg * 0.15);
    else if (h < 6) baseC.copy(cLushGrass).lerp(cForest, (h - 3) / 3 + veg * 0.1);
    else if (h < 9) baseC.copy(cForest).lerp(cDeepGreen, (h - 6) / 3);
    else if (h < 12) baseC.copy(cDeepGreen).lerp(cCliff, (h - 9) / 3);
    else baseC.copy(cCliff).lerp(cHaze, Math.min(1, (h - 12) / 4));

    outC.copy(baseC);
    outC.lerp(cEarth, Math.min(0.4, Math.max(0, (slope - 0.8)) * 0.35));
    outC.lerp(cCliff, Math.min(0.35, Math.max(0, (slope - 1.4)) * 0.4));
    if (slope < 0.5 && h < 8) outC.lerp(cMeadow, veg * 0.2);
    if (h > 10 && slope < 0.6) outC.lerp(cHighMoss, 0.3);

    // Waterfall: where gully channel meets steep slope at mid-to-high elevation
    const isWaterfall = g > 0.35 && slope > 0.7 && h > 3.5 && h < 15;
    const isSplash = g > 0.3 && h < 4 && h > 1; // pool/splash zone at bottom
    if (isWaterfall) {
      const wStr = Math.min(1, (g - 0.35) / 0.3) * Math.min(1, (slope - 0.7) / 0.8);
      // Blend: steep + strong channel = more foam; less steep = wet rock
      outC.lerp(cWetRock, wStr * 0.3);
      outC.lerp(cFoam, wStr * 0.5);
      wfVerts.push({ idx: i, strength: wStr, h, z, baseR: outC.r, baseG: outC.g, baseB: outC.b });
    } else if (isSplash) {
      const sStr = Math.min(1, (g - 0.3) / 0.35) * 0.35;
      outC.lerp(cSpray, sStr);
    }

    col[i * 3] = outC.r; col[i * 3 + 1] = outC.g; col[i * 3 + 2] = outC.b;
  }
  const colAttr = new THREE.BufferAttribute(col, 3);
  geo.setAttribute("color", colAttr);
  geo.computeVertexNormals();
  scene.add(new THREE.Mesh(geo, track(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0 }))));

  // Pre-compute static foam/spray colors for animation blending
  const foamR = cFoam.r, foamG = cFoam.g, foamB = cFoam.b;

  // Soft mist sprites at valley floor / waterfall bases
  const mistTex = (() => {
    const c = document.createElement("canvas"); c.width = 128; c.height = 64;
    const g = c.getContext("2d");
    const rg = g.createRadialGradient(64, 32, 0, 64, 32, 60);
    rg.addColorStop(0, "rgba(220,242,230,0.65)"); rg.addColorStop(0.6, "rgba(210,235,220,0.3)"); rg.addColorStop(1, "rgba(210,235,220,0)");
    g.fillStyle = rg; g.fillRect(0, 0, 128, 64);
    return track(new THREE.CanvasTexture(c));
  })();
  const mists = [];
  for (let i = 0; i < 6; i++) {
    const sp = new THREE.Sprite(track(new THREE.SpriteMaterial({ map: mistTex, transparent: true, depthWrite: false, opacity: 0.45, fog: false })));
    sp.scale.set(12, 4, 1);
    sp.position.set(-18 + i * 7, 2.5 + Math.random() * 2, -6 - Math.random() * 12);
    mists.push(sp); scene.add(sp);
  }

  const clouds = _makeClouds(scene, track, 3, { yBase: 13, opacity: 0.7 });

  return {
    update(t) {
      clouds.forEach((c, i) => { c.position.x += 0.008 + i * 0.003; if (c.position.x > 40) c.position.x = -40; });
      mists.forEach((m, i) => { m.material.opacity = 0.35 + 0.15 * Math.sin(t * 0.5 + i * 1.1); });

      // Animate waterfall vertices — flowing shimmer effect
      const arr = colAttr.array;
      for (let w = 0; w < wfVerts.length; w++) {
        const v = wfVerts[w];
        // Flow pattern: noise that scrolls downward over time (using z + time offset)
        const flow = _mNoise(v.h * 0.8 + t * 1.2 + v.z * 0.05, v.z * 0.15 - t * 0.8);
        // Shimmer: high-frequency sparkle
        const sparkle = _mNoise(v.h * 2.5 + t * 3.0, v.z * 0.3 + t * 1.5);
        // Combine: base color ↔ foam, modulated by flow + sparkle
        const blend = v.strength * (0.3 + flow * 0.5 + sparkle * 0.2);
        const i3 = v.idx * 3;
        arr[i3]     = v.baseR + (foamR - v.baseR) * blend;
        arr[i3 + 1] = v.baseG + (foamG - v.baseG) * blend;
        arr[i3 + 2] = v.baseB + (foamB - v.baseB) * blend;
      }
      if (wfVerts.length) colAttr.needsUpdate = true;
    },
    dispose() { scene.background = null; disposables.forEach((d) => d.dispose && d.dispose()); },
  };
}

function MountainHome() {
  return <ThreeScene className="mountain-3d mountain-home" build={buildWaterfallValley} />;
}

// ===== 2. Snowy Peaks — Research page =====
function buildSnowyPeaks({ scene, camera, renderer }) {
  renderer.setClearColor(0x000000, 0);
  const disposables = [];
  const track = (o) => { disposables.push(o); return o; };

  // Tall, sharp alpine ridges with heavy snow
  const ampZ = (z) => 2.0 + 24 * Math.exp(-Math.pow((z + 14) / 20, 2));
  const heightAt = (x, z) => {
    const r = _mRidged(x * 0.028 + 5, z * 0.045 + 2, 3.0) * ampZ(z);
    const sharp = _mRidged(x * 0.12 + 4, z * 0.14 - 1, 3.5) * 2.8;
    const broad = _mSmooth(x * 0.018 - 5, z * 0.015 + 3) * 1.0;
    return r + sharp + broad;
  };

  // Crisp winter sky
  const skyTex = track(new THREE.CanvasTexture(_makeSky([
    [0, "#b0d4e8"], [0.3, "#c8dfe8"], [0.6, "#dce9e6"], [0.85, "#e6f0ea"], [1, "#eef5ef"]
  ])));
  scene.background = skyTex;
  scene.fog = new THREE.Fog(0xe2ecea, 30, 100);

  camera.fov = 38;
  camera.position.set(0, 7.5, 21);
  camera.updateProjectionMatrix();
  camera.lookAt(0, 7.0, -18);

  scene.add(new THREE.HemisphereLight(0xffffff, 0x9abaaa, 0.7));
  const keyLight = new THREE.DirectionalLight(0xfff8e0, 2.4);
  keyLight.position.set(-14, 18, 8);
  scene.add(keyLight);
  scene.add(new THREE.AmbientLight(0xd8eae4, 0.2));

  // Terrain: evergreen base → alpine meadow → rock → heavy snow
  const geo = track(new THREE.PlaneGeometry(160, 130, 260, 200));
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const col = new Float32Array(pos.count * 3);
  const cPine = new THREE.Color(0x3a6b42), cAlpine = new THREE.Color(0x5a8a55),
    cTreeline = new THREE.Color(0x4a7a4a), cRock = new THREE.Color(0x8a9580),
    cSnow = new THREE.Color(0xf0f7f2), cIce = new THREE.Color(0xe5f0f2);
  const outC = new THREE.Color(), baseC = new THREE.Color();

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const h = heightAt(x, z); pos.setY(i, h);
    const dd = 0.7, hx = heightAt(x + dd, z) - heightAt(x - dd, z), hz = heightAt(x, z + dd) - heightAt(x, z - dd);
    const slope = Math.sqrt(hx * hx + hz * hz) / (2 * dd);

    if (h < 3) baseC.copy(cPine).lerp(cAlpine, h / 3);
    else if (h < 6) baseC.copy(cAlpine).lerp(cTreeline, (h - 3) / 3);
    else if (h < 10) baseC.copy(cTreeline).lerp(cRock, (h - 6) / 4);
    else if (h < 13) baseC.copy(cRock).lerp(cSnow, (h - 10) / 3);
    else baseC.copy(cSnow).lerp(cIce, Math.min(1, (h - 13) / 3));

    outC.copy(baseC);
    outC.lerp(cRock, Math.min(0.5, Math.max(0, (slope - 1.1)) * 0.5));
    // Heavy snow on flat high areas
    if (h > 9 && slope < 0.7) outC.lerp(cSnow, 0.75);
    else if (h > 7 && slope < 0.5) outC.lerp(cSnow, 0.35);

    col[i * 3] = outC.r; col[i * 3 + 1] = outC.g; col[i * 3 + 2] = outC.b;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  geo.computeVertexNormals();
  scene.add(new THREE.Mesh(geo, track(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.94, metalness: 0 }))));

  // Sun behind peaks
  const sunPos = new THREE.Vector3(-10, 22, -32);
  const makeGlow = (c0, c1, scale, op) => {
    const c = document.createElement("canvas"); c.width = c.height = 128;
    const g = c.getContext("2d");
    const rg = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    rg.addColorStop(0, c0); rg.addColorStop(0.42, c1); rg.addColorStop(1, "rgba(255,238,190,0)");
    g.fillStyle = rg; g.fillRect(0, 0, 128, 128);
    const sp = new THREE.Sprite(track(new THREE.SpriteMaterial({ map: track(new THREE.CanvasTexture(c)), transparent: true, depthWrite: false, fog: false, blending: THREE.AdditiveBlending, opacity: op })));
    sp.scale.set(scale, scale, 1); sp.position.copy(sunPos);
    return sp;
  };
  const gOuter = makeGlow("rgba(255,245,215,0.7)", "rgba(255,220,150,0.25)", 22, 0.75);
  const gInner = makeGlow("rgba(255,252,242,1)", "rgba(255,235,180,0.6)", 8, 0.9);
  scene.add(gOuter); scene.add(gInner);

  const clouds = _makeClouds(scene, track, 4, { yBase: 14, yRand: 4, opacity: 0.72, xSpread: 28 });

  return {
    update(t) {
      const b = 1 + Math.sin(t * 0.7) * 0.04;
      gOuter.scale.set(22 * b, 22 * b, 1);
      clouds.forEach((c, i) => { c.position.x += 0.007 + i * 0.003; if (c.position.x > 45) c.position.x = -45; });
    },
    dispose() { scene.background = null; disposables.forEach((d) => d.dispose && d.dispose()); },
  };
}

function MountainResearch() {
  return <ThreeScene className="mountain-3d mountain-research" build={buildSnowyPeaks} />;
}

// ===== 3. Mossy Cliffs — Publications page =====
function buildMossyCliffs({ scene, camera, renderer }) {
  renderer.setClearColor(0x000000, 0);
  const disposables = [];
  const track = (o) => { disposables.push(o); return o; };

  // Steep mossy cliff formations
  const ampZ = (z) => 1.8 + 16 * Math.exp(-Math.pow((z + 10) / 14, 2));
  const heightAt = (x, z) => {
    const cliff = _mRidged(x * 0.035 + 8, z * 0.055 + 1, 2.2) * ampZ(z);
    const crag = _mRidged(x * 0.14 - 3, z * 0.12 + 6, 3.2) * 3.0;
    const base = _mSmooth(x * 0.02 + 2, z * 0.025 - 3) * 0.9;
    return cliff + crag + base;
  };

  // Overcast sky — moody greens
  const skyTex = track(new THREE.CanvasTexture(_makeSky([
    [0, "#97b5a6"], [0.3, "#aec5b4"], [0.55, "#c2d5c4"], [0.8, "#d5e2d4"], [1, "#e0ebe0"]
  ])));
  scene.background = skyTex;
  scene.fog = new THREE.Fog(0xc8dbc8, 24, 80);

  camera.fov = 44;
  camera.position.set(0, 7.0, 19);
  camera.updateProjectionMatrix();
  camera.lookAt(0, 5.8, -15);

  // Soft diffuse lighting — overcast feel
  scene.add(new THREE.HemisphereLight(0xe0e8e0, 0x7a9a78, 1.0));
  const fill = new THREE.DirectionalLight(0xe8eed6, 1.2);
  fill.position.set(-8, 12, 6);
  scene.add(fill);
  scene.add(new THREE.AmbientLight(0xd0e0d0, 0.35));

  const geo = track(new THREE.PlaneGeometry(160, 130, 260, 200));
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const col = new Float32Array(pos.count * 3);
  const cMoss = new THREE.Color(0x5a8a4a), cDeepMoss = new THREE.Color(0x3a6a35),
    cWetRock = new THREE.Color(0x6a7a68), cDarkCliff = new THREE.Color(0x5a6a58),
    cLichen = new THREE.Color(0x88a878), cDampEarth = new THREE.Color(0x5a6e50),
    cPaleMoss = new THREE.Color(0x7a9a6a);
  const outC = new THREE.Color(), baseC = new THREE.Color();

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const h = heightAt(x, z); pos.setY(i, h);
    const dd = 0.6, hx = heightAt(x + dd, z) - heightAt(x - dd, z), hz = heightAt(x, z + dd) - heightAt(x, z - dd);
    const slope = Math.sqrt(hx * hx + hz * hz) / (2 * dd);
    // Noise-driven moss/lichen patchiness
    const patch = _mNoise(x * 0.14 + 2.1, z * 0.12 - 4.5);

    if (h < 4) baseC.copy(cMoss).lerp(cDeepMoss, h / 4 + patch * 0.12);
    else if (h < 8) baseC.copy(cDeepMoss).lerp(cLichen, (h - 4) / 4);
    else if (h < 12) baseC.copy(cLichen).lerp(cWetRock, (h - 8) / 4);
    else baseC.copy(cWetRock).lerp(cDarkCliff, Math.min(1, (h - 12) / 3));

    outC.copy(baseC);
    // Steep faces → dark wet rock with damp earth
    outC.lerp(cDampEarth, Math.min(0.35, Math.max(0, (slope - 0.8)) * 0.35));
    outC.lerp(cDarkCliff, Math.min(0.5, Math.max(0, (slope - 1.3)) * 0.45));
    // Flat areas → thick natural moss patches
    if (slope < 0.4 && h < 10) outC.lerp(cMoss, 0.35 + patch * 0.15);
    // Mid-height lichen variation
    if (h > 5 && h < 10 && slope < 0.8) outC.lerp(cPaleMoss, patch * 0.2);

    col[i * 3] = outC.r; col[i * 3 + 1] = outC.g; col[i * 3 + 2] = outC.b;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  geo.computeVertexNormals();
  scene.add(new THREE.Mesh(geo, track(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.98, metalness: 0 }))));

  // Low-hanging mist clouds
  const clouds = _makeClouds(scene, track, 4, {
    yBase: 8, yRand: 3, zBase: -15, zRand: 8, xSpread: 24, scaleW: 18, scaleH: 7, opacity: 0.6,
    color: [200, 220, 200]
  });

  return {
    update(t) {
      clouds.forEach((c, i) => { c.position.x += 0.006 + i * 0.002; if (c.position.x > 40) c.position.x = -40; });
    },
    dispose() { scene.background = null; disposables.forEach((d) => d.dispose && d.dispose()); },
  };
}

function MountainPublications() {
  return <ThreeScene className="mountain-3d mountain-publications" build={buildMossyCliffs} />;
}

// ===== 4. Rolling Hills — Milestones page =====
function buildRollingHills({ scene, camera, renderer }) {
  renderer.setClearColor(0x000000, 0);
  const disposables = [];
  const track = (o) => { disposables.push(o); return o; };

  // Gentle rolling terrain — soft, pastoral
  const ampZ = (z) => 1.0 + 8 * Math.exp(-Math.pow((z + 12) / 22, 2));
  const heightAt = (x, z) => {
    const roll = _mSmooth(x * 0.022 + 6, z * 0.03 + 4, 5) * ampZ(z) * 1.4;
    const gentle = _mSmooth(x * 0.06 + 1, z * 0.08 - 2, 4) * 2.5;
    const far = _mRidged(x * 0.015 - 4, z * 0.025 + 8, 2.0) * ampZ(z) * 0.5;
    // Distant taller ridges
    const distFactor = Math.max(0, (-z - 20) / 30);
    return roll + gentle + far + distFactor * 6;
  };

  // Golden hour sky
  const skyTex = track(new THREE.CanvasTexture(_makeSky([
    [0, "#a8cee0"], [0.25, "#bcd9d8"], [0.5, "#d0e5d8"], [0.75, "#e2eeda"], [1, "#eaf4e2"]
  ])));
  scene.background = skyTex;
  scene.fog = new THREE.Fog(0xdde8da, 28, 95);

  camera.fov = 40;
  camera.position.set(0, 5.5, 22);
  camera.updateProjectionMatrix();
  camera.lookAt(0, 4.2, -20);

  scene.add(new THREE.HemisphereLight(0xfff8e8, 0x8aac7a, 0.9));
  const goldenSun = new THREE.DirectionalLight(0xffe8b0, 2.0);
  goldenSun.position.set(-18, 10, 4);
  scene.add(goldenSun);
  scene.add(new THREE.AmbientLight(0xe4eee2, 0.22));

  const geo = track(new THREE.PlaneGeometry(160, 130, 260, 200));
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const col = new Float32Array(pos.count * 3);
  const cGrass = new THREE.Color(0x7ab862), cMeadow = new THREE.Color(0x68a856),
    cDarkGreen = new THREE.Color(0x4a8a3e), cDistant = new THREE.Color(0x6a9a8a),
    cHaze = new THREE.Color(0xb5ccba);
  const outC = new THREE.Color(), baseC = new THREE.Color();

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const h = heightAt(x, z); pos.setY(i, h);
    const dd = 0.7, hx = heightAt(x + dd, z) - heightAt(x - dd, z), hz = heightAt(x, z + dd) - heightAt(x, z - dd);
    const slope = Math.sqrt(hx * hx + hz * hz) / (2 * dd);

    if (h < 3) baseC.copy(cGrass).lerp(cMeadow, h / 3);
    else if (h < 6) baseC.copy(cMeadow).lerp(cDarkGreen, (h - 3) / 3);
    else if (h < 10) baseC.copy(cDarkGreen).lerp(cDistant, (h - 6) / 4);
    else baseC.copy(cDistant).lerp(cHaze, Math.min(1, (h - 10) / 5));

    outC.copy(baseC);
    // Distance atmospheric fade
    const distFade = Math.max(0, Math.min(1, (-z - 15) / 40));
    outC.lerp(cHaze, distFade * 0.5);

    col[i * 3] = outC.r; col[i * 3 + 1] = outC.g; col[i * 3 + 2] = outC.b;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  geo.computeVertexNormals();
  scene.add(new THREE.Mesh(geo, track(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.96, metalness: 0 }))));

  // Warm sun glow on horizon
  const sunPos = new THREE.Vector3(-20, 8, -35);
  const glowC = document.createElement("canvas"); glowC.width = glowC.height = 128;
  const gc = glowC.getContext("2d");
  const rg = gc.createRadialGradient(64, 64, 0, 64, 64, 64);
  rg.addColorStop(0, "rgba(255,230,170,0.9)"); rg.addColorStop(0.5, "rgba(255,200,120,0.3)"); rg.addColorStop(1, "rgba(255,180,80,0)");
  gc.fillStyle = rg; gc.fillRect(0, 0, 128, 128);
  const glow = new THREE.Sprite(track(new THREE.SpriteMaterial({ map: track(new THREE.CanvasTexture(glowC)), transparent: true, depthWrite: false, fog: false, blending: THREE.AdditiveBlending, opacity: 0.7 })));
  glow.scale.set(20, 20, 1); glow.position.copy(sunPos);
  scene.add(glow);

  const clouds = _makeClouds(scene, track, 3, { yBase: 10, yRand: 2, opacity: 0.65, xSpread: 22 });

  return {
    update(t) {
      const b = 1 + Math.sin(t * 0.6) * 0.04;
      glow.scale.set(20 * b, 20 * b, 1);
      clouds.forEach((c, i) => { c.position.x += 0.009 + i * 0.003; if (c.position.x > 38) c.position.x = -38; });
    },
    dispose() { scene.background = null; disposables.forEach((d) => d.dispose && d.dispose()); },
  };
}

function MountainMilestones() {
  return <ThreeScene className="mountain-3d mountain-milestones" build={buildRollingHills} />;
}

// ===== 5. Misty Forest Ridge — Blog Reader =====
function buildMistyForestRidge({ scene, camera, renderer }) {
  renderer.setClearColor(0x000000, 0);
  const disposables = [];
  const track = (o) => { disposables.push(o); return o; };

  // Dark forested ridge, subdued
  const ampZ = (z) => 1.5 + 12 * Math.exp(-Math.pow((z + 13) / 16, 2));
  const heightAt = (x, z) => {
    const ridge = _mRidged(x * 0.03 + 12, z * 0.04 + 9, 2.4) * ampZ(z);
    const trees = _mSmooth(x * 0.1 + 3, z * 0.08 - 5, 5) * 1.8;
    const wave = _mSmooth(x * 0.015 - 2, z * 0.02 + 6) * 1.0;
    return ridge + trees + wave;
  };

  // Subdued misty sky
  const skyTex = track(new THREE.CanvasTexture(_makeSky([
    [0, "#9ab0a4"], [0.3, "#b0c4b4"], [0.55, "#c4d4c4"], [0.8, "#d6e0d4"], [1, "#e2eae0"]
  ])));
  scene.background = skyTex;
  scene.fog = new THREE.Fog(0xc4d4c4, 20, 72);

  camera.fov = 42;
  camera.position.set(0, 6.8, 20);
  camera.updateProjectionMatrix();
  camera.lookAt(0, 5.5, -16);

  scene.add(new THREE.HemisphereLight(0xe0e8e0, 0x6a8a68, 0.85));
  const soft = new THREE.DirectionalLight(0xe8e8d8, 1.0);
  soft.position.set(-6, 10, 5);
  scene.add(soft);
  scene.add(new THREE.AmbientLight(0xd0dcd0, 0.3));

  const geo = track(new THREE.PlaneGeometry(160, 130, 260, 200));
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const col = new Float32Array(pos.count * 3);
  const cDarkForest = new THREE.Color(0x2e5a32), cForest = new THREE.Color(0x3a6a3a),
    cCanopy = new THREE.Color(0x4a7a48), cMossRock = new THREE.Color(0x6a7a65),
    cMistGreen = new THREE.Color(0xb0c8b4);
  const outC = new THREE.Color(), baseC = new THREE.Color();

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const h = heightAt(x, z); pos.setY(i, h);
    const dd = 0.7, hx = heightAt(x + dd, z) - heightAt(x - dd, z), hz = heightAt(x, z + dd) - heightAt(x, z - dd);
    const slope = Math.sqrt(hx * hx + hz * hz) / (2 * dd);

    if (h < 3) baseC.copy(cDarkForest).lerp(cForest, h / 3);
    else if (h < 7) baseC.copy(cForest).lerp(cCanopy, (h - 3) / 4);
    else if (h < 11) baseC.copy(cCanopy).lerp(cMossRock, (h - 7) / 4);
    else baseC.copy(cMossRock).lerp(cMistGreen, Math.min(1, (h - 11) / 4));

    outC.copy(baseC);
    outC.lerp(cMossRock, Math.min(0.35, Math.max(0, (slope - 1.0)) * 0.4));
    // Fog blend for distance
    const fogFade = Math.max(0, Math.min(1, (-z - 10) / 35));
    outC.lerp(cMistGreen, fogFade * 0.45);

    col[i * 3] = outC.r; col[i * 3 + 1] = outC.g; col[i * 3 + 2] = outC.b;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  geo.computeVertexNormals();
  scene.add(new THREE.Mesh(geo, track(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.97, metalness: 0 }))));

  // Dense mist layers
  const clouds = _makeClouds(scene, track, 5, {
    yBase: 6, yRand: 3, zBase: -12, zRand: 10, xSpread: 26, scaleW: 16, scaleH: 6, opacity: 0.55,
    color: [190, 210, 195]
  });

  return {
    update(t) {
      clouds.forEach((c, i) => { c.position.x += 0.005 + i * 0.002; if (c.position.x > 42) c.position.x = -42; });
    },
    dispose() { scene.background = null; disposables.forEach((d) => d.dispose && d.dispose()); },
  };
}

function MountainBlogReader() {
  return <ThreeScene className="mountain-3d mountain-blog-reader" build={buildMistyForestRidge} />;
}

function BlogList({ openPost }) {
  return (
    <section className="blog-page nature-page blog-nature-page" data-screen-label="Blog">
      <NatureBackdrop />
      <div className="container nature-content">
        <div className="page-head">
          <div className="page-eyebrow">Writing</div>
          <h1 className="page-title">Blog</h1>
          <p className="page-lede">Notes on robots, perception, and the messy gap between a language plan and the physical world it has to survive.</p>
        </div>
        <div className="blog-grid">
          {BLOG_POSTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}>
              <div className="blog-card" onClick={() => openPost(p.id)}>
                <span className="blog-aurora" aria-hidden="true"></span>
                <div className="meta">
                  <span>{p.category}</span><span className="dot"></span>
                  <span>{p.date}</span><span className="dot"></span>
                  <span>{p.readTime}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <span className="arrow">Read <Arrow dir="right" /></span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <MountainLandscape />
    </section>
  );
}

function BlogReader({ postId, back }) {
  const post = BLOG_POSTS.find((p) => p.id === postId);
  if (!post) {
    return (
      <div className="blog-reader">
        <a onClick={back} className="blog-back" style={{ cursor: "pointer" }}><Arrow dir="left" /> Back</a>
        <p>Post not found.</p>
      </div>
    );
  }
  return (
    <>
    <article className="blog-reader" data-screen-label={`Blog: ${post.title}`}>
      <a onClick={back} className="blog-back" style={{ cursor: "pointer" }}><Arrow dir="left" /> Back to blog</a>
      <div className="reader-meta">{post.category} · {post.date} · {post.readTime}</div>
      <h1>{post.title}</h1>
      <div>
        {post.body.map(([tag, content], i) => {
          if (tag === "h2") return <h2 key={i}>{content}</h2>;
          if (tag === "h3") return <h3 key={i}>{content}</h3>;
          if (tag === "blockquote") return <blockquote key={i}>{content}</blockquote>;
          return <p key={i}>{content}</p>;
        })}
      </div>
    </article>
    <MountainBlogReader />
    </>
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
    { id: "updates", label: "Milestones" },
    { id: "about", label: "About" },
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
          {items.map((it) => (
            <span
              key={it.id}
              className={`nav-link ${activeId === it.id ? "active" : ""}`}
              onClick={() => { go(it.id); setOpen(false); }}
            >{it.label}</span>
          ))}
        </div>
        <button className="menu-btn" onClick={() => setOpen((o) => !o)} aria-label="menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 22, height: 22 }}>
            <path d={open ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} />
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
    // Safe scroll-to-top — older Safari throws on { behavior: "instant" }.
    if (route.anchor) {
      window.requestAnimationFrame(() => {
        const target = document.getElementById(`research-${route.anchor}`);
        if (target) target.scrollIntoView({ block: "start", behavior: "smooth" });
      });
      return;
    }
    try { window.scrollTo(0, 0); } catch (e) { /* no-op */ }
  }, [route.page, route.post, route.anchor]);

  const go = (page, anchor) => { window.location.hash = page === "home" ? "" : `#/${page}${anchor ? `/${anchor}` : ""}`; };
  const openPost = (id) => { window.location.hash = `#/blog/${id}`; };
  const backToBlog = () => { window.location.hash = "#/blog"; };

  let content;
  if (route.page === "research") content = <ResearchPage />;
  else if (route.page === "publications") content = <PublicationsPage />;
  else if (route.page === "updates") content = <UpdatesPage />;
  else if (route.page === "about" || route.page === "contact") content = <AboutPage />;
  else if (route.page === "blog") {
    content = route.post
      ? <BlogReader postId={route.post} back={backToBlog} />
      : <BlogList openPost={openPost} />;
  } else {
    // home (also catches the retired cv/resume routes)
    content = <HomePage go={go} />;
  }

  // Every page now ends with a mountain landscape — hide the copyright footer bar.
  const hasRange = true;
  return (
    <>
      <Nav page={route.page} go={go} blogPostOpen={!!route.post} />
      <main><ErrorBoundary>{content}</ErrorBoundary></main>
      {!hasRange && <Footer />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
