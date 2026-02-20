import { onMounted, onUnmounted, watch } from 'vue'

/**
 * Custom section-snap scroll: scrolls smoothly to the next/previous .screen
 * section when the user scrolls past the current section's boundaries.
 * Allows free scrolling within sections taller than the viewport.
 */
export function useSectionSnap(containerRef) {
  let isSnapping = false
  let wheelAccum = 0
  let wheelTimer = null
  const WHEEL_THRESHOLD = 80   // accumulated delta before triggering snap
  const SNAP_DURATION = 900     // ms — controls how slow/smooth the animation is

  function getSections() {
    if (!containerRef.value) return []
    return Array.from(containerRef.value.querySelectorAll('.screen'))
  }

  function smoothScrollTo(container, targetY, duration) {
    const startY = container.scrollTop
    const diff = targetY - startY
    if (Math.abs(diff) < 2) { isSnapping = false; return }

    isSnapping = true
    const startTime = performance.now()

    function step(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic for smooth deceleration
      const ease = 1 - Math.pow(1 - progress, 3)
      container.scrollTop = startY + diff * ease

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        container.scrollTop = targetY
        isSnapping = false
      }
    }
    requestAnimationFrame(step)
  }

  function getCurrentSectionIndex(container, sections) {
    const scrollTop = container.scrollTop
    const viewH = container.clientHeight

    for (let i = sections.length - 1; i >= 0; i--) {
      if (sections[i].offsetTop <= scrollTop + viewH * 0.5) {
        return i
      }
    }
    return 0
  }

  function canScrollInSection(container, section, direction) {
    const sectionTop = section.offsetTop
    const sectionBottom = sectionTop + section.scrollHeight
    const viewTop = container.scrollTop
    const viewBottom = viewTop + container.clientHeight

    if (direction > 0) {
      // scrolling down — can we still see more of this section?
      return sectionBottom - viewBottom > 2
    } else {
      // scrolling up — is there more of this section above?
      return viewTop - sectionTop > 2
    }
  }

  function onWheel(e) {
    if (isSnapping) { e.preventDefault(); return }

    const container = containerRef.value
    if (!container) return

    const sections = getSections()
    if (!sections.length) return

    const idx = getCurrentSectionIndex(container, sections)
    const current = sections[idx]
    const direction = e.deltaY > 0 ? 1 : -1

    // If section content overflows viewport, allow normal scroll within it
    if (canScrollInSection(container, current, direction)) {
      wheelAccum = 0
      return
    }

    // Accumulate wheel delta and snap when threshold reached
    e.preventDefault()
    wheelAccum += Math.abs(e.deltaY)

    clearTimeout(wheelTimer)
    wheelTimer = setTimeout(() => { wheelAccum = 0 }, 200)

    if (wheelAccum >= WHEEL_THRESHOLD) {
      wheelAccum = 0
      const nextIdx = idx + direction
      if (nextIdx >= 0 && nextIdx < sections.length) {
        smoothScrollTo(container, sections[nextIdx].offsetTop, SNAP_DURATION)
      }
    }
  }

  let bound = false

  function bind() {
    if (bound || !containerRef.value) return
    containerRef.value.addEventListener('wheel', onWheel, { passive: false })
    bound = true
  }

  function unbind() {
    if (!bound || !containerRef.value) return
    containerRef.value.removeEventListener('wheel', onWheel)
    bound = false
  }

  onMounted(() => bind())
  onUnmounted(() => unbind())

  watch(containerRef, (el) => {
    unbind()
    if (el) bind()
  })
}
