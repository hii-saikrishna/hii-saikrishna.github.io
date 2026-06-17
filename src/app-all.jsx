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

// ===== Hero photo gallery — scroll through images, with a 3D robot "scroller" =====
function HeroGallery() {
  const items = window.HOME_GALLERY || [];
  const n = items.length;
  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const go = (d) => setIdx((i) => (i + d + n) % n);

  React.useEffect(() => {
    if (paused || n < 2) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % n), 6000);
    return () => clearInterval(id);
  }, [paused, n]);

  if (!n) return null;
  const cur = items[idx];
  return (
    <div className="hero-gallery"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}>
      <div className="hg-stage">
        {items.map((g, i) => (
          <img key={g.src} src={g.src} alt={PROFILE.name}
            className={`hg-img ${i === idx ? "active" : ""}`} draggable="false" />
        ))}
        <div className="hg-grad"></div>
        {n > 1 && (
          <div className="hg-caption">
            <div className="hg-cap-idx">{String(idx + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}</div>
          </div>
        )}
        {n > 1 && <>
          <button className="hg-nav prev" onClick={() => go(-1)} aria-label="Previous image"><Arrow dir="left" /></button>
          <button className="hg-nav next" onClick={() => go(1)} aria-label="Next image"><Arrow dir="right" /></button>
        </>}
      </div>
      <div className="hg-rail">
        {items.map((g, i) => (
          <div key={g.src} className={`hg-thumb ${i === idx ? "active" : ""}`}
            onClick={() => setIdx(i)} role="button" aria-label={`Photo ${i + 1}`}>
            <img src={g.src} alt="" draggable="false" />
          </div>
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
                <div key={int.id} className="interest-card">
                  <div className="glyph-wrap">
                    <ThreeScene build={dioramaScene(int.scene, 0.8)} />
                  </div>
                  <h3>{int.title}</h3>
                  <p>{int.desc}</p>
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
    <section className="research page" data-screen-label="Research">
      <div className="container">
        <div className="page-head">
          <div className="page-eyebrow">What I work on</div>
          <h1 className="page-title">Research <span className="ital">Interests</span></h1>
          <p className="page-lede">Three intertwined directions — embodied reasoning in real spaces, cooperative mapping across many robots, and learning a belief over the invisible fields that fill a room.</p>
        </div>
        {THRUSTS.map((t, i) => (
          <Reveal key={t.id} delay={i * 80}>
            <div className="thrust" style={{ "--t-accent": t.accent, "--t-tint": t.tint }}>
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

// Low-poly 3D mountain range footer — soft sky, shining sun, snow-capped sage peaks.
function buildMountainFooter({ scene, camera, renderer }) {
  renderer.setClearColor(0x000000, 0);

  const disposables = [];
  const track = (o) => { disposables.push(o); return o; };
  let seed = 20240617;
  const rand = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };

  // ---- sky backdrop (soft vertical gradient) ----
  const skyCanvas = document.createElement("canvas");
  skyCanvas.width = 8; skyCanvas.height = 256;
  const skyCtx = skyCanvas.getContext("2d");
  const skyGrad = skyCtx.createLinearGradient(0, 0, 0, 256);
  skyGrad.addColorStop(0.0, "#a6d2ef");
  skyGrad.addColorStop(0.42, "#c7e4f2");
  skyGrad.addColorStop(0.72, "#e4f1ec");
  skyGrad.addColorStop(1.0, "#eef7ef");
  skyCtx.fillStyle = skyGrad; skyCtx.fillRect(0, 0, 8, 256);
  scene.background = track(new THREE.CanvasTexture(skyCanvas));
  scene.fog = new THREE.Fog(0xe4f1ec, 20, 46);

  camera.fov = 42;
  camera.position.set(0, 3, 16);
  camera.updateProjectionMatrix();
  camera.lookAt(0, 1.6, 0);

  scene.add(new THREE.HemisphereLight(0xffffff, 0xcfe6d6, 1.35));
  const sunLight = new THREE.DirectionalLight(0xfff2d6, 1.6);
  sunLight.position.set(-10, 9, 5);
  scene.add(sunLight);
  scene.add(new THREE.AmbientLight(0xffffff, 0.22));

  // ---- snow-capped sage peaks, three depth rows ----
  const coneGeo = track(new THREE.ConeGeometry(1, 1, 7));
  const matFar = track(new THREE.MeshStandardMaterial({ color: 0xbcd6da, flatShading: true, roughness: 1 }));
  const matMid = track(new THREE.MeshStandardMaterial({ color: 0x9ec3ac, flatShading: true, roughness: 1 }));
  const matFront = track(new THREE.MeshStandardMaterial({ color: 0x83b298, flatShading: true, roughness: 1 }));
  const matSnow = track(new THREE.MeshStandardMaterial({ color: 0xf6fbf7, flatShading: true, roughness: 0.85 }));

  const range = new THREE.Group();
  scene.add(range);
  const K = 5;
  const addPeak = (x, z, r, hgt, mat, snow) => {
    const m = new THREE.Mesh(coneGeo, mat);
    m.scale.set(r, hgt, r);
    m.position.set(x, hgt / 2 - K, z);
    m.rotation.y = rand() * Math.PI;
    range.add(m);
    if (snow) {
      const f = 0.30 + rand() * 0.06;
      const cap = new THREE.Mesh(coneGeo, matSnow);
      cap.scale.set(r * f * 1.06, hgt * f, r * f * 1.06); // a touch proud of the face — no z-fight
      cap.position.set(x, (hgt - K) - (hgt * f) / 2, z);
      cap.rotation.y = m.rotation.y;
      range.add(cap);
    }
  };
  for (let i = 0; i < 12; i++) addPeak(-46 + i * 8.4 + (rand() - 0.5) * 3, -5.5 - rand() * 2, 4.6 + rand() * 1.8, 7 + rand() * 2.2, matFar, rand() > 0.4);
  for (let i = 0; i < 11; i++) addPeak(-44 + i * 8.6 + (rand() - 0.5) * 3, -1.5 - rand(), 4.2 + rand() * 1.6, 6 + rand() * 1.8, matMid, rand() > 0.3);
  for (let i = 0; i < 9; i++) addPeak(-40 + i * 9.2 + (rand() - 0.5) * 3, 2.4 + rand() * 0.8, 3.8 + rand() * 1.4, 5 + rand() * 1.6, matFront, rand() > 0.55);

  // ---- shining sun: golden disc + warm halo (depth-tested so the range can clip it) ----
  const sunPos = new THREE.Vector3(-10, 5.9, -13);
  const makeGlow = (c0, c1, scale, op) => {
    const c = document.createElement("canvas"); c.width = c.height = 128;
    const g = c.getContext("2d");
    const rg = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    rg.addColorStop(0, c0); rg.addColorStop(0.42, c1); rg.addColorStop(1, "rgba(255,236,185,0)");
    g.fillStyle = rg; g.fillRect(0, 0, 128, 128);
    const sp = new THREE.Sprite(track(new THREE.SpriteMaterial({ map: track(new THREE.CanvasTexture(c)), transparent: true, depthWrite: false, fog: false, blending: THREE.AdditiveBlending, opacity: op })));
    sp.scale.set(scale, scale, 1); sp.position.copy(sunPos);
    return sp;
  };
  const glowOuter = makeGlow("rgba(255,238,198,0.8)", "rgba(255,210,130,0.3)", 17, 0.85);
  const glowInner = makeGlow("rgba(255,252,240,1)", "rgba(255,228,165,0.7)", 6.5, 1);
  scene.add(glowOuter); scene.add(glowInner);
  const disc = new THREE.Mesh(
    track(new THREE.CircleGeometry(1.4, 40)),
    track(new THREE.MeshBasicMaterial({ color: 0xffe7a0, fog: false, transparent: true }))
  );
  disc.position.copy(sunPos); disc.renderOrder = 1;
  scene.add(disc);

  // ---- puffy low-poly clouds drifting through the sky ----
  const cloudGeo = track(new THREE.SphereGeometry(1, 8, 7));
  const cloudMat = track(new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true, roughness: 1, transparent: true, opacity: 0.9 }));
  const clouds = [];
  for (let i = 0; i < 3; i++) {
    const c = new THREE.Group();
    for (let j = 0; j < 4; j++) {
      const s = new THREE.Mesh(cloudGeo, cloudMat);
      s.position.set(j * 1.3 - 2, (j % 2) * 0.5, 0);
      s.scale.set(1.5 + rand() * 0.6, 0.8, 1);
      c.add(s);
    }
    c.position.set(-18 + i * 15, 5.6 + rand() * 1.4, -7 - rand() * 2);
    c.userData = { sp: 0.016 + rand() * 0.014 };
    scene.add(c);
    clouds.push(c);
  }

  return {
    update(t) {
      range.rotation.y = Math.sin(t * 0.07) * 0.014;
      const b = 1 + Math.sin(t * 0.8) * 0.05;
      glowOuter.scale.set(17 * b, 17 * b, 1);
      clouds.forEach((c) => { c.position.x += c.userData.sp; if (c.position.x > 32) c.position.x = -32; });
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
    return { page: h, post: null };
  };
  const [route, setRoute] = React.useState(parseHash(initial));

  React.useEffect(() => {
    const onHash = () => setRoute(parseHash(window.location.hash));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  React.useEffect(() => {
    // Safe scroll-to-top — older Safari throws on { behavior: "instant" }.
    try { window.scrollTo(0, 0); } catch (e) { /* no-op */ }
  }, [route.page, route.post]);

  const go = (page) => { window.location.hash = page === "home" ? "" : `#/${page}`; };
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

  return (
    <>
      <Nav page={route.page} go={go} blogPostOpen={!!route.post} />
      <main><ErrorBoundary>{content}</ErrorBoundary></main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
