<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  media: {
    type: Array,
    default: () => [],
  },
  projectId: {
    type: String,
    required: true,
  },
})

const currentIndex = ref(0)
const lightboxOpen = ref(false)

const hasMedia = computed(() => props.media.length > 0)
const total = computed(() => props.media.length)
const current = computed(() => props.media[currentIndex.value])

function openLightbox() {
  lightboxOpen.value = true
  document.addEventListener('keydown', onKey)
}

function closeLightbox() {
  lightboxOpen.value = false
  document.removeEventListener('keydown', onKey)
}

function onKey(e) {
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}

function next() {
  if (currentIndex.value < total.value - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

function prev() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = total.value - 1
  }
}

function goTo(index) {
  currentIndex.value = index
}
</script>

<template>
  <div class="carousel">
    <!-- Actual media -->
    <template v-if="hasMedia">
      <div class="carousel-viewport">
        <div class="carousel-slide" @click="openLightbox">
          <img
            v-if="current.type === 'image'"
            :src="current.src"
            :alt="current.alt || projectId"
            class="carousel-img"
          />
          <video
            v-else-if="current.type === 'video'"
            :src="current.src"
            :poster="current.poster"
            controls
            class="carousel-video"
            @click.stop
          />
          <span class="carousel-expand" title="Expand">⛶</span>
        </div>

        <button v-if="total > 1" class="carousel-btn carousel-btn--prev" @click="prev" aria-label="Previous">
          ‹
        </button>
        <button v-if="total > 1" class="carousel-btn carousel-btn--next" @click="next" aria-label="Next">
          ›
        </button>
      </div>

      <div v-if="total > 1" class="carousel-dots">
        <button
          v-for="(item, i) in media"
          :key="i"
          class="dot"
          :class="{ 'dot--active': i === currentIndex, 'dot--video': item.type === 'video' }"
          @click="goTo(i)"
          :aria-label="'Go to slide ' + (i + 1)"
        />
      </div>
    </template>

    <!-- Placeholder when no media -->
    <template v-else>
      <div class="carousel-placeholder">
        <span class="placeholder-icon">🎮</span>
        <span class="placeholder-text">Screenshots & trailers coming soon</span>
      </div>
    </template>

    <!-- Lightbox overlay -->
    <Teleport to="body">
      <Transition name="lb">
        <div v-if="lightboxOpen" class="lightbox" @click.self="closeLightbox">
          <button class="lb-close" @click="closeLightbox" aria-label="Close">✕</button>
          <div class="lb-content">
            <img
              v-if="current.type === 'image'"
              :src="current.src"
              :alt="current.alt || projectId"
              class="lb-img"
            />
            <video
              v-else-if="current.type === 'video'"
              :src="current.src"
              :poster="current.poster"
              controls
              autoplay
              class="lb-video"
            />
          </div>
          <button v-if="total > 1" class="lb-btn lb-btn--prev" @click="prev" aria-label="Previous">‹</button>
          <button v-if="total > 1" class="lb-btn lb-btn--next" @click="next" aria-label="Next">›</button>
          <div v-if="total > 1" class="lb-counter">{{ currentIndex + 1 }} / {{ total }}</div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.carousel {
  width: 100%;
}

.carousel-viewport {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: var(--bg-elevated);
  border-radius: 4px;
  overflow: hidden;
}

.carousel-slide {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-img,
.carousel-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.carousel-slide {
  cursor: pointer;
}

.carousel-expand {
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  background: rgba(0, 0, 0, 0.5);
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  pointer-events: none;
  transition: color 0.15s;
}

.carousel-slide:hover .carousel-expand {
  color: rgba(255, 255, 255, 0.85);
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  font-size: 1.4rem;
  line-height: 1;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
  z-index: 2;
}

.carousel-btn:hover {
  background: rgba(0, 0, 0, 0.8);
}

.carousel-btn--prev {
  left: 0.5rem;
}

.carousel-btn--next {
  right: 0.5rem;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  margin-top: 0.6rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: var(--bg-hover);
  cursor: pointer;
  transition: background 0.15s, transform 0.15s;
  padding: 0;
}

.dot--active {
  background: var(--accent);
  transform: scale(1.25);
}

.dot--video {
  border-radius: 2px;
  width: 14px;
  height: 8px;
}

.dot--video.dot--active {
  background: var(--accent);
}

.carousel-placeholder {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, var(--bg-elevated) 0%, var(--bg-surface) 100%);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.placeholder-icon {
  font-size: 2.5rem;
  opacity: 0.2;
}

.placeholder-text {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 500;
}

/* ───────── LIGHTBOX ───────── */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.lb-content {
  max-width: 90vw;
  max-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lb-img {
  max-width: 90vw;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 4px;
}

.lb-video {
  max-width: 90vw;
  max-height: 85vh;
  border-radius: 4px;
}

.lb-close {
  position: absolute;
  top: 1rem;
  right: 1.25rem;
  font-size: 1.25rem;
  color: var(--text-secondary);
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color 0.15s, background 0.15s;
  z-index: 2;
}

.lb-close:hover {
  color: var(--text-primary);
  background: rgba(0, 0, 0, 0.8);
}

.lb-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  font-size: 1.6rem;
  line-height: 1;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
  z-index: 2;
}

.lb-btn:hover {
  background: rgba(0, 0, 0, 0.8);
}

.lb-btn--prev {
  left: 1rem;
}

.lb-btn--next {
  right: 1rem;
}

.lb-counter {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.75rem;
  color: var(--text-muted);
  background: rgba(0, 0, 0, 0.5);
  padding: 0.25rem 0.75rem;
  border-radius: 3px;
}

/* Transition */
.lb-enter-active,
.lb-leave-active {
  transition: opacity 0.2s ease;
}

.lb-enter-from,
.lb-leave-to {
  opacity: 0;
}
</style>
