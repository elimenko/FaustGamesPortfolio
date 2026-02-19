import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal(rootRef, options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = options
  let observer = null

  onMounted(() => {
    const root = rootRef.value?.$el || rootRef.value
    if (!root) return

    const targets = root.querySelectorAll('.reveal')

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    targets.forEach((el) => observer.observe(el))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
