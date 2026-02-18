<script setup>
import { ref } from 'vue'
import { projects, courses } from './data/projects.js'
import MediaCarousel from './components/MediaCarousel.vue'

const primaryProject = projects.find(p => p.tier === 'primary')
const secondaryProjects = projects.filter(p => p.tier === 'secondary')

const expandedProject = ref(null)

function toggleHighlights(id) {
  expandedProject.value = expandedProject.value === id ? null : id
}
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
          <img src="/media/main/avatar.jpg" alt="Egor — Faust" class="photo-avatar" />
        </div>
      </div>
    </section>

    <!-- ─── PROJECTS ─── -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">Projects</h2>
      </div>

      <!-- Primary project — full width, Steam-style layout -->
      <article class="card card-primary">
        <div class="card-media">
          <MediaCarousel :media="primaryProject.media" :project-id="primaryProject.id" />
        </div>
        <div class="card-body card-body--lg">
          <div class="card-top">
            <h3 class="card-title card-title--lg">{{ primaryProject.name }}</h3>
            <span class="card-hours">{{ primaryProject.timeSpent }} hrs</span>
          </div>
          <p class="card-genre">{{ primaryProject.genre }} · {{ primaryProject.perspective }}</p>
          <p class="card-desc card-desc--lg">{{ primaryProject.description }}</p>
          <p class="card-tech-detail">{{ primaryProject.techDetails }}</p>
          <div class="card-tags">
            <span v-for="tag in primaryProject.technologies" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <div v-if="primaryProject.frameworks.length" class="card-frameworks">
            <span v-for="fw in primaryProject.frameworks" :key="fw" class="tag tag--fw">{{ fw }}</span>
          </div>
          <button
            class="btn btn-ghost btn--expand"
            @click="toggleHighlights(primaryProject.id)"
          >
            {{ expandedProject === primaryProject.id ? '▾ Hide' : '▸ Show' }} Highlights ({{ primaryProject.highlights.length }})
          </button>
          <ul v-if="expandedProject === primaryProject.id" class="highlights-list">
            <li v-for="h in primaryProject.highlights" :key="h">{{ h }}</li>
          </ul>
        </div>
      </article>

      <!-- Secondary projects — two columns -->
      <div class="grid-secondary">
        <article
          v-for="project in secondaryProjects"
          :key="project.id"
          class="card"
        >
          <div class="card-media">
            <MediaCarousel :media="project.media" :project-id="project.id" />
          </div>
          <div class="card-body">
            <div class="card-top">
              <h3 class="card-title">{{ project.name }}</h3>
              <span class="card-hours">{{ project.timeSpent }} hrs</span>
            </div>
            <p class="card-genre">{{ project.genre }} · {{ project.perspective }}</p>
            <p class="card-desc">{{ project.description }}</p>
            <p class="card-tech-detail">{{ project.techDetails }}</p>
            <div class="card-tags">
              <span v-for="tag in project.technologies" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <button
              class="btn btn-ghost btn--expand"
              @click="toggleHighlights(project.id)"
            >
              {{ expandedProject === project.id ? '▾ Hide' : '▸ Show' }} Highlights ({{ project.highlights.length }})
            </button>
            <ul v-if="expandedProject === project.id" class="highlights-list">
              <li v-for="h in project.highlights" :key="h">{{ h }}</li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <!-- ─── COURSES ─── -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">Courses & Certifications</h2>
      </div>
      <template v-if="courses.length">
        <div class="grid-courses">
          <article v-for="course in courses" :key="course.id" class="course-card">
            <div class="course-header">
              <div class="course-header-text">
                <h4 class="course-title">{{ course.title }}</h4>
                <span class="course-author">{{ course.author }}</span>
              </div>
              <a
                v-if="course.certificateUrl"
                :href="course.certificateUrl"
                download
                class="udemy-badge"
                title="Download Udemy Certificate"
              >
                <img src="/media/main/udemy-logo.webp" alt="Udemy" class="udemy-icon" />
                <span class="udemy-label">Certificate</span>
              </a>
            </div>
            <p class="course-overview">{{ course.overview }}</p>
            <ul class="course-learned">
              <li v-for="item in course.learned" :key="item">{{ item }}</li>
            </ul>
            <div class="course-footer">
              <div class="course-tags">
                <span v-for="tag in course.tags" :key="tag" class="tag tag--sm">{{ tag }}</span>
              </div>
              <a v-if="course.githubUrl" :href="course.githubUrl" target="_blank" class="btn btn-ghost btn--sm">GitHub</a>
            </div>
          </article>
        </div>
      </template>
      <div v-else class="courses-placeholder">
        <p>Course projects with GitHub links and certificates — coming next.</p>
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

.photo-avatar {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  border: 2px solid var(--border-default);
  object-fit: cover;
  display: block;
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

.card-media {
  width: 100%;
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

.card-hours {
  font-size: 0.72rem;
  color: var(--text-muted);
  font-weight: 500;
  white-space: nowrap;
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

.card-tech-detail {
  font-size: 0.75rem;
  color: var(--text-muted);
  line-height: 1.55;
  margin-bottom: 0.75rem;
  font-style: italic;
}

.card-frameworks {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.5rem;
}

.tag--fw {
  border-color: rgba(79, 195, 247, 0.15);
  color: var(--text-secondary);
}

.btn--expand {
  margin-top: 1rem;
  font-size: 0.75rem;
  padding: 0.35rem 0.85rem;
}

.highlights-list {
  margin-top: 0.75rem;
  padding-left: 1.1rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.highlights-list li {
  font-size: 0.78rem;
  color: var(--text-secondary);
  line-height: 1.5;
  position: relative;
  padding-left: 0.8rem;
}

.highlights-list li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-size: 0.7rem;
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

/* ───────── COURSES ───────── */
.grid-courses {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.course-card {
  padding: 1.25rem 1.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 6px;
  transition: border-color 0.15s;
}

.course-card:hover {
  border-color: var(--border-default);
}

.course-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.course-header-text {
  flex: 1;
  min-width: 0;
}

.course-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.15rem;
}

.course-author {
  font-size: 0.72rem;
  color: var(--text-muted);
  font-weight: 500;
}

.udemy-badge {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.7rem;
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  text-decoration: none;
  flex-shrink: 0;
  transition: border-color 0.15s, background 0.15s;
}

.udemy-badge:hover {
  border-color: var(--border-default);
  background: var(--bg-hover);
}

.udemy-icon {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

.udemy-label {
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--text-secondary);
  white-space: nowrap;
}

.course-overview {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.course-learned {
  list-style: none;
  padding: 0;
  margin: 0 0 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.course-learned li {
  font-size: 0.75rem;
  color: var(--text-muted);
  line-height: 1.45;
  position: relative;
  padding-left: 0.85rem;
}

.course-learned li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-size: 0.65rem;
}

.course-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.course-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.btn--sm {
  font-size: 0.7rem;
  padding: 0.3rem 0.7rem;
  text-decoration: none;
}

.btn-subtle {
  background: var(--bg-elevated);
  color: var(--text-secondary);
  border: 1px solid var(--border-subtle);
}

.btn-subtle:hover {
  background: var(--bg-hover);
  color: var(--text-primary);
}

.courses-placeholder {
  padding: 2rem;
  background: var(--bg-card);
  border: 1px dashed var(--border-default);
  border-radius: 6px;
  text-align: center;
}

.courses-placeholder p {
  font-size: 0.85rem;
  color: var(--text-muted);
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
