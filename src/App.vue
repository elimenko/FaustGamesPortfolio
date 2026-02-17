<script setup>
const primaryProject = {
  title: 'Void Rift',
  genre: 'Action RPG',
  year: '2025',
  desc: 'A dark sci-fi action RPG set in a fractured dimension where reality bends to the player\'s will. Built from the ground up with custom shaders, procedural world generation, and a narrative system that adapts to player choices.',
  tags: ['Unity', 'C#', 'Shader Graph', 'Procedural Gen'],
}

const secondaryProjects = [
  {
    title: 'Iron Circuit',
    genre: 'Strategy',
    year: '2024',
    desc: 'Tactical mech combat on procedurally generated arenas with deep customization systems.',
    tags: ['Unreal Engine', 'C++', 'Blueprints'],
  },
  {
    title: 'Ember Trails',
    genre: 'Platformer',
    year: '2023',
    desc: 'A hand-painted 2D platformer about a fire spirit navigating a dying world.',
    tags: ['Godot', 'GDScript', 'Pixel Art'],
  },
]

const minorProjects = [
  {
    title: 'Neon Abyss Protocol',
    genre: 'Roguelike',
    year: '2023',
    tags: ['Unity', 'C#'],
  },
  {
    title: 'Hex Frontier',
    genre: 'Turn-Based Strategy',
    year: '2022',
    tags: ['Godot', 'GDScript'],
  },
  {
    title: 'Pulse',
    genre: 'Rhythm / Arcade',
    year: '2021',
    tags: ['Unity', 'C#'],
  },
]
</script>

<template>
  <div class="app-shell">
    <!-- ─── TOP NAV ─── -->
    <nav class="nav">
      <div class="nav-brand">
        <span class="brand-icon">◆</span>
        <span class="brand-text">FAUST GAMES</span>
      </div>
      <div class="nav-links">
        <a href="#" class="nav-link active">Portfolio</a>
        <a href="#" class="nav-link">About</a>
        <a href="#" class="nav-link">Skills</a>
        <a href="#" class="nav-link">Contact</a>
      </div>
    </nav>

    <!-- ─── HERO / INTRO ─── -->
    <section class="hero">
      <div class="hero-glow"></div>
      <div class="hero-inner">
        <div class="hero-text">
          <h1 class="hero-title">Faust Games</h1>
          <p class="hero-subtitle">
            I'm <span class="hero-name">Egor</span>, aka <span class="hero-name">Faust</span> —
            a game developer who turns caffeine and creative obsession into
            interactive worlds. I design, build, and ship games that stick with
            you long after the screen goes dark.
          </p>
          <p class="hero-flavor">Gamer with a burning passion</p>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">10<span class="stat-plus">+</span></span>
              <span class="stat-bar"></span>
              <span class="stat-label">Years of Software Engineering</span>
            </div>
            <div class="stat">
              <span class="stat-number">4<span class="stat-plus">+</span></span>
              <span class="stat-bar"></span>
              <span class="stat-label">Years of Software Architecture</span>
            </div>
            <div class="stat">
              <span class="stat-number">3<span class="stat-plus">+</span></span>
              <span class="stat-bar"></span>
              <span class="stat-label">Years of Game Dev & Design in UE</span>
            </div>
          </div>
        </div>
        <div class="hero-photo">
          <div class="photo-placeholder">
            <span class="photo-initials">EF</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── PROJECTS ─── -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">Projects</h2>
      </div>

      <!-- Primary project — full width -->
      <article class="card card-primary">
        <div class="card-thumb card-thumb--lg">
          <div class="thumb-placeholder"><span class="thumb-icon">🎮</span></div>
          <span class="card-badge">★ Primary</span>
        </div>
        <div class="card-body card-body--lg">
          <div class="card-top">
            <h3 class="card-title card-title--lg">{{ primaryProject.title }}</h3>
            <span class="card-year">{{ primaryProject.year }}</span>
          </div>
          <p class="card-genre">{{ primaryProject.genre }}</p>
          <p class="card-desc card-desc--lg">{{ primaryProject.desc }}</p>
          <div class="card-tags">
            <span v-for="tag in primaryProject.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <div class="card-actions">
            <button class="btn btn-primary">View Project</button>
            <button class="btn btn-ghost">Watch Trailer</button>
          </div>
        </div>
      </article>

      <!-- Secondary projects — two columns -->
      <div class="grid-secondary">
        <article
          v-for="project in secondaryProjects"
          :key="project.title"
          class="card"
        >
          <div class="card-thumb">
            <div class="thumb-placeholder"><span class="thumb-icon">🎮</span></div>
          </div>
          <div class="card-body">
            <div class="card-top">
              <h3 class="card-title">{{ project.title }}</h3>
              <span class="card-year">{{ project.year }}</span>
            </div>
            <p class="card-genre">{{ project.genre }}</p>
            <p class="card-desc">{{ project.desc }}</p>
            <div class="card-tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </article>
      </div>

      <!-- Minor projects -->
      <div class="minor-header">
        <span class="minor-label">Other Projects</span>
        <div class="minor-line"></div>
      </div>

      <div class="grid-minor">
        <article
          v-for="project in minorProjects"
          :key="project.title"
          class="card-minor"
        >
          <div class="minor-icon">◇</div>
          <div class="minor-body">
            <div class="minor-top">
              <h4 class="minor-title">{{ project.title }}</h4>
              <span class="minor-year">{{ project.year }}</span>
            </div>
            <p class="minor-genre">{{ project.genre }}</p>
          </div>
          <div class="minor-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag tag--sm">{{ tag }}</span>
          </div>
        </article>
      </div>
    </section>

    <!-- ─── SKILLS (placeholder) ─── -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">Skills & Experience</h2>
        <span class="section-note">Coming soon</span>
      </div>
      <div class="skills-placeholder">
        <p>Detailed breakdown of tools, engines, languages, and shipped titles — to be expanded.</p>
      </div>
    </section>

    <!-- ─── FOOTER ─── -->
    <footer class="footer">
      <span class="footer-text">© 2025 Faust Games · All rights reserved</span>
    </footer>
  </div>
</template>

<style scoped>
/* ───────── SHELL ───────── */
.app-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* ───────── NAV ───────── */
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 56px;
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border-subtle);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.brand-icon {
  color: var(--accent);
  font-size: 1rem;
}

.brand-text {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: var(--text-primary);
}

.nav-links {
  display: flex;
  gap: 0.25rem;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 500;
  padding: 0.4rem 0.85rem;
  border-radius: 4px;
  transition: color 0.15s, background 0.15s;
}

.nav-link:hover {
  color: var(--text-primary);
  background: var(--bg-hover);
}

.nav-link.active {
  color: var(--accent);
}

/* ───────── HERO ───────── */
.hero {
  position: relative;
  min-height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  background: linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-root) 100%);
  border-bottom: 1px solid var(--border-subtle);
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 60% 70% at 75% 50%, rgba(79, 195, 247, 0.04) 0%, transparent 70%);
  pointer-events: none;
}

.hero-inner {
  position: relative;
  display: flex;
  align-items: center;
  gap: 3rem;
  max-width: 900px;
  width: 100%;
}

.hero-text {
  flex: 1;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.1;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 480px;
}

.hero-name {
  color: var(--accent);
  font-weight: 600;
}

.hero-flavor {
  margin-top: 0.75rem;
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--warm);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.hero-flavor::before {
  content: '🔥';
  font-size: 0.9rem;
}

.hero-stats {
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1;
  letter-spacing: -0.03em;
}

.stat-plus {
  color: var(--accent);
}

.stat-bar {
  display: block;
  width: 32px;
  height: 2px;
  background: linear-gradient(90deg, var(--accent), transparent);
  border-radius: 1px;
}

.stat-label {
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--text-muted);
  line-height: 1.35;
  max-width: 130px;
}

.hero-photo {
  flex-shrink: 0;
}

.photo-placeholder {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-elevated) 100%);
  border: 2px solid var(--border-default);
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo-initials {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-muted);
  letter-spacing: 0.05em;
}

/* ───────── SECTIONS ───────── */
.section {
  padding: 3rem 2rem;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
}

.section-header {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 1.75rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.01em;
}

.section-note {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-style: italic;
}

/* ───────── BUTTONS ───────── */
.btn {
  font-family: inherit;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 0.55rem 1.3rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.15s;
  letter-spacing: 0.02em;
}

.btn-primary {
  background: var(--accent);
  color: #0e0e12;
}

.btn-primary:hover {
  background: var(--accent-hover);
}

.btn-ghost {
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border-default);
}

.btn-ghost:hover {
  color: var(--text-primary);
  border-color: var(--text-muted);
  background: var(--bg-hover);
}

/* ───────── CARD (shared) ───────── */
.card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 6px;
  overflow: hidden;
  transition: border-color 0.2s, transform 0.2s;
}

.card:hover {
  border-color: var(--border-default);
  transform: translateY(-2px);
}

.card-thumb {
  position: relative;
  height: 150px;
  background: linear-gradient(135deg, var(--bg-elevated) 0%, var(--bg-surface) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-thumb--lg {
  height: 220px;
}

.thumb-placeholder {
  opacity: 0.2;
}

.thumb-icon {
  font-size: 2.5rem;
}

.card-badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  font-size: 0.65rem;
  font-weight: 600;
  color: var(--accent);
  background: rgba(0, 0, 0, 0.65);
  padding: 0.25rem 0.6rem;
  border-radius: 3px;
  letter-spacing: 0.04em;
}

.card-body {
  padding: 1rem 1.25rem;
}

.card-body--lg {
  padding: 1.25rem 1.5rem 1.5rem;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.2rem;
}

.card-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
}

.card-title--lg {
  font-size: 1.35rem;
}

.card-year {
  font-size: 0.72rem;
  color: var(--text-muted);
  font-weight: 500;
}

.card-genre {
  font-size: 0.75rem;
  color: var(--accent);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.card-desc {
  font-size: 0.8rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.card-desc--lg {
  font-size: 0.88rem;
  margin-bottom: 1rem;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.tag {
  font-size: 0.68rem;
  font-weight: 500;
  color: var(--text-muted);
  background: var(--bg-elevated);
  padding: 0.2rem 0.55rem;
  border-radius: 3px;
  border: 1px solid var(--border-subtle);
}

.tag--sm {
  font-size: 0.62rem;
  padding: 0.15rem 0.45rem;
}

.card-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.25rem;
}

/* ───────── PRIMARY CARD ───────── */
.card-primary {
  border-color: rgba(79, 195, 247, 0.12);
  margin-bottom: 1rem;
}

.card-primary:hover {
  border-color: rgba(79, 195, 247, 0.25);
}

/* ───────── SECONDARY GRID ───────── */
.grid-secondary {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

/* ───────── MINOR PROJECTS ───────── */
.minor-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.minor-label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  white-space: nowrap;
}

.minor-line {
  flex: 1;
  height: 1px;
  background: var(--border-subtle);
}

.grid-minor {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card-minor {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 5px;
  transition: border-color 0.15s, background 0.15s;
}

.card-minor:hover {
  border-color: var(--border-default);
  background: var(--bg-elevated);
}

.minor-icon {
  color: var(--text-muted);
  font-size: 0.9rem;
  flex-shrink: 0;
  width: 1.25rem;
  text-align: center;
}

.minor-body {
  flex: 1;
  min-width: 0;
}

.minor-top {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.minor-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-primary);
}

.minor-year {
  font-size: 0.68rem;
  color: var(--text-muted);
}

.minor-genre {
  font-size: 0.72rem;
  color: var(--text-secondary);
}

.minor-tags {
  display: flex;
  gap: 0.3rem;
  flex-shrink: 0;
}

/* ───────── SKILLS PLACEHOLDER ───────── */
.skills-placeholder {
  padding: 2rem;
  background: var(--bg-card);
  border: 1px dashed var(--border-default);
  border-radius: 6px;
  text-align: center;
}

.skills-placeholder p {
  font-size: 0.85rem;
  color: var(--text-muted);
}

/* ───────── FOOTER ───────── */
.footer {
  margin-top: auto;
  padding: 2rem;
  border-top: 1px solid var(--border-subtle);
  text-align: center;
}

.footer-text {
  font-size: 0.75rem;
  color: var(--text-muted);
}
</style>
