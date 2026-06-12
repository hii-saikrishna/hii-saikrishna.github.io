// ===== Page sections =====

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

// ----- Home -----
function HomePage({ go }) {
  const shapes = ["dodeca", "ico", "torus", "torus2"];
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <Reveal>
                <div className="hero-eyebrow">
                  <span className="pulse"></span>
                  <span>Athens · Georgia · 2026</span>
                </div>
                <h1 className="hero-name">
                  Sai Krishna<br/>
                  <span className="italic">Ghanta</span>
                </h1>
                <p className="hero-role">
                  PhD Student in AI <span className="at">at</span> the University of Georgia
                </p>
                <p className="hero-bio">
                  I work on <em>multi-robot systems</em>, computer vision, and autonomous navigation. My research builds frameworks where many robots can map, localize, and reason about complex indoor environments together — even when GPS, structured sensing, and clean communication all fail at once.
                </p>
                <p className="hero-bio">
                  Currently with <em>Dr. Ramviyas Parasuraman</em> at the HeRoLab. Previously: Samsung R&amp;D, Louisville Automation &amp; Robotics Research Institute, and IIIT Naya Raipur.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-primary" href={PROFILE.scholar} target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    Google Scholar
                  </a>
                  <a className="btn" href={PROFILE.github} target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0112 6.8c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.16.58.67.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z"/></svg>
                    GitHub
                  </a>
                  <a className="btn" href={PROFILE.linkedin} target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.7 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.18c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.37 1.6-2.37 3.26V22H7.92V8z"/></svg>
                    LinkedIn
                  </a>
                  <button className="btn" onClick={() => go("blog")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z"/><path d="M4 9h16M9 4v16"/></svg>
                    Read the blog
                  </button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <div className="hero-canvas-wrap">
                <div className="hero-canvas-frame">
                  <div className="hero-canvas-tag"><span className="dot"></span>cooperative graph · n=22</div>
                  <ThreeScene build={buildHeroScene} className="hero-canvas" />
                  <div className="hero-canvas-meta">
                    <span>HeRoLab // multi-robot net</span>
                    <span>04:32:18 UTC</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RESEARCH INTERESTS */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <div className="section-eyebrow">01 · Interests</div>
                <h2 className="section-title">Four threads I'm <span className="italic">pulling</span> on</h2>
              </div>
              <p className="section-sub">My work sits at the intersection of distributed systems, perception, and probabilistic ML — built for robots that have to keep going when their environment doesn't cooperate.</p>
            </div>
          </Reveal>
          <div className="interest-grid">
            {INTERESTS.map((it, i) => (
              <Reveal key={it.id} delay={i * 80}>
                <div className="interest-card">
                  <div className="glyph-wrap">
                    <ThreeScene build={buildRotatingShape(shapes[i])} />
                  </div>
                  <h3>{it.title}</h3>
                  <p>{it.desc}</p>
                  <div className="topics">
                    {it.topics.map(t => <span key={t} className="topic">{t}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH THRUSTS */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <div className="section-eyebrow">02 · Research Thrusts</div>
                <h2 className="section-title">What I'm actively <span className="italic">building</span></h2>
              </div>
              <button className="btn" onClick={() => go("research")}>
                See all
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </button>
            </div>
          </Reveal>
          {THRUSTS.slice(0, 2).map((t, i) => (
            <Reveal key={t.num} delay={i * 100}>
              <div className="thrust">
                <div className="thrust-media">
                  <img src={t.img} alt={t.title} loading="lazy" />
                  <span className="stamp">{t.num}</span>
                </div>
                <div className="thrust-body">
                  <div className="num">{t.num} — Research thrust</div>
                  <h3>{t.title}</h3>
                  <p>{t.body}</p>
                  <div className="thrust-keywords">
                    {t.keywords.map(k => <span key={k} className="thrust-keyword">{k}</span>)}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* RECENT UPDATES PREVIEW */}
      <section className="section alt">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <div className="section-eyebrow">03 · Recent</div>
                <h2 className="section-title">News &amp; <span className="italic">updates</span></h2>
              </div>
              <button className="btn" onClick={() => go("updates")}>
                Full archive
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </button>
            </div>
          </Reveal>
          <div className="updates" style={{ maxWidth: 760 }}>
            {UPDATES.slice(0, 5).map((u, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className={`update ${u.fresh ? "fresh" : ""}`}>
                  <div className="update-date">{u.date}</div>
                  <p className="update-title">
                    <span className="update-tag">{u.tag}</span>{u.title}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ----- Research page (full) -----
function ResearchPage() {
  return (
    <section className="section no-border">
      <div className="container">
        <Reveal>
          <div className="section-head" style={{ alignItems: "start" }}>
            <div>
              <div className="section-eyebrow">Research</div>
              <h2 className="section-title">Robots that <span className="italic">think</span>, together</h2>
              <p className="section-sub">My research advances multi-robot systems, computer vision, and probabilistic ML for autonomous navigation and cooperative exploration in environments where structure breaks down.</p>
            </div>
          </div>
        </Reveal>

        {THRUSTS.map((t, i) => (
          <Reveal key={t.num} delay={i * 80}>
            <div className="thrust">
              <div className="thrust-media">
                <img src={t.img} alt={t.title} loading="lazy" />
                <span className="stamp">{t.num}</span>
              </div>
              <div className="thrust-body">
                <div className="num">{t.num} — Research thrust</div>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
                <div className="thrust-keywords">
                  {t.keywords.map(k => <span key={k} className="thrust-keyword">{k}</span>)}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ----- Publications -----
function PublicationsPage() {
  const [tab, setTab] = React.useState("all");
  const filtered = PUBLICATIONS.filter(p => {
    if (tab === "all") return true;
    return p.kind === tab;
  });
  return (
    <section className="section no-border">
      <div className="container">
        <Reveal>
          <div className="section-head" style={{ alignItems: "start" }}>
            <div>
              <div className="section-eyebrow">Publications</div>
              <h2 className="section-title">Selected <span className="italic">writing</span></h2>
              <p className="section-sub">Peer-reviewed work and preprints. Names with a star mark first / co-first authorship.</p>
            </div>
            <div className="tab-bar">
              {[
                { id: "all", label: "All" },
                { id: "conference", label: "Conference" },
                { id: "journal", label: "Journal" },
                { id: "submitted", label: "Submitted" },
              ].map(t => (
                <button key={t.id} className={tab === t.id ? "active" : ""} onClick={() => setTab(t.id)}>{t.label}</button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="pubs-list">
          {filtered.map((p, i) => (
            <Reveal key={i} delay={i * 30}>
              <div className="pub">
                <div className="pub-year">{p.year}</div>
                <div>
                  <h4>{p.title}</h4>
                  <p className="pub-authors">
                    {p.authors.map((a, idx) => {
                      const isMe = a.toLowerCase().includes("sai krishna");
                      return (
                        <React.Fragment key={idx}>
                          {idx > 0 && ", "}
                          <span className={isMe ? "me" : ""}>{a}</span>
                        </React.Fragment>
                      );
                    })}
                  </p>
                  <div className="pub-venue">{p.venue}</div>
                </div>
                <div className="pub-actions">
                  {p.featured && <span className="pub-chip featured">Featured</span>}
                  <span className="pub-chip">{p.kind}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 36 }}>
          <a className="btn btn-primary" href={PROFILE.scholar} target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            View on Google Scholar
          </a>
        </div>
      </div>
    </section>
  );
}

// ----- Updates archive -----
function UpdatesPage() {
  return (
    <section className="section no-border">
      <div className="container-narrow">
        <Reveal>
          <div className="section-head" style={{ alignItems: "start" }}>
            <div>
              <div className="section-eyebrow">Updates Archive</div>
              <h2 className="section-title">Milestones &amp; <span className="italic">news</span></h2>
              <p className="section-sub">Conferences, awards, releases — chronological, most recent first.</p>
            </div>
          </div>
        </Reveal>
        <div className="updates">
          {UPDATES.map((u, i) => (
            <Reveal key={i} delay={i * 30}>
              <div className={`update ${u.fresh ? "fresh" : ""}`}>
                <div className="update-date">{u.date}</div>
                <p className="update-title">
                  <span className="update-tag">{u.tag}</span>{u.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----- CV page -----
function CVPage() {
  return (
    <section className="section no-border">
      <div className="container">
        <Reveal>
          <div className="section-head" style={{ alignItems: "start" }}>
            <div>
              <div className="section-eyebrow">Curriculum Vitae</div>
              <h2 className="section-title">Education &amp; <span className="italic">experience</span></h2>
              <p className="section-sub">A short version. The full PDF is one click away.</p>
            </div>
            <a className="btn btn-primary" href={PROFILE.cv} target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"/></svg>
              Download CV
            </a>
          </div>
        </Reveal>

        <Reveal>
          <h3 style={{ fontFamily: "var(--serif)", fontSize: 28, margin: "30px 0 12px", fontWeight: 400, letterSpacing: "-0.015em" }}>Education</h3>
        </Reveal>
        {EDUCATION.map((e, i) => (
          <Reveal key={i} delay={i * 60}>
            <div className="cv-row">
              <div className="cv-date">{e.range}</div>
              <div>
                <h4 className="cv-role">{e.role}</h4>
                <div className="cv-org">{e.org}</div>
                <p className="cv-desc">{e.desc}</p>
                <div className="cv-stats">
                  {e.stats.map((s, j) => <span key={j} className="cv-stat">{s.k} <strong>{s.v}</strong></span>)}
                </div>
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal>
          <h3 style={{ fontFamily: "var(--serif)", fontSize: 28, margin: "44px 0 12px", fontWeight: 400, letterSpacing: "-0.015em" }}>Research experience</h3>
        </Reveal>
        {EXPERIENCE.map((e, i) => (
          <Reveal key={i} delay={i * 60}>
            <div className="cv-row">
              <div className="cv-date">{e.range}</div>
              <div>
                <h4 className="cv-role">{e.role}</h4>
                <div className="cv-org">{e.org}</div>
                {e.advisor && <div style={{ fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--ink-3)", letterSpacing: "0.04em", marginBottom: 8, textTransform: "uppercase" }}>Advisor — {e.advisor}</div>}
                <p className="cv-desc">{e.desc}</p>
                <div className="cv-stats">
                  {e.stats && e.stats.map((s, j) => <span key={j} className="cv-stat">{s.k} <strong>{s.v}</strong></span>)}
                </div>
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal>
          <h3 style={{ fontFamily: "var(--serif)", fontSize: 28, margin: "44px 0 12px", fontWeight: 400, letterSpacing: "-0.015em" }}>Technical skills</h3>
        </Reveal>
        <div className="skills-grid">
          {SKILLS.map((g, i) => (
            <Reveal key={g.group} delay={i * 60}>
              <div className="skill-group">
                <h4>{g.group}</h4>
                <div className="skill-chips">
                  {g.chips.map(c => <span key={c} className="skill-chip">{c}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----- Contact -----
function ContactPage() {
  return (
    <section className="section no-border">
      <div className="container">
        <Reveal>
          <div className="section-head" style={{ alignItems: "start", marginBottom: 28 }}>
            <div>
              <div className="section-eyebrow">Contact</div>
              <h2 className="section-title">Let's <span className="italic">talk</span></h2>
            </div>
          </div>
        </Reveal>
        <div className="contact-grid">
          <Reveal>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--ink-2)", margin: 0 }}>
              I'm always happy to talk about <em style={{ fontFamily: "var(--serif)", color: "var(--accent-ink)", fontSize: "1.05em" }}>cooperative robotics</em>, embodied reasoning, or PhD applications. Email is the fastest way to reach me. I read everything; I reply within a week.
            </p>
            <p style={{ fontSize: 14.5, color: "var(--ink-3)", marginTop: 16, lineHeight: 1.6 }}>
              Office hours by appointment at HeRoLab, School of Computing, UGA. If you're a prospective student, please mention which paper of mine you read in the subject line.
            </p>
            <div className="contact-links">
              <a className="contact-link" href={`mailto:${PROFILE.email}`}>
                <span><span className="label">Email</span>{PROFILE.email}</span>
                <span className="arrow">→</span>
              </a>
              <a className="contact-link" href={PROFILE.scholar} target="_blank" rel="noopener">
                <span><span className="label">Scholar</span>Google Scholar profile</span>
                <span className="arrow">↗</span>
              </a>
              <a className="contact-link" href={PROFILE.github} target="_blank" rel="noopener">
                <span><span className="label">Code</span>github.com/sai-krishna-ghanta</span>
                <span className="arrow">↗</span>
              </a>
              <a className="contact-link" href={PROFILE.linkedin} target="_blank" rel="noopener">
                <span><span className="label">LinkedIn</span>sai-krishna-ghanta</span>
                <span className="arrow">↗</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div style={{ position: "relative", aspectRatio: "1/1", border: "1px solid var(--line)", borderRadius: 20, overflow: "hidden", background: "var(--bg-soft)" }}>
              <div style={{ position: "absolute", inset: 0 }}>
                <ThreeScene build={buildRotatingShape("torus")} />
              </div>
              <div style={{ position: "absolute", top: 14, left: 14, fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--accent-ink)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: 999, background: "var(--accent)", marginRight: 6, verticalAlign: "middle" }}></span>
                Currently in Athens · GA
              </div>
              <div style={{ position: "absolute", bottom: 14, left: 14, right: 14, display: "flex", justifyContent: "space-between", fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--ink-4)" }}>
                <span>33.95° N, 83.37° W</span>
                <span>UTC−05:00</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  Reveal, HomePage, ResearchPage, PublicationsPage, UpdatesPage, CVPage, ContactPage,
});
