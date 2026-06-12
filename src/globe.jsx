// ===== 3D Globe — real continents (recolored earth texture) + visit heatmap =====

const VISITED_PLACES = [
  { name: "Athens, GA", lat: 33.95, lon: -83.38, w: 1.0, current: true },
  { name: "Guntur", lat: 16.31, lon: 80.44, w: 0.95, home: true },
  { name: "Vijayawada", lat: 16.51, lon: 80.65, w: 0.7 },
  { name: "Naya Raipur", lat: 21.16, lon: 81.79, w: 0.85 },
  { name: "Delhi", lat: 28.61, lon: 77.21, w: 0.5 },
  { name: "Manali", lat: 32.24, lon: 77.19, w: 0.4 },
  { name: "Thailand", lat: 13.76, lon: 100.5, w: 0.5 },
  { name: "Hangzhou", lat: 30.27, lon: 120.16, w: 0.5 },
  { name: "Louisville", lat: 38.25, lon: -85.76, w: 0.75 },
  { name: "Washington, DC", lat: 38.91, lon: -77.04, w: 0.4 },
  { name: "New York", lat: 40.71, lon: -74.01, w: 0.5 },
  { name: "Colorado", lat: 39.74, lon: -104.99, w: 0.45 },
  { name: "Gatlinburg", lat: 35.71, lon: -83.51, w: 0.35 },
  { name: "Toronto", lat: 43.65, lon: -79.38, w: 0.4 },
  { name: "Detroit", lat: 42.33, lon: -83.05, w: 0.35 },
  { name: "Windsor", lat: 42.32, lon: -83.0, w: 0.3 },
];

const TRAVEL_ARCS = [
  ["Guntur", "Delhi"], ["Delhi", "Manali"], ["Guntur", "Naya Raipur"],
  ["Naya Raipur", "Thailand"], ["Guntur", "Louisville"], ["Louisville", "Athens, GA"],
  ["Athens, GA", "Hangzhou"], ["Athens, GA", "New York"], ["Athens, GA", "Colorado"],
  ["Athens, GA", "Toronto"], ["Toronto", "Detroit"],
];

function latLonToV3(lat, lon, r) {
  const phi = (90 - lat) * Math.PI / 180;
  const theta = (lon + 180) * Math.PI / 180;
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

function makeHeatTexture(color) {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const x = c.getContext("2d");
  const g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, color + "cc");
  g.addColorStop(0.4, color + "55");
  g.addColorStop(1, color + "00");
  x.fillStyle = g;
  x.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

// Load NASA earth texture, recolor into the site palette (green land / paper ocean)
function loadLandTexture(onReady) {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = () => {
    try {
      const W = 1024, H = 512;
      const c = document.createElement("canvas");
      c.width = W; c.height = H;
      const x = c.getContext("2d");
      x.drawImage(img, 0, 0, W, H);
      const d = x.getImageData(0, 0, W, H);
      const px = d.data;
      for (let i = 0; i < px.length; i += 4) {
        const r = px[i], g = px[i + 1], b = px[i + 2];
        const ocean = b > r + 12 && b > g + 5;
        if (ocean) { px[i] = 240; px[i + 1] = 247; px[i + 2] = 241; }
        else {
          // land: shade by brightness for relief
          const lum = (r + g + b) / (3 * 255);
          px[i] = 110 + lum * 60;
          px[i + 1] = 165 + lum * 40;
          px[i + 2] = 122 + lum * 45;
        }
      }
      x.putImageData(d, 0, 0);
      const tex = new THREE.CanvasTexture(c);
      tex.colorSpace = THREE.SRGBColorSpace;
      onReady(tex);
    } catch (e) { /* keep fallback */ }
  };
  img.src = "https://unpkg.com/three-globe@2.31.0/example/img/earth-day.jpg";
}

function buildGlobeScene(ctx) {
  const { scene, camera, el } = ctx;
  camera.position.set(0, 0.5, 3.6);
  camera.lookAt(0, 0, 0);

  scene.add(new THREE.HemisphereLight(0xffffff, 0xd6e8d8, 1.25));
  const dir = new THREE.DirectionalLight(0xffffff, 0.7);
  dir.position.set(3, 4, 5);
  scene.add(dir);

  const R = 1.32;
  const globe = new THREE.Group();
  scene.add(globe);

  const sphereMat = new THREE.MeshStandardMaterial({ color: 0xf0f7f1, roughness: 0.85 });
  globe.add(new THREE.Mesh(new THREE.SphereGeometry(R, 56, 56), sphereMat));
  loadLandTexture((tex) => {
    sphereMat.map = tex;
    sphereMat.color.set(0xffffff);
    sphereMat.needsUpdate = true;
  });

  const halo = new THREE.Mesh(
    new THREE.SphereGeometry(R * 1.06, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0xcde7d2, transparent: true, opacity: 0.25, side: THREE.BackSide })
  );
  scene.add(halo);

  // subtle graticule
  const gratMat = new THREE.LineBasicMaterial({ color: 0xb3cdba, transparent: true, opacity: 0.3 });
  const gratPts = [];
  for (let lat = -60; lat <= 60; lat += 30) {
    const r2 = R * Math.cos(lat * Math.PI / 180), y = R * Math.sin(lat * Math.PI / 180);
    for (let a = 0; a < 360; a += 6) {
      const a1 = a * Math.PI / 180, a2 = (a + 6) * Math.PI / 180;
      gratPts.push(Math.cos(a1) * r2, y, Math.sin(a1) * r2, Math.cos(a2) * r2, y, Math.sin(a2) * r2);
    }
  }
  const gratGeo = new THREE.BufferGeometry();
  gratGeo.setAttribute("position", new THREE.Float32BufferAttribute(gratPts, 3));
  globe.add(new THREE.LineSegments(gratGeo, gratMat));

  // heat glows + markers
  const heatGreen = makeHeatTexture("#2e8f5b");
  const heatAmber = makeHeatTexture("#e0a23c");
  const markerMat = new THREE.MeshBasicMaterial({ color: 0x1d7547 });
  const homeMat = new THREE.MeshBasicMaterial({ color: 0xe0832c });
  const rings = [];
  const byName = {};
  VISITED_PLACES.forEach((p) => {
    const pos = latLonToV3(p.lat, p.lon, R);
    byName[p.name] = pos;
    const spr = new THREE.Sprite(new THREE.SpriteMaterial({
      map: p.w > 0.6 ? heatAmber : heatGreen, transparent: true, depthWrite: false,
    }));
    const s = 0.22 + p.w * 0.55;
    spr.scale.set(s, s, 1);
    spr.position.copy(latLonToV3(p.lat, p.lon, R * 1.01));
    globe.add(spr);
    const dot = new THREE.Mesh(
      new THREE.SphereGeometry(p.current ? 0.035 : 0.022, 10, 10),
      p.home ? homeMat : markerMat
    );
    dot.position.copy(latLonToV3(p.lat, p.lon, R * 1.012));
    globe.add(dot);
    if (p.current || p.home) {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(0.05, 0.058, 32),
        new THREE.MeshBasicMaterial({ color: p.current ? 0x1d7547 : 0xe0832c, transparent: true, opacity: 0.9, side: THREE.DoubleSide })
      );
      ring.position.copy(latLonToV3(p.lat, p.lon, R * 1.015));
      ring.lookAt(0, 0, 0);
      globe.add(ring);
      rings.push(ring);
    }
  });

  const arcMat = new THREE.LineBasicMaterial({ color: 0x2e8f5b, transparent: true, opacity: 0.35 });
  TRAVEL_ARCS.forEach(([a, b]) => {
    const pa = byName[a], pb = byName[b];
    if (!pa || !pb) return;
    const mid = pa.clone().add(pb).multiplyScalar(0.5).normalize().multiplyScalar(R * (1.12 + pa.distanceTo(pb) * 0.16));
    const curve = new THREE.QuadraticBezierCurve3(pa.clone().multiplyScalar(1.005), mid, pb.clone().multiplyScalar(1.005));
    const g = new THREE.BufferGeometry().setFromPoints(curve.getPoints(36));
    globe.add(new THREE.Line(g, arcMat));
  });

  // drag to rotate
  let dragging = false, px = 0, py = 0;
  let velY = 0.0, rotX = 0.35, targetRotX = 0.35;
  const onDown = (e) => { dragging = true; px = e.clientX; py = e.clientY; };
  const onUp = () => { dragging = false; };
  const onDrag = (e) => {
    if (!dragging) return;
    velY = (e.clientX - px) * 0.005;
    targetRotX = Math.max(-0.9, Math.min(0.9, targetRotX + (e.clientY - py) * 0.003));
    px = e.clientX; py = e.clientY;
  };
  el.addEventListener("pointerdown", onDown);
  window.addEventListener("pointerup", onUp);
  el.addEventListener("pointermove", onDrag);
  el.style.cursor = "grab";

  globe.rotation.y = 2.62;

  return {
    update(t) {
      if (!dragging) velY *= 0.95;
      globe.rotation.y += velY + (dragging ? 0 : 0.0018);
      rotX += (targetRotX - rotX) * 0.08;
      globe.rotation.x = rotX;
      halo.rotation.copy(globe.rotation);
      rings.forEach((r, i) => {
        const ph = (t * 0.7 + i * 0.5) % 1;
        r.scale.setScalar(1 + ph * 1.6);
        r.material.opacity = 0.9 * (1 - ph);
      });
    },
    dispose() {
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointermove", onDrag);
      scene.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material && o.material.dispose) o.material.dispose();
      });
      heatGreen.dispose(); heatAmber.dispose();
    },
  };
}

Object.assign(window, { buildGlobeScene, VISITED_PLACES });
