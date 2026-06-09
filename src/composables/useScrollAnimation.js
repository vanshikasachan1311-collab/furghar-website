import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const isVisible = ref(false)
  const elementRef = ref(null)

  const checkVisibility = () => {
    if (!elementRef.value) return
    
    const rect = elementRef.value.getBoundingClientRect()
    const windowHeight = window.innerHeight
    
    // Trigger when element is 150px from bottom of viewport
    isVisible.value = rect.top < windowHeight - 150
  }

  onMounted(() => {
    // Check immediately on mount
    setTimeout(checkVisibility, 100)
    
    // Add scroll listener with throttle
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkVisibility()
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', checkVisibility)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', checkVisibility)
    window.removeEventListener('resize', checkVisibility)
  })

  return { elementRef, isVisible }
}
