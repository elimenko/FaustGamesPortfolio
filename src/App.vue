<script setup>
import { ref } from 'vue'
import { projects, courses, skills, skillLevels } from './data/projects.js'
import MediaCarousel from './components/MediaCarousel.vue'
import { useScrollReveal } from './composables/useScrollReveal.js'

const appShell = ref(null)
const primaryProject = projects.find(p => p.tier === 'primary')
const secondaryProjects = projects.filter(p => p.tier === 'secondary')

const expandedProject = ref(null)

function toggleHighlights(id) {
  expandedProject.value = expandedProject.value === id ? null : id
}

useScrollReveal(appShell)
</script>

<template>
  <div ref="appShell" class="app-shell">
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
            Hi, I'm <span class="hero-name">Egor</span> — aka <span class="hero-name">Faust</span>.
            Software Engineer, Team Lead, and Software Architect with over a decade of
            enterprise experience. I also have a burning passion for game development and gaming,
            spending the last 3 years learning game design, mastering Unreal Engine 5,
            and building my own projects.
          </p>
          <ul class="hero-bullets">
            <li>10+ years building and shipping production software across enterprise domains</li>
            <li>Led and architected cross-functional engineering teams and complex systems</li>
            <li>3+ years deep in Unreal Engine 5 — C++, multiplayer, GAS, and beyond</li>
            <li>Driven by a genuine passion for games: designing, building, and playing them</li>
          </ul>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">10<span class="stat-plus">+</span></span>
              <span class="stat-bar"></span>
              <span class="stat-label">Years of Commercial Software Engineering</span>
            </div>
            <div class="stat">
              <span class="stat-number">4<span class="stat-plus">+</span></span>
              <span class="stat-bar"></span>
              <span class="stat-label">Years of Commercial Software Architecture</span>
            </div>
            <div class="stat">
              <span class="stat-number">3<span class="stat-plus">+</span></span>
              <span class="stat-bar"></span>
              <span class="stat-label">Years of Game Dev & Design in UE5</span>
            </div>
          </div>
        </div>
        <div class="hero-photo">
          <img src="/media/main/avatar.jpg" alt="Egor — Faust" class="photo-avatar" />
        </div>
      </div>
    </section>

    <!-- ─── PRIMARY PROJECT ─── -->
    <section class="section section--wide reveal reveal--right">
      <div class="section-header">
        <h2 class="section-title">Featured Project</h2>
      </div>

      <article class="card card-primary card-primary--split">
        <div class="card-media card-media--split">
          <MediaCarousel :media="primaryProject.media" :project-id="primaryProject.id" />
        </div>
        <div class="card-body card-body--lg card-body--split">
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
    </section>

    <!-- ─── SECONDARY PROJECTS ─── -->
    <section class="section section--wide reveal reveal--up">
      <div class="section-header section-header--center">
        <h2 class="section-title">More Projects</h2>
      </div>
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
    <section class="section section--wide reveal reveal--left">
      <div class="section-header">
        <h2 class="section-title">Courses & Certifications</h2>
      </div>
      <template v-if="courses.length">
        <div class="grid-courses">
          <article v-for="(course, idx) in courses" :key="course.id" class="course-card reveal reveal--up" :style="{ transitionDelay: (idx * 0.08) + 's' }">
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

    <!-- ─── SKILLS ─── -->
    <section class="section section--wide reveal reveal--right">
      <div class="section-header section-header--center">
        <h2 class="section-title">Skills & Proficiency</h2>
      </div>
      <div class="skills-grid">
        <div v-for="group in skills" :key="group.category" class="skill-group">
          <h3 class="skill-category">{{ group.category }}</h3>
          <div class="skill-list">
            <div v-for="skill in group.items" :key="skill.name" class="skill-row">
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-note">{{ skill.note }}</span>
              </div>
              <div class="skill-meter">
                <div class="skill-track">
                  <div
                    class="skill-fill"
                    :class="'skill-fill--' + skill.level"
                    :style="{ width: (skill.level / 4 * 100) + '%' }"
                  ></div>
                </div>
                <span class="skill-label" :class="'skill-label--' + skill.level">
                  {{ skillLevels[skill.level] }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── FOOTER ─── -->
    <footer class="footer reveal reveal--up">
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
  text-shadow: 0 0 8px var(--accent);
}

.brand-text {
  font-family: var(--font-pixel);
  font-size: 0.55rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  color: var(--accent);
  text-shadow: 0 0 10px var(--accent-dim);
}

.nav-links {
  display: flex;
  gap: 0.25rem;
}

.nav-link {
  font-family: var(--font-mono);
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 400;
  padding: 0.4rem 0.85rem;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: color 0.15s, background 0.15s;
}

.nav-link:hover {
  color: var(--text-primary);
  background: var(--bg-hover);
}

.nav-link.active {
  color: var(--accent);
  text-shadow: 0 0 8px var(--accent-dim);
}

/* ───────── HERO ───────── */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 3rem;
  background: linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-root) 100%);
  border-bottom: 1px solid var(--border-subtle);
  overflow: hidden;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  background:
    linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px) 0 0 / 40px 40px,
    linear-gradient(0deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px) 0 0 / 40px 40px;
  mask-image: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
  -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
  pointer-events: none;
}

.hero-glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 50% 60% at 75% 50%, rgba(0, 240, 255, 0.04) 0%, transparent 70%),
    radial-gradient(ellipse 40% 50% at 25% 60%, rgba(255, 45, 149, 0.03) 0%, transparent 70%);
  pointer-events: none;
}

.hero-inner {
  position: relative;
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1100px;
  width: 100%;
}

.hero-text {
  flex: 1;
}

.hero-title {
  font-family: var(--font-pixel);
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 1.3;
  color: var(--text-primary);
  letter-spacing: 0.02em;
  margin-bottom: 1.25rem;
  text-shadow: 0 0 20px var(--accent-dim), 0 0 40px rgba(0, 240, 255, 0.05);
}

.hero-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.75;
  max-width: 540px;
}

.hero-name {
  color: var(--accent);
  font-weight: 600;
  text-shadow: 0 0 8px var(--accent-dim);
}

.hero-bullets {
  list-style: none;
  padding: 0;
  margin: 1.25rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  max-width: 540px;
}

.hero-bullets li {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.55;
  padding-left: 1rem;
  position: relative;
}

.hero-bullets li::before {
  content: '>';
  font-family: var(--font-pixel);
  position: absolute;
  left: 0;
  color: var(--accent);
  font-size: 0.5rem;
  top: 0.3em;
  text-shadow: 0 0 6px var(--accent-dim);
}

.hero-stats {
  display: flex;
  gap: 2.5rem;
  margin-top: 2rem;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.stat-number {
  font-family: var(--font-pixel);
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--text-primary);
  line-height: 1;
  letter-spacing: 0;
  text-shadow: 0 0 12px var(--accent-dim);
}

.stat-plus {
  color: var(--accent);
  text-shadow: 0 0 8px var(--accent);
}

.stat-bar {
  display: block;
  width: 32px;
  height: 2px;
  background: linear-gradient(90deg, var(--accent), transparent);
  border-radius: 1px;
  box-shadow: 0 0 6px var(--accent-dim);
}

.stat-label {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 400;
  color: var(--text-muted);
  line-height: 1.4;
  max-width: 150px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.hero-photo {
  flex-shrink: 0;
}

.photo-avatar {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  border: 2px solid rgba(0, 240, 255, 0.2);
  object-fit: cover;
  display: block;
  box-shadow: 0 0 30px rgba(0, 240, 255, 0.08), 0 0 60px rgba(255, 45, 149, 0.04);
}

/* ───────── SECTIONS ───────── */
.section {
  padding: 5rem 3rem;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}

.section--wide {
  max-width: 1200px;
}

.section-header {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.section-header--center {
  justify-content: center;
}

.section-title {
  font-family: var(--font-pixel);
  font-size: 0.95rem;
  font-weight: 400;
  color: var(--text-primary);
  letter-spacing: 0.04em;
  text-shadow: 0 0 14px var(--accent-dim);
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
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
}

.card-title--lg {
  font-family: var(--font-pixel);
  font-size: 0.95rem;
  font-weight: 400;
  text-shadow: 0 0 10px var(--accent-dim);
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
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-bottom: 0.85rem;
}

.card-desc--lg {
  font-size: 0.95rem;
  margin-bottom: 1.25rem;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.tag {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  font-weight: 400;
  color: var(--text-muted);
  background: var(--bg-elevated);
  padding: 0.2rem 0.55rem;
  border-radius: 3px;
  border: 1px solid var(--border-subtle);
  text-transform: uppercase;
  letter-spacing: 0.04em;
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
  border-color: rgba(180, 77, 255, 0.15);
  color: var(--neon-purple);
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
  content: '>';
  font-family: var(--font-pixel);
  position: absolute;
  left: 0;
  color: var(--accent);
  font-size: 0.4rem;
  top: 0.25em;
  text-shadow: 0 0 4px var(--accent-dim);
}

/* ───────── PRIMARY CARD (split layout) ───────── */
.card-primary {
  border-color: rgba(0, 240, 255, 0.1);
  margin-bottom: 1rem;
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.03);
}

.card-primary--split {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  overflow: hidden;
}

.card-media--split {
  min-height: 100%;
}

.card-body--split {
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-primary:hover {
  border-color: rgba(0, 240, 255, 0.25);
  box-shadow: 0 0 30px rgba(0, 240, 255, 0.06);
}

/* ───────── SECONDARY GRID ───────── */
.grid-secondary {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

/* ───────── COURSES ───────── */
.grid-courses {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.course-card {
  padding: 1.5rem 2rem;
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
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.2rem;
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
  font-size: 0.9rem;
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
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.45;
  position: relative;
  padding-left: 0.85rem;
}

.course-learned li::before {
  content: '>';
  font-family: var(--font-pixel);
  position: absolute;
  left: 0;
  color: var(--accent);
  font-size: 0.4rem;
  top: 0.2em;
  text-shadow: 0 0 4px var(--accent-dim);
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

/* ───────── SKILLS ───────── */
.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.skill-group {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 6px;
  padding: 1.5rem 2rem;
}

.skill-category {
  font-family: var(--font-pixel);
  font-size: 0.5rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--neon-purple);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-subtle);
  text-shadow: 0 0 8px var(--neon-purple-dim);
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.skill-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.skill-info {
  flex: 1;
  min-width: 0;
}

.skill-name {
  display: block;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
}

.skill-note {
  display: block;
  font-size: 0.72rem;
  color: var(--text-muted);
  line-height: 1.4;
  margin-top: 0.1rem;
}

.skill-meter {
  flex-shrink: 0;
  width: 130px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.3rem;
}

.skill-track {
  width: 100%;
  height: 4px;
  background: var(--bg-elevated);
  border-radius: 2px;
  overflow: hidden;
}

.skill-fill {
  height: 100%;
  border-radius: 2px;
  transition: width 0.4s ease;
}

.skill-fill--1 {
  background: var(--text-muted);
}

.skill-fill--2 {
  background: linear-gradient(90deg, var(--accent-dim), var(--accent));
  box-shadow: 0 0 6px var(--accent-dim);
}

.skill-fill--3 {
  background: linear-gradient(90deg, var(--accent), var(--accent-hover));
  box-shadow: 0 0 8px var(--accent-dim);
}

.skill-fill--4 {
  background: linear-gradient(90deg, var(--warm), #ff6eb4);
  box-shadow: 0 0 8px var(--warm-dim);
}

.skill-label {
  font-family: var(--font-mono);
  font-size: 0.58rem;
  font-weight: 400;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.skill-label--1 {
  color: var(--text-muted);
}

.skill-label--2 {
  color: var(--text-secondary);
}

.skill-label--3 {
  color: var(--accent);
}

.skill-label--4 {
  color: var(--warm);
}

/* ───────── FOOTER ───────── */
.footer {
  margin-top: auto;
  padding: 2rem;
  border-top: 1px solid var(--border-subtle);
  text-align: center;
}

.footer-text {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--text-muted);
  letter-spacing: 0.06em;
}

/* ───────── SCROLL REVEAL ANIMATIONS ───────── */
.reveal {
  opacity: 0;
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal--up {
  transform: translateY(40px);
}

.reveal--left {
  transform: translateX(-40px);
}

.reveal--right {
  transform: translateX(40px);
}

.reveal.revealed {
  opacity: 1;
  transform: translate(0, 0);
}
</style>
