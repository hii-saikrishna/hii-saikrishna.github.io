// ===== CONSOLIDATED APP - ALL COMPONENTS IN ONE FILE =====
// This avoids Babel transpilation timeouts from circular imports

// ===== Three.js Scene Host =====
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
    const ro = new ResizeObserver(onResize);
    ro.observe(el);

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      ctx.mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      ctx.mouse.y = -(((e.clientY - r.top) / r.height) * 2 - 1);
    };
    el.addEventListener("pointermove", onMove);

    return () => {
      stopLoop();
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

// ===== Robot Builders =====
const RB = {
  panel:  0xeef1f4, panel2: 0xd9dfe6, dark: 0x252c36, joint: 0x3a4450,
  accent: 0x2e8f5b, visor: 0x9fe8c8, grass: 0x6db36a, grass2: 0x4e9e5f, soil: 0x9b7e57, rock: 0xb9c2bb,
};

function rMat(c, o = {}) {
  return new THREE.MeshStandardMaterial({ color: c, roughness: 0.6, metalness: 0.12, flatShading: true, ...o });
}
function rBox(parent, mat, w, h, d, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  parent.add(m);
  return m;
}
function rCyl(parent, mat, rt, rb, h, x = 0, y = 0, z = 0, seg = 10) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat);
  m.position.set(x, y, z);
  parent.add(m);
  return m;
}
function rSph(parent, mat, r, x = 0, y = 0, z = 0, seg = 10) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, seg, seg), mat);
  m.position.set(x, y, z);
  parent.add(m);
  return m;
}

function addRobotLights(scene) {
  scene.add(new THREE.HemisphereLight(0xffffff, 0xcfe4cf, 1.15));
  const dir = new THREE.DirectionalLight(0xffffff, 1.4);
  dir.position.set(3, 6, 4);
  scene.add(dir);
  const fill = new THREE.DirectionalLight(0xe2f2e6, 0.4);
  fill.position.set(-4, 2, -3);
  scene.add(fill);
}

function addMeadow(parent, radius = 1.5) {
  const matG = rMat(RB.grass, { roughness: 0.95 });
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius * 1.04, 0.1, 28), matG);
  disc.position.y = -0.5;
  parent.add(disc);
  
  const matR = rMat(RB.rock, { roughness: 1 });
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const d = radius * 0.85 + (Math.random() - 0.5) * 0.3;
    const r = 0.06 + Math.random() * 0.08;
    const x = Math.cos(a) * d, z = Math.sin(a) * d;
    rSph(parent, matR, r, x, -0.3, z);
  }
}

function buildHumanoid() {
  const root = new THREE.Group();
  const mat = rMat(RB.panel); const matDark = rMat(RB.dark); const matAcc = rMat(RB.accent);

  const torso = rBox(root, mat, 0.4, 0.6, 0.3, 0, 0.3, 0);
  const head = rSph(root, matDark, 0.2, 0, 1.1, 0, 6);
  const visor = rSph(root, matAcc, 0.09, -0.08, 1.15, 0);
  
  const armL = rBox(root, mat, 0.12, 0.5, 0.12, -0.35, 0.5, 0);
  const armR = rBox(root, mat, 0.12, 0.5, 0.12, 0.35, 0.5, 0);
  const legL = rBox(root, matDark, 0.15, 0.45, 0.15, -0.2, -0.15, 0);
  const legR = rBox(root, matDark, 0.15, 0.45, 0.15, 0.2, -0.15, 0);

  const animated = { armL, armR, legL, legR, torso };
  return { root, animated };
}

function buildQuadruped() {
  const root = new THREE.Group();
  const mat = rMat(RB.panel); const matDark = rMat(RB.dark);

  const chassis = rBox(root, mat, 0.5, 0.3, 0.8, 0, 0.25, 0);
  const head = rBox(root, matDark, 0.2, 0.2, 0.3, 0, 0.5, 0.4);
  
  const legs = [];
  for (let i = 0; i < 4; i++) {
    const x = (i % 2 === 0 ? -1 : 1) * 0.2;
    const z = (i < 2 ? -1 : 1) * 0.3;
    const leg = rBox(root, matDark, 0.08, 0.35, 0.08, x, 0.05, z);
    legs.push(leg);
  }

  return { root, animated: { chassis, head, legs } };
}

function buildDrone() {
  const root = new THREE.Group();
  const mat = rMat(RB.panel); const matDark = rMat(RB.dark); const matAcc = rMat(RB.accent);

  const body = rBox(root, mat, 0.3, 0.15, 0.3, 0, 0, 0);
  const arms = [];
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    const x = Math.cos(a) * 0.35, z = Math.sin(a) * 0.35;
    const arm = rBox(root, matDark, 0.05, 0.35, 0.05, x, 0.2, z);
    const prop = rCyl(root, matAcc, 0.15, 0.15, 0.02, x, 0.38, z, 8);
    arms.push({ arm, prop });
  }
  
  return { root, animated: { body, arms } };
}

function buildRover() {
  const root = new THREE.Group();
  const mat = rMat(RB.panel); const matDark = rMat(RB.dark); const matAcc = rMat(RB.accent);

  const chassis = rBox(root, mat, 0.4, 0.25, 0.7, 0, 0.2, 0);
  const cabin = rBox(root, matDark, 0.3, 0.2, 0.3, 0, 0.45, 0);
  
  const wheels = [];
  const positions = [[-0.25, 0], [0.25, 0], [-0.25, 0.5], [0.25, 0.5]];
  for (const [x, z] of positions) {
    const wheel = rCyl(root, matAcc, 0.12, 0.12, 0.15, x, 0.05, z - 0.35, 6);
    wheel.rotateZ(Math.PI / 2);
    wheels.push(wheel);
  }
  
  return { root, animated: { chassis, cabin, wheels } };
}

// ===== Hero Scene Builder =====
function buildHeroScene(ctx) {
  const { scene, camera } = ctx;
  camera.position.set(2, 1.5, 3);
  camera.lookAt(0, 0.3, 0);

  addRobotLights(scene);
  addMeadow(scene, 2);

  const robots = [];
  const configs = [
    { build: buildHumanoid, x: -1.2, z: 0 },
    { build: buildQuadruped, x: -0.4, z: -0.4 },
    { build: buildDrone, x: 0.4, z: -0.4 },
    { build: buildRover, x: 1.2, z: 0 },
  ];

  configs.forEach(({ build, x, z }) => {
    const { root } = build();
    root.position.set(x, 0, z);
    scene.add(root);
    robots.push(root);
  });

  const t0 = performance.now();
  return {
    update(t) {
      robots.forEach((r, i) => {
        r.rotation.y += 0.006;
        r.position.y = Math.sin(t * 1.2 + i) * 0.1;
      });
    },
  };
}

// ===== Journey World (Updates) =====
function jHash(x, y) { const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return s - Math.floor(s); }
function jNoise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = jHash(xi, yi), b = jHash(xi + 1, yi), c = jHash(xi, yi + 1), d = jHash(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
function jFbm(x, y) {
  let val = 0, amp = 0.55, f = 1;
  for (let i = 0; i < 4; i++) { val += amp * jNoise(x * f, y * f); amp *= 0.5; f *= 2.1; }
  return val;
}
function jTerrainH(x, z) {
  const amp = THREE.MathUtils.smoothstep(Math.abs(x), 3.5, 14);
  return jFbm(x * 0.07 + 31, z * 0.07 + 7) * 7 * amp;
}

const J_PATH = { zStart: 18, zEnd: -300 };
function jPathX(z) { return Math.sin(z * 0.028) * 3.2; }

function JourneyWorld() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.THREE) return;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const fogGreen = new THREE.Color(0xe9f3ea);
    const fogBlue = new THREE.Color(0xcfe8fa);
    scene.fog = new THREE.Fog(fogGreen.clone(), 26, 150);
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 400);

    scene.add(new THREE.HemisphereLight(0xfdfffa, 0xb9d8ae, 1.1));
    const sun = new THREE.DirectionalLight(0xfff4dd, 1.5);
    sun.position.set(40, 60, -30);
    scene.add(sun);

    const disposables = [];
    const track = (o) => { disposables.push(o); return o; };

    // Terrain
    const tGeo = track(new THREE.PlaneGeometry(140, 380, 64, 170));
    tGeo.rotateX(-Math.PI / 2);
    {
      const p = tGeo.attributes.position;
      const colors = new Float32Array(p.count * 3);
      const cLow = new THREE.Color(0x8fc177), cMid = new THREE.Color(0x5fa763), cHigh = new THREE.Color(0x47885c), cPath = new THREE.Color(0xb6d8a4);
      for (let i = 0; i < p.count; i++) {
        const x = p.array[i * 3], z = p.array[i * 3 + 2] - 150;
        const h = jTerrainH(x - jPathX(z), z);
        p.array[i * 3 + 1] = h;
        p.array[i * 3 + 2] = z;
        const c = new THREE.Color();
        const onPath = 1 - THREE.MathUtils.smoothstep(Math.abs(x - jPathX(z)), 1.5, 5);
        if (h < 1.4) c.lerpColors(cLow, cMid, h / 1.4);
        else c.lerpColors(cMid, cHigh, Math.min(1, (h - 1.4) / 4));
        c.lerp(cPath, onPath * 0.7);
        colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
      }
      tGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      tGeo.computeVertexNormals();
    }
    scene.add(new THREE.Mesh(tGeo, track(new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.95 }))));

    // Mountains
    const mGeo = track(new THREE.ConeGeometry(1, 1, 6));
    const mMat = track(new THREE.MeshStandardMaterial({ color: 0x93b8a6, flatShading: true, roughness: 1 }));
    for (let i = 0; i < 14; i++) {
      const side = i % 2 === 0 ? 1 : -1;
      const z = 10 - i * 24 - Math.random() * 10;
      const x = side * (30 + Math.random() * 28);
      const m = new THREE.Mesh(mGeo, mMat);
      m.scale.set(8 + Math.random() * 6, 12 + Math.random() * 10, 8 + Math.random() * 6);
      m.position.set(x, jTerrainH(x, z) - 4, z);
      scene.add(m);
      track(m);
    }

    let raf = 0, running = true;
    const t0 = performance.now();
    const tick = () => {
      if (!running) return;
      const scy = Math.max(0, Math.min(1, window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)));
      const progZ = J_PATH.zStart + (J_PATH.zEnd - J_PATH.zStart) * scy;
      const progX = jPathX(progZ);
      
      camera.position.x = progX;
      camera.position.y = 8 + jTerrainH(progX, progZ) + 2;
      camera.position.z = progZ;
      camera.lookAt(progX, jTerrainH(progX, progZ) + 1, progZ - 15);
      
      if (scy > 0.95) scene.fog.color.lerp(new THREE.Color(0x87ceeb), 0.05);
      
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      disposables.forEach(o => { if (o.dispose) o.dispose(); });
      renderer.dispose();
      while (el.firstChild) el.removeChild(el.firstChild);
    };
  }, []);
  return <div ref={ref} className="journey-world"></div>;
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
  const robotKinds = [
    { kind: "humanoid", opts: { cam: [2.5, 1.9, 3.1], look: 0.85 } },
    { kind: "quadruped", opts: { cam: [2.1, 1.4, 2.6], look: 0.45 } },
    { kind: "rover", opts: { cam: [2.1, 1.4, 2.6], look: 0.4 } },
    { kind: "drone", opts: { cam: [2.1, 1.6, 2.7], look: 0.9, hover: 0.95 } },
  ];
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
              <ThreeScene build={buildHeroScene} />
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
                  <img src={t.img} alt={t.title} />
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
    <section className="publications" data-screen-label="Publications">
      <div className="container">
        <h1 style={{ marginBottom: 60 }}>Publications</h1>
        <div>
          {PUBLICATIONS.map(p => (
            <PubRow key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function UpdatesPage() {
  return (
    <>
      <JourneyWorld />
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
    </>
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
        <h1 style={{ marginBottom: 60 }}>Get in Touch</h1>
        <div style={{ maxWidth: 500 }}>
          <p className="hero-bio">
            I'm always interested in collaborations, research discussions, or just talking robots. Feel free to reach out.
          </p>
          <div style={{ marginTop: 30 }}>
            <p><strong>Email:</strong> <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></p>
            <p><strong>GitHub:</strong> <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">{PROFILE.github}</a></p>
            <p><strong>Scholar:</strong> <a href={PROFILE.scholar} target="_blank" rel="noopener noreferrer">{PROFILE.scholar}</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogList({ openPost }) {
  return (
    <section className="blog" data-screen-label="Blog">
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
    </section>
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
