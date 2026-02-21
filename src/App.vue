<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { projects, courses, skills, skillLevels } from './data/projects.js'
import MediaCarousel from './components/MediaCarousel.vue'
import { useScrollReveal } from './composables/useScrollReveal.js'

const appShell = ref(null)
const primaryProject = projects.find(p => p.tier === 'primary')
const secondaryProjects = projects.filter(p => p.tier === 'secondary')

const expandedProject = ref(null)
const expandedCourse = ref(null)
const activeSection = ref('hero')

const sectionIds = ['hero', 'projects', 'more-projects', 'courses', 'skills']
let sectionObserver = null

onMounted(() => {
  sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const id = entry.target.id
          if (id === 'more-projects') {
            activeSection.value = 'projects'
          } else {
            activeSection.value = id
          }
        }
      }
    },
    { threshold: 0.3 }
  )
  sectionIds.forEach((id) => {
    const el = document.getElementById(id)
    if (el) sectionObserver.observe(el)
  })
})

onUnmounted(() => {
  if (sectionObserver) sectionObserver.disconnect()
})

function toggleHighlights(id) {
  expandedProject.value = expandedProject.value === id ? null : id
}

function toggleCourse(id) {
  expandedCourse.value = expandedCourse.value === id ? null : id
}

function scrollToSection(e, sectionId) {
  e.preventDefault()
  const el = document.getElementById(sectionId)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
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
        <a href="#hero" class="nav-link" :class="{ active: activeSection === 'hero' }" @click="scrollToSection($event, 'hero')">Home</a>
        <a href="#projects" class="nav-link" :class="{ active: activeSection === 'projects' }" @click="scrollToSection($event, 'projects')">Projects</a>
        <a href="#skills" class="nav-link" :class="{ active: activeSection === 'skills' }" @click="scrollToSection($event, 'skills')">Skills</a>
        <a href="#courses" class="nav-link" :class="{ active: activeSection === 'courses' }" @click="scrollToSection($event, 'courses')">Courses</a>
      </div>
    </nav>

    <!-- ─── HERO ─── -->
    <section id="hero" class="screen hero">
      <div class="hero-bg"></div>
      <div class="hero-inner">
        <div class="hero-left">
          <h1 class="hero-title">
            <span class="hero-title-line"><span class="hero-title-highlight">Faust</span></span>
            <span class="hero-title-line"><span class="hero-title-accent">Games</span></span>
          </h1>
          <div class="hero-photo hero-photo--mobile">
            <img src="/media/main/avatar-green.png" alt="Egor — Faust" class="photo-avatar" />
          </div>
          <p class="hero-subtitle">
            Hi, I'm <span class="hero-name">Egor</span> — aka <span class="hero-name">Faust</span>.<br/>
            Software Engineer, Team Lead, and Architect with over a decade of enterprise experience, and a burning passion for game development —
            spending the last 3 years mastering Unreal Engine 5 and building original projects.
          </p>
          <div class="hero-pills">
            <a href="https://www.linkedin.com/in/egor-limenko-ba8128134/" target="_blank" rel="noopener" class="hero-pill">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="hero-pill-icon">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a href="https://steamcommunity.com/id/VenolVl/" target="_blank" rel="noopener" class="hero-pill">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="hero-pill-icon">
                <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.455 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.252 0-2.265-1.014-2.265-2.265z"/>
              </svg>
              <span>Steam</span>
            </a>
            <a href="mailto:egor.limenko@gmail.com" class="hero-pill">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hero-pill-icon">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <span>Email</span>
            </a>
          </div>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">10<span class="stat-plus">+</span></span>
              <span class="stat-label">Years building and shipping production software across enterprise domains</span>
            </div>
            <span class="stat-divider"></span>
            <div class="stat">
              <span class="stat-number">4<span class="stat-plus">+</span></span>
              <span class="stat-label">Years of commercial software architecture</span>
            </div>
            <span class="stat-divider"></span>
            <div class="stat">
              <span class="stat-number">3<span class="stat-plus">+</span></span>
              <span class="stat-label">Years of gamedev and design in UE5</span>
            </div>
          </div>
        </div>
        <div class="hero-photo">
          <img src="/media/main/avatar-green.png" alt="Egor — Faust" class="photo-avatar" />
        </div>
      </div>
    </section>

    <!-- ─── FEATURED PROJECT ─── -->
    <section id="projects" class="screen screen--alt reveal reveal--up">
      <div class="screen-inner">
        <p class="screen-eyebrow">FEATURED PROJECT</p>
        <article class="project-split project-split--featured">
          <div class="project-split__media">
            <MediaCarousel :media="primaryProject.media" :project-id="primaryProject.id" />
          </div>
          <div class="project-split__body">
            <h2 class="project-name">{{ primaryProject.name }}</h2>
            <p class="project-genre">{{ primaryProject.genre }} · {{ primaryProject.perspective }}</p>
            <p class="project-desc">{{ primaryProject.description }}</p>
            <div class="project-chips">
              <span class="chip chip--tech">Unreal Engine 5</span>
              <span class="chip chip--tech">C++</span>
              <span class="chip chip--tech">Blueprints</span>
              <span class="chip chip--tech">GAS</span>
            </div>
            <ul class="highlights-list highlights-list--2col">
              <li v-for="h in primaryProject.highlights" :key="h">{{ h }}</li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <!-- ─── MORE PROJECTS ─── -->
    <section class="screen reveal reveal--up">
      <div class="screen-inner">
        <p class="screen-eyebrow">MORE PROJECTS</p>
        <div class="projects-row">
          <article v-for="project in secondaryProjects" :key="project.id" class="project-card">
            <div class="project-card__media">
              <MediaCarousel :media="project.media" :project-id="project.id" />
            </div>
            <div class="project-card__body">
              <h3 class="project-name">{{ project.name }}</h3>
              <p class="project-genre">{{ project.genre }} · {{ project.perspective }}</p>
              <p class="project-desc">{{ project.description }}</p>
              <div class="project-chips">
                <span v-for="tag in project.technologies.slice(0, 4)" :key="tag" class="chip chip--tech">{{ tag }}</span>
              </div>
              <ul class="highlights-list">
                <li v-for="h in project.highlights" :key="h">{{ h }}</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ─── SKILLS ─── -->
    <section id="skills" class="screen screen--alt reveal reveal--up">
      <div class="screen-inner">
        <p class="screen-eyebrow">SKILLS & PROFICIENCY</p>
        <div class="skills-row">
          <div v-for="group in skills" :key="group.category" class="skill-group">
            <h3 class="skill-category">{{ group.category }}</h3>
            <div class="skill-list">
              <div v-for="skill in group.items" :key="skill.name" class="skill-row" :title="skill.note">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                </div>
                <div class="skill-meter">
                  <div class="skill-track">
                    <div v-for="seg in 4" :key="seg" class="skill-segment" :class="{ 'skill-segment--active': seg <= skill.level, ['skill-segment--' + skill.level]: seg <= skill.level }"></div>
                  </div>
                  <span class="skill-label" :class="'skill-label--' + skill.level">{{ skillLevels[skill.level] }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── COURSES ─── -->
    <section id="courses" class="screen reveal reveal--up">
      <div class="screen-inner">
        <p class="screen-eyebrow">COURSES & CERTIFICATIONS</p>
        <template v-if="courses.length">
          <div class="grid-courses">
            <article v-for="(course, idx) in courses" :key="course.id" class="course-card reveal reveal--up" :style="{ transitionDelay: (idx * 0.08) + 's' }">
              <div class="course-header" @click="toggleCourse(course.id)">
                <div class="course-header-text">
                  <span class="course-expand-icon" :class="{ 'course-expand-icon--open': expandedCourse === course.id }"></span>
                  <div>
                    <h4 class="course-title">{{ course.title }}</h4>
                    <span class="course-author">{{ course.author }}</span>
                  </div>
                </div>
                <a v-if="course.certificateUrl" :href="course.certificateUrl" download class="udemy-badge" title="Download Udemy Certificate" @click.stop>
                  <img src="/media/main/udemy-logo.webp" alt="Udemy" class="udemy-icon" />
                  <span class="udemy-label">Certificate</span>
                </a>
              </div>
              <div class="course-collapse" :class="{ 'course-collapse--open': expandedCourse === course.id }">
                <div class="course-content">
                  <p class="course-overview">{{ course.overview }}</p>
                  <ul class="course-learned">
                    <li v-for="item in course.learned" :key="item">{{ item }}</li>
                  </ul>
                  <div class="course-footer">
                    <div class="course-tags">
                      <span v-for="tag in course.tags" :key="tag" class="chip chip--sm">{{ tag }}</span>
                    </div>
                    <a v-if="course.githubUrl" :href="course.githubUrl" target="_blank" class="btn-ghost" @click.stop>GitHub</a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </template>
        <div v-else class="courses-placeholder">
          <p>Course projects with GitHub links and certificates — coming next.</p>
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
/* ═══════════════════════════════════════
   SHELL
═══════════════════════════════════════ */
.app-shell {
  display: flex;
  flex-direction: column;
}

/* ═══ NAV ═══ */
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  height: 64px;
  background: rgba(0,0,0,0.92);
  border-bottom: 1px solid var(--border-subtle);
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 200;
  backdrop-filter: blur(10px);
}
.nav-brand { display: flex; align-items: center; gap: 0.6rem; }
.brand-icon { color: var(--accent); font-size: 1.1rem; }
.brand-text {
  font-family: var(--font-pixel);
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  color: var(--accent);
}
.nav-links { display: flex; gap: 0.5rem; }
.nav-link {
  font-family: var(--font-mono);
  color: var(--text-muted);
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 1.2rem;
  border-radius: 3px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: color 0.15s, background 0.15s;
}
.nav-link:hover { color: var(--text-secondary); background: var(--bg-elevated); }
.nav-link.active { color: var(--accent); }

/* ═══ FULL-SCREEN SECTIONS ═══ */
.screen {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 3vw 4rem;
  border-bottom: 1px solid var(--border-subtle);
}
.screen--alt { background: var(--bg-surface); }
.screen-inner { max-width: 1800px; width: 100%; margin: 0 auto; }
.screen-eyebrow {
  font-family: var(--font-pixel);
  font-size: clamp(1rem, 1.5vw, 1.3rem);
  letter-spacing: 0.22em;
  color: var(--accent);
  margin-bottom: 3rem;
  text-align: center;
}

/* ═══ HERO ═══ */
.hero {
  background: var(--bg-root);
  position: relative;
  overflow: hidden;
  padding: 0;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 50% at 5% 10%, rgba(120, 180, 0, 0.25), transparent 70%),
    radial-gradient(ellipse 50% 40% at 90% 15%, rgba(120, 180, 0, 0.15), transparent 60%),
    radial-gradient(ellipse 40% 50% at 85% 90%, rgba(120, 180, 0, 0.2), transparent 60%),
    radial-gradient(ellipse 30% 30% at 5% 85%, rgba(120, 180, 0, 0.15), transparent 50%);
  pointer-events: none;
  z-index: 0;
}
.hero-inner {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1800px;
  width: 100%;
  margin: 0 auto;
  padding: 120px 5vw 4rem;
  min-height: 100vh;
}
.hero-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Title with highlight blocks */
.hero-title {
  margin: 0 0 2rem;
  line-height: 1;
}
.hero-title-line {
  display: block;
  margin-bottom: 0.3rem;
}
.hero-title-highlight {
  font-family: var(--font-pixel);
  font-size: clamp(3rem, 6.5vw, 6rem);
  color: var(--bg-root);
  background: var(--accent);
  padding: 0.1em 0.25em;
  display: inline-block;
  line-height: 1.15;
}
.hero-title-accent {
  font-family: var(--font-pixel);
  font-size: clamp(3rem, 6.5vw, 6rem);
  color: var(--accent);
  display: inline-block;
  line-height: 1.15;
}

/* Subtitle */
.hero-subtitle {
  font-family: var(--font-mono);
  font-size: clamp(1rem, 1.3vw, 1.15rem);
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.8;
  max-width: 520px;
  margin-bottom: 2rem;
}
.hero-name {
  color: #fff;
  font-weight: 700;
}

/* Social pills */
.hero-pills {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 3rem;
}
.hero-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-pixel);
  font-size: 0.55rem;
  color: #fff;
  background: var(--neon-purple);
  padding: 0.7rem 1.4rem;
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: background 0.2s, transform 0.2s;
}
.hero-pill:hover {
  background: #6b1aff;
  transform: translateY(-2px);
}
.hero-pill-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* Stats row */
.hero-stats {
  display: flex;
  gap: 0;
  align-items: stretch;
  padding-top: 2rem;
}
.stat {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex: 1;
  max-width: 220px;
  padding: 0 1.5rem;
}
.stat:first-child { padding-left: 0; }
.stat:last-child { padding-right: 0; }
.stat-divider {
  width: 1px;
  align-self: stretch;
  background: linear-gradient(to bottom, var(--accent), transparent);
  flex-shrink: 0;
}
.stat-number {
  font-family: var(--font-pixel);
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  color: var(--accent);
  line-height: 1;
}
.stat-plus { color: var(--accent); }
.stat-label {
  font-family: var(--font-mono);
  font-size: clamp(0.7rem, 0.9vw, 0.85rem);
  color: var(--text-muted);
  line-height: 1.5;
  letter-spacing: 0.02em;
}

/* Photo — avatar with cut corners baked into the PNG */
.hero-photo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-photo--mobile {
  display: none;
}
.photo-avatar {
  width: clamp(320px, 28vw, 480px);
  height: auto;
  display: block;
  object-fit: contain;
}

/* Hero responsive */
@media (max-width: 1200px) {
  .hero-inner {
    flex-direction: column;
    gap: 3rem;
    padding: 100px 5vw 3rem;
  }
  .hero-left {
    width: 100%;
    max-width: 700px;
  }
  .hero-photo {
    display: none;
  }
  .hero-photo--mobile {
    display: flex;
    margin: 2rem 0;
  }
  .hero-photo--mobile .photo-avatar {
    width: clamp(280px, 50vw, 400px);
  }
}

/* ═══ PROJECT — FEATURED (split) ═══ */
.project-split {
  display: flex;
  align-items: center;
  gap: 4rem;
  width: 100%;
  height: 100%;
}
.project-split--featured {
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}
.project-split__media {
  flex-shrink: 0;
  width: 48%;
  max-width: 720px;
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  overflow: hidden;
  background: var(--bg-card);
}
.project-split--featured .project-split__media {
  width: 70%;
  max-width: 900px;
}
.project-split__body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}
.project-split--featured .project-split__body {
  width: 100%;
  max-width: 1200px;
}

/* ═══ PROJECT — SECONDARY ROW ═══ */
.projects-row {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
}
.project-card {
  display: flex;
  align-items: center;
  gap: 3.5rem;
  width: 100%;
}
.project-card__media {
  flex-shrink: 0;
  width: 42%;
  max-width: 600px;
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  overflow: hidden;
  background: var(--bg-card);
  transition: border-color 0.2s;
}
.project-card__media:hover { border-color: var(--border-default); }
.project-card__body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}

/* Project cards responsive */
@media (max-width: 1200px) {
  .project-card {
    flex-direction: column;
    gap: 2rem;
  }
  .project-card__media {
    width: 100%;
    max-width: 100%;
  }
}

/* ═══ PROJECT — SHARED CONTENT ═══ */
.project-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.4rem;
}
.project-name {
  font-family: var(--font-pixel);
  font-size: clamp(1.2rem, 2.5vw, 2rem);
  color: var(--text-secondary);
  line-height: 1.3;
}
.project-name--sm {
  font-size: clamp(1rem, 1.8vw, 1.4rem);
}
.project-hours {
  font-family: var(--font-mono);
  font-size: clamp(0.8rem, 1vw, 0.95rem);
  color: var(--text-muted);
  white-space: nowrap;
}
.project-genre {
  font-family: var(--font-mono);
  font-size: clamp(0.85rem, 1.1vw, 1rem);
  color: var(--accent);
  letter-spacing: 0.05em;
  margin-bottom: 1.25rem;
}
.project-desc {
  font-family: var(--font-mono);
  font-size: clamp(1rem, 1.3vw, 1.15rem);
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.75;
  margin-bottom: 1.5rem;
}

/* ═══ CHIPS ═══ */
.project-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
.chip {
  font-family: var(--font-mono);
  font-size: clamp(0.8rem, 1vw, 0.9rem);
  font-weight: 400;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.5rem 1.1rem;
  clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
}
.chip--tech {
  background: var(--bg-chip);
  color: #ffffff;
  border: none;
}
.chip--sm {
  font-size: clamp(0.72rem, 0.9vw, 0.82rem);
  padding: 0.35rem 0.8rem;
  background: var(--bg-chip);
  color: #ffffff;
}

/* ═══ EXPAND BUTTON ═══ */
.btn-expand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: transparent;
  border: 1px solid var(--border-default);
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: clamp(0.85rem, 1vw, 0.95rem);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.6rem 1.2rem;
  border-radius: 3px;
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  margin-bottom: 1rem;
}
.btn-expand:hover { color: var(--accent); border-color: var(--accent); }
.btn-expand__icon { font-size: 0.9rem; }
.btn-expand__count {
  background: var(--bg-chip);
  color: #fff;
  font-size: 0.65rem;
  padding: 0.1rem 0.45rem;
  border-radius: 2px;
}

/* ═══ HIGHLIGHTS ═══ */
.highlights-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}
.highlights-list li {
  font-family: var(--font-mono);
  font-size: clamp(0.95rem, 1.15vw, 1.05rem);
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.65;
  padding-left: 1.3rem;
  position: relative;
}
.highlights-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5em;
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 8px solid var(--accent);
}
.highlights-list--2col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2.5rem;
  row-gap: 0.55rem;
}
@media (max-width: 900px) {
  .highlights-list--2col {
    grid-template-columns: 1fr;
  }
}

/* ═══ COURSES ═══ */
.grid-courses { display: flex; flex-direction: column; gap: 1.25rem; }
.course-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  transition: border-color 0.15s;
  overflow: hidden;
}
.course-card:hover { border-color: var(--border-default); }
.course-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem 2rem;
  cursor: pointer;
  transition: background 0.15s;
}
.course-header:hover { background: var(--bg-hover); }
.course-header-text {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.course-expand-icon {
  flex-shrink: 0;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 14px solid var(--accent);
  transition: transform 0.25s ease;
}
.course-expand-icon--open {
  transform: rotate(90deg);
}
.course-title {
  font-size: clamp(1rem, 1.3vw, 1.2rem);
  font-weight: 700;
  color: var(--text-secondary);
  margin: 0;
}
.course-author {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
  display: block;
  margin-top: 0.25rem;
}
.course-collapse {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s ease;
}
.course-collapse--open {
  grid-template-rows: 1fr;
}
.course-content {
  overflow: hidden;
  padding: 0 2rem;
  border-top: 1px solid transparent;
  transition: padding 0.35s ease, border-color 0.35s ease;
}
.course-collapse--open .course-content {
  padding: 0 2rem 1.5rem;
  border-top-color: var(--border-subtle);
}
.udemy-badge {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: 3px;
  text-decoration: none;
  flex-shrink: 0;
  transition: border-color 0.15s, background 0.15s;
}
.udemy-badge:hover {
  border-color: var(--accent);
  background: var(--bg-card);
}
.udemy-icon { width: 20px; height: 20px; object-fit: contain; }
.udemy-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--text-secondary);
  white-space: nowrap;
}
.course-overview {
  font-family: var(--font-mono);
  font-size: clamp(0.9rem, 1.1vw, 1rem);
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.65;
  margin: 1rem 0;
}
.course-learned {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.course-learned li {
  font-family: var(--font-mono);
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.5;
  position: relative;
  padding-left: 1rem;
}
.course-learned li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5em;
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 8px solid var(--accent);
}
.course-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 1rem;
}
.course-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.btn-ghost {
  background: transparent;
  color: var(--text-muted);
  border: 1px solid var(--border-default);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 0.4rem 0.9rem;
  border-radius: 3px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: color 0.15s, border-color 0.15s;
}
.btn-ghost:hover { color: var(--accent); border-color: var(--accent); }
.courses-placeholder {
  padding: 3rem;
  background: var(--bg-card);
  border: 1px dashed var(--border-default);
  border-radius: 4px;
  text-align: center;
  color: var(--text-muted);
  font-size: 1rem;
}

/* ═══ SKILLS ═══ */
.skills-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}
@media (max-width: 1680px) {
  .skills-row {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 850px) {
  .skills-row {
    grid-template-columns: 1fr;
  }
}
.skill-group {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  padding: 2rem 2.5rem;
}
.skill-category {
  font-family: var(--font-pixel);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #ffffff;
  background: var(--bg-chip);
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  margin-bottom: 1.5rem;
}
.skill-list { display: flex; flex-direction: column; gap: 1.4rem; }
.skill-row {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  cursor: help;
}
.skill-info { flex: 1; min-width: 0; }
.skill-name {
  display: block;
  font-family: var(--font-mono);
  font-size: clamp(0.95rem, 1.15vw, 1.05rem);
  font-weight: 700;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.3;
}
.skill-meter {
  flex-shrink: 0;
  width: 160px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
}
.skill-track {
  width: 100%;
  display: flex;
  gap: 4px;
}
.skill-segment {
  flex: 1;
  height: 10px;
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
}
.skill-segment--active {
  border-color: transparent;
}
.skill-segment--1 { background: var(--text-muted); box-shadow: 0 0 4px rgba(142,142,142,0.3); }
.skill-segment--2 { background: var(--accent); box-shadow: 0 0 6px rgba(194,254,12,0.3); }
.skill-segment--3 { background: var(--accent); box-shadow: 0 0 8px rgba(194,254,12,0.4); }
.skill-segment--4 { background: var(--neon-purple); box-shadow: 0 0 10px rgba(82,0,255,0.5); }
.skill-label {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.skill-label--1 { color: var(--text-muted); }
.skill-label--2 { color: var(--text-secondary); }
.skill-label--3 { color: var(--accent); }
.skill-label--4 { color: rgba(130, 80, 255, 1); }

/* ═══ FOOTER ═══ */
.footer {
  padding: 2.5rem;
  border-top: 1px solid var(--border-subtle);
  text-align: center;
}
.footer-text {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--text-muted);
  letter-spacing: 0.08em;
}

/* ═══ SCROLL REVEAL ═══ */
.reveal { 
  opacity: 0; 
  transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), 
              transform 1.2s cubic-bezier(0.16, 1, 0.3, 1); 
}
.reveal--up { transform: translateY(60px); }
.reveal--left { transform: translateX(-60px); }
.reveal--right { transform: translateX(60px); }
.reveal.revealed { 
  opacity: 1; 
  transform: translate(0, 0); 
}

/* Stagger animations for child elements */
.reveal.revealed .project-split__media,
.reveal.revealed .project-card__media {
  animation: fadeInScale 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards;
}

.reveal.revealed .project-split__body,
.reveal.revealed .project-card__body {
  animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s backwards;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
