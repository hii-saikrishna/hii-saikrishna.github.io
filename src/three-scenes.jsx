// ===== Three.js scene host + blog covers =====
const COLORS = {
  ink:    new THREE.Color("#0e1116"),
  ink3:   new THREE.Color("#5b6470"),
  ink4:   new THREE.Color("#8b94a3"),
  line:   new THREE.Color("#e6e8ee"),
  accent: new THREE.Color("#2e8f5b"),
  warm:   new THREE.Color("#e09255"),
  bg:     new THREE.Color("#ffffff"),
};

// Generic host: renders only while visible (perf)
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
    // Defer out of the observer callback to avoid the benign
    // "ResizeObserver loop completed with undelivered notifications" warning.
    const ro = new ResizeObserver(() => requestAnimationFrame(onResize));
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
  }, []);

  return <div ref={ref} className={className} style={style} />;
}

// ----- Blog reader cover scenes (small, abstract) -----
function buildBlogCover(kind) {
  return (ctx) => {
    const { scene, camera } = ctx;
    camera.position.set(0, 0, 4);
    const group = new THREE.Group();
    scene.add(group);

    if (kind === "ghosting") {
      for (let i = 0; i < 2; i++) {
        const g = new THREE.BoxGeometry(1.2, 0.9, 1.2);
        const w = new THREE.LineSegments(new THREE.WireframeGeometry(g),
          new THREE.LineBasicMaterial({ color: i ? COLORS.warm : COLORS.accent, transparent: true, opacity: i ? 0.55 : 0.9 }));
        w.position.x = i * 0.35;
        w.userData.offset = i;
        group.add(w);
      }
    } else if (kind === "wifi") {
      for (let i = 0; i < 4; i++) {
        const r = 0.4 + i * 0.32;
        const g = new THREE.TorusGeometry(r, 0.015, 8, 48, Math.PI * 0.9);
        const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: COLORS.accent, transparent: true, opacity: 0.4 + (3 - i) * 0.15 }));
        m.rotation.z = -Math.PI / 4;
        m.userData.i = i;
        group.add(m);
      }
      group.add(new THREE.Mesh(new THREE.SphereGeometry(0.12, 14, 14), new THREE.MeshBasicMaterial({ color: COLORS.ink })));
    } else if (kind === "journey") {
      const pts = [];
      for (let i = 0; i <= 40; i++) {
        const tt = i / 40;
        pts.push(new THREE.Vector3(-1.4 + tt * 2.8, Math.sin(tt * Math.PI) * 0.7, Math.cos(tt * Math.PI * 1.6) * 0.4));
      }
      const curve = new THREE.CatmullRomCurve3(pts);
      group.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 60, 0.025, 8, false), new THREE.MeshBasicMaterial({ color: COLORS.accent })));
      for (let i = 0; i < 12; i++) {
        const sm = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 10), new THREE.MeshBasicMaterial({ color: COLORS.ink }));
        sm.position.copy(curve.getPoint(i / 11));
        group.add(sm);
      }
    } else if (kind === "iros") {
      for (let x = -2; x <= 2; x++) {
        for (let z = -1; z <= 1; z++) {
          const h = (x === 0 && z === 0) ? 1.0 : 0.3;
          const g = new THREE.BoxGeometry(0.35, h, 0.35);
          const w = new THREE.LineSegments(new THREE.WireframeGeometry(g),
            new THREE.LineBasicMaterial({ color: (x === 0 && z === 0) ? COLORS.accent : COLORS.ink4, transparent: true, opacity: (x === 0 && z === 0) ? 0.95 : 0.5 }));
          w.position.set(x * 0.5, h / 2 - 0.35, z * 0.5);
          group.add(w);
        }
      }
      group.rotation.x = -0.5;
    } else if (kind === "reading") {
      for (let i = 0; i < 7; i++) {
        const g = new THREE.PlaneGeometry(1.4, 0.9);
        const w = new THREE.LineSegments(new THREE.WireframeGeometry(g),
          new THREE.LineBasicMaterial({ color: i === 3 ? COLORS.accent : COLORS.ink4, transparent: true, opacity: i === 3 ? 0.95 : 0.45 }));
        w.position.y = -0.6 + i * 0.2;
        w.position.x = (i - 3) * 0.06;
        w.rotation.x = -0.6;
        w.userData.i = i;
        group.add(w);
      }
    } else if (kind === "tooling") {
      const m1 = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.12, 8, 24), new THREE.MeshBasicMaterial({ color: COLORS.accent, wireframe: true }));
      const m2 = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.1, 8, 20), new THREE.MeshBasicMaterial({ color: COLORS.ink, wireframe: true }));
      m1.position.x = -0.45;
      m2.position.x = 0.55;
      group.add(m1); group.add(m2);
      group.userData = { m1, m2 };
    }

    return {
      update(t) {
        if (kind === "ghosting") {
          group.children.forEach((c) => {
            c.position.x = c.userData.offset ? Math.sin(t * 0.6) * 0.3 + 0.35 : 0;
            c.rotation.y = t * 0.3;
          });
        } else if (kind === "wifi") {
          group.children.forEach((c) => {
            if (c.userData && c.userData.i !== undefined) {
              const i = c.userData.i;
              c.material.opacity = 0.2 + 0.6 * Math.max(0, Math.sin(t * 1.2 - i * 0.6));
              const s = 0.9 + 0.1 * Math.sin(t * 1.2 - i * 0.6);
              c.scale.set(s, s, s);
            }
          });
          group.rotation.z = Math.sin(t * 0.3) * 0.1;
        } else if (kind === "journey") {
          group.rotation.y = t * 0.2;
        } else if (kind === "iros") {
          group.rotation.y = t * 0.18 - 0.3;
        } else if (kind === "reading") {
          group.children.forEach((c, i) => {
            c.position.y = -0.6 + i * 0.2 + Math.sin(t * 0.8 + i * 0.4) * 0.04;
          });
          group.rotation.y = Math.sin(t * 0.3) * 0.15;
        } else if (kind === "tooling") {
          group.userData.m1.rotation.z = t * 0.5;
          group.userData.m2.rotation.z = -t * 0.65;
        }
      },
      dispose() {
        group.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          if (o.material && o.material.dispose) o.material.dispose();
        });
      },
    };
  };
}

window.ThreeScene = ThreeScene;
window.buildBlogCover = buildBlogCover;
