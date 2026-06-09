<script setup>
import { ArrowRight, MapPin } from '@lucide/vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { elementRef, isVisible } = useScrollAnimation()

const parentFormUrl = 'https://forms.gle/fHjbBvjmsf47p6peA'
</script>

<template>
  <section id="find-host" ref="elementRef" class="section-divider py-12 lg:py-16" :style="{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(-60px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }">
    <div class="container-shell">
      <div class="soft-card grid items-center gap-8 p-7 sm:p-10 lg:grid-cols-[0.92fr_1.08fr] lg:p-14">
        <div class="rounded-[2rem] bg-gradient-to-br from-beige to-white p-8">
          <div class="rounded-[1.5rem] bg-white p-6 shadow-sm">
            <div class="text-7xl" aria-hidden="true">🐾</div>
            <div class="mt-8 flex items-center gap-3 text-sm font-bold text-orangeWarm">
              <MapPin class="h-5 w-5 text-orangeWarm" aria-hidden="true" />
              Currently serving Indore families
            </div>
            <p class="mt-4 text-lg font-extrabold text-ink">Share your pet’s routine, personality, and stay dates. We will help find a caring match.</p>
          </div>
        </div>

        <div>
          <p class="section-eyebrow">Need a Host</p>
          <h2 class="section-title">Looking for a safe place for your furry family?</h2>
          <p class="section-copy">
            Tell us about your pet and the kind of care they need. FurGhar helps you move from anxious searching to a warm, home-like stay with a trusted pet-loving family.
          </p>
          <a :href="parentFormUrl" target="_blank" rel="noopener noreferrer" class="primary-button mt-8 gap-2">
            Request Pet Care
            <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>


