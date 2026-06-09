<script setup>
import { ClipboardList, SearchCheck, Coffee, House } from '@lucide/vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { elementRef, isVisible } = useScrollAnimation()

const steps = [
  { title: 'Request', copy: 'Pet parent fills request form.', icon: ClipboardList },
  { title: 'Match', copy: 'We carefully match with a suitable host.', icon: SearchCheck },
  { title: 'Meet', copy: 'Meet and greet before the stay.', icon: Coffee },
  { title: 'Stay', copy: 'Pet enjoys a safe and loving home.', icon: House },
]
</script>

<template>
  <section id="how-it-works" ref="elementRef" class="section-divider py-12 lg:py-16" :style="{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(60px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }">
    <div class="container-shell">
      <div class="mx-auto max-w-3xl text-center">
        <p class="section-eyebrow">How FurGhar Works</p>
        <h2 class="section-title">A simple, thoughtful path from request to a happy stay.</h2>
      </div>

      <div class="mt-10 grid gap-6 lg:grid-cols-4">
        <div v-for="(step, index) in steps" :key="step.title" class="relative group">
          <article class="soft-card h-full p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-warm hover:border-orangeWarm/30">
            <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-orangeWarm text-white shadow-soft transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 animate-float">
              <component :is="step.icon" class="h-8 w-8" aria-hidden="true" />
            </div>
            <p class="mt-6 text-sm font-extrabold text-orangeWarm transition-colors duration-300 group-hover:text-forest">Step {{ index + 1 }}</p>
            <h3 class="mt-2 text-2xl font-extrabold text-forest transition-colors duration-300 group-hover:text-orangeWarm">{{ step.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-ink/65 transition-colors duration-300 group-hover:text-ink/80">{{ step.copy }}</p>
          </article>
          <div v-if="index < steps.length - 1" class="pointer-events-none absolute left-1/2 top-full flex h-6 -translate-x-1/2 items-center justify-center text-2xl text-orangeWarm lg:left-auto lg:right-[-1.15rem] lg:top-1/2 lg:h-auto lg:-translate-y-1/2 lg:translate-x-0 animate-bounce-slow" aria-hidden="true">
            ↓
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}
</style>


