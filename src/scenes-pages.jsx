// ===== Fixed background world for Publications (calm paper archive) =====

function fixedWorldHost(buildFn) {
  return function WorldComp() {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const el = ref.current;
      if (!el || !window.THREE) return;
      let cleanup = null;
      try {
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        renderer.setSize(window.innerWidth, window.innerHeight, false);
        el.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 0.1, 100);
        const state = { mouse: { x: 0, y: 0 }, scroll: 0 };
        const api = buildFn({ scene, camera, state }) || {};

        const onScroll = () => {
          const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
          state.scroll = Math.min(1, Math.max(0, window.scrollY / max));
        };
        const onMove = (e) => {
          state.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
          state.mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
        };
        const onResize = () => {
          renderer.setSize(window.innerWidth, window.innerHeight, false);
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("pointermove", onMove, { passive: true });
        window.addEventListener("resize", onResize);
        onScroll();

        let raf = 0, running = true;
        const t0 = performance.now();
        const tick = () => {
          if (!running) return;
          api.update && api.update((performance.now() - t0) / 1000);
          renderer.render(scene, camera);
          raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        const onVis = () => {
          if (document.hidden) { running = false; cancelAnimationFrame(raf); }
          else if (!running) { running = true; raf = requestAnimationFrame(tick); }
        };
        document.addEventListener("visibilitychange", onVis);

        cleanup = () => {
          running = false;
          cancelAnimationFrame(raf);
          document.removeEventListener("visibilitychange", onVis);
          window.removeEventListener("scroll", onScroll);
          window.removeEventListener("pointermove", onMove);
          window.removeEventListener("resize", onResize);
          scene.traverse((o) => {
            if (o.geometry) o.geometry.dispose();
            if (o.material && o.material.dispose) o.material.dispose();
          });
          renderer.dispose();
          try { renderer.forceContextLoss(); } catch (e2) { /* older three */ }
          while (el.firstChild) el.removeChild(el.firstChild);
        };
      } catch (e) {
        // A WebGL/scene failure must never blank the page — leave the empty host.
        while (el.firstChild) el.removeChild(el.firstChild);
      }
      return () => { cleanup && cleanup(); };
    }, []);
    return <div ref={ref} className="iw-canvas" />;
  };
}

// paper sheet texture (white page with text lines)
function makePaperTexture() {
  const c = document.createElement("canvas");
  c.width = 128; c.height = 170;
  const x = c.getContext("2d");
  x.fillStyle = "#ffffff";
  x.fillRect(0, 0, 128, 170);
  x.fillStyle = "#2e8f5b";
  x.fillRect(14, 14, 70, 7);
  x.fillStyle = "#c3cbd4";
  for (let i = 0; i < 9; i++) x.fillRect(14, 36 + i * 13, 100 - (i % 3) * 14, 5);
  return new THREE.CanvasTexture(c);
}

// ---------- Publications: calm floating paper archive (papers + courier drone) ----------
// Kept deliberately quiet and pushed to the sides/back so it never competes with text.
const PaperWorld = fixedWorldHost(({ scene, camera, state }) => {
  camera.position.set(0, 1.3, 7);
  camera.lookAt(0, 1.3, 0);
  addRobotLights(scene);

  const paperTex = makePaperTexture();
  const paperGeo = new THREE.PlaneGeometry(0.62, 0.82);
  const papers = [];
  for (let i = 0; i < 12; i++) {
    const m = new THREE.Mesh(paperGeo, new THREE.MeshBasicMaterial({
      map: paperTex, side: THREE.DoubleSide, transparent: true,
      opacity: 0.28 + Math.random() * 0.22, // faint, so body copy stays readable
    }));
    const side = i % 2 ? 1 : -1;
    // hold them out toward the edges and pushed back behind the content column
    m.position.set(side * (4.0 + Math.random() * 2.6), Math.random() * 7 - 1.5, -2.5 - Math.random() * 3.5);
    m.rotation.set(Math.random() * 0.4 - 0.2, Math.random() * 0.8 - 0.4, Math.random() * 0.25 - 0.12);
    m.userData = { sp: 0.05 + Math.random() * 0.09, rs: (Math.random() - 0.5) * 0.12, ph: Math.random() * 6 };
    scene.add(m);
    papers.push(m);
  }

  // a single courier drone carrying a paper, drifting slowly along the back
  const courier = buildDroneModel();
  courier.group.scale.setScalar(0.6);
  scene.add(courier.group);
  const carried = new THREE.Mesh(paperGeo, new THREE.MeshBasicMaterial({
    map: paperTex, side: THREE.DoubleSide, transparent: true, opacity: 0.85,
  }));
  carried.scale.setScalar(0.7);
  carried.position.y = -0.45;
  carried.rotation.x = 0.15;
  courier.group.add(carried);

  return {
    update(t) {
      papers.forEach((m) => {
        m.position.y += m.userData.sp * 0.012;
        m.rotation.y += m.userData.rs * 0.004;
        m.position.x += Math.sin(t * 0.25 + m.userData.ph) * 0.0008;
        if (m.position.y > 5.6) m.position.y = -1.8;
      });
      courier.update(t * 0.6);
      const a = t * 0.07; // slow, wide arc kept to the back
      courier.group.position.set(Math.sin(a) * 5.0, 3.2 + Math.sin(t * 0.5) * 0.2, -3.0 + Math.cos(a) * 1.0);
      courier.group.rotation.y = -a;
      // very gentle parallax only — no scroll-driven dolly over the text
      camera.position.x = state.mouse.x * 0.25;
      camera.position.y = 1.3 - state.mouse.y * 0.15;
      camera.lookAt(0, 1.2, 0);
    },
  };
});

Object.assign(window, { PaperWorld });
