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
                <p className="hero-role">
                  PhD Student in AI <span className="at">at</span> the University of Georgia
                </p>
                <p className="hero-bio">
                  I work on <em>multi-robot systems</em>, computer vision, and autonomous navigation — frameworks where many robots map, localize, and reason about complex environments together, even when GPS and clean communication fail.
                </p>
                <p className="hero-bio">
                  Currently with <em>Dr. Ramviyas Parasuraman</em> at the HeRoLab. Previously: Samsung R&amp;D, IIIT Naya Raipur.
                </p>
                <div style={{ display: "flex", gap: 10, marginTop: 24, flexWrap: "wrap" }}>
                  <a href={PROFILE.scholar} target="_blank" rel="noopener noreferrer" className="btn-link">Scholar</a>
                  <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="btn-link">GitHub</a>
                  <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="btn-link">LinkedIn</a>
                  <a href={PROFILE.cv} target="_blank" rel="noopener noreferrer" className="btn-link">CV / Résumé ↓</a>
                </div>
                <a href={`mailto:${PROFILE.email}`} className="hero-email">{PROFILE.email}</a>
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
                  <h3>{int.title}</h3>
                  <p>{int.desc}</p>
                  <div className="topics">
                    {int.topics.map((t) => <span key={t} className="topic">{t}</span>)}
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
    <section className="research page" data-screen-label="Research">
      <div className="container">
        <div className="page-head">
          <div className="page-eyebrow">What I work on</div>
          <h1 className="page-title">Research <span className="ital">Thrusts</span></h1>
          <p className="page-lede">Three intertwined directions — embodied reasoning in real spaces, cooperative mapping across many robots, and learning a belief over the invisible fields that fill a room.</p>
        </div>
        {THRUSTS.map((t, i) => (
          <Reveal key={t.id} delay={i * 80}>
            <div className="thrust" style={{ "--t-accent": t.accent, "--t-tint": t.tint }}>
              <div className="thrust-body">
                <span className="thrust-badge"><span className="b-dot"></span>Thrust {String(i + 1).padStart(2, "0")}</span>
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
          <h1 className="j-title">Mile<br /><span className="outline">stones</span></h1>
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
  const open = (i) => { if (!dragged.current) setActive(i); };
  const nudge = (dir) => {
    const el = stripRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.82, behavior: "smooth" });
  };

  return (
    <section className="section trips" data-screen-label="Trips">
      <div className="container">
        <div className="page-eyebrow">Out in the world</div>
        <h2 className="trips-title">Places I've <span className="ital">wandered</span></h2>
        <p className="trips-lede">Trails, viewpoints, and the odd long flight. Drag sideways or use the arrows — tap a photo to open it.</p>
        <div className="trips-strip-wrap">
          <button className="strip-arrow prev" aria-label="Scroll left" onClick={() => nudge(-1)}><Arrow dir="left" /></button>
          <div className="trips-strip" ref={stripRef}>
            {items.map((g, i) => (
              <figure key={g.src + i} className="trip-card" tabIndex={0} role="button"
                aria-label={`${g.place} — ${g.title}`}
                onClick={() => open(i)}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); setActive(i); } }}
                onMouseEnter={(e) => { const v = e.currentTarget.querySelector("video"); if (v) v.play().catch(() => {}); }}
                onMouseLeave={(e) => { const v = e.currentTarget.querySelector("video"); if (v) v.pause(); }}>
                {isVideo(g.src)
                  ? <video src={g.src + "#t=0.1"} muted loop playsInline preload="metadata" draggable="false" />
                  : <img src={g.src} alt={g.title} loading="lazy" draggable="false" />}
                {isVideo(g.src) && <span className="trip-play" aria-hidden="true">▶</span>}
                {g.kind && <span className={`trip-tag ${g.kind}`}>{g.kind}</span>}
                <span className="trip-zoom" aria-hidden="true"><Arrow dir="right" /></span>
                {(g.place || g.title) && (
                  <figcaption className="trip-cap">
                    {g.place && <span className="trip-place">{g.place}</span>}
                    {g.title && <span className="trip-name">{g.title}</span>}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
          <button className="strip-arrow next" aria-label="Scroll right" onClick={() => nudge(1)}><Arrow dir="right" /></button>
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
                {cur.kind && <span className={`trip-tag ${cur.kind} static`}>{cur.kind}</span>}
                {cur.place && <span className="tl-place">{cur.place}</span>}
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
  return (
    <>
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
    </>
  );
}

function BlogList({ openPost }) {
  return (
    <section className="blog-page" data-screen-label="Blog">
      <div className="container">
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
