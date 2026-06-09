<script setup>
import instaImage from '../assets/images/instascanner.jpeg'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { elementRef, isVisible } = useScrollAnimation()
</script>

<template>
  <section ref="elementRef" class="section-divider py-12 lg:py-16" :style="{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'scale(1)' : 'scale(0.8)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }">
    <div class="container-shell">
      <div class="soft-card mx-auto max-w-4xl overflow-hidden p-6 sm:p-8">
        <div class="grid items-center gap-8 rounded-[1.7rem] bg-gradient-to-br from-white via-[#FFF0DC] to-beige p-7 sm:p-10 md:grid-cols-[0.75fr_1.25fr]">
          <a href="https://www.instagram.com/furgharofficial/" target="_blank" rel="noopener noreferrer" class="group relative flex aspect-square items-center justify-center rounded-[2rem] bg-white shadow-sm transition hover:scale-[1.02]">
            <img :src="instaImage" alt="FurGhar Instagram preview" class="h-full w-full rounded-[2rem] object-cover" loading="lazy" />
            <div class="absolute inset-0 flex items-center justify-center rounded-[2rem] bg-forest/0 opacity-0 transition group-hover:bg-forest/10 group-hover:opacity-100">
              <span class="rounded-full bg-white px-4 py-2 text-xs font-bold text-forest shadow-sm">Visit @furgharofficial</span>
            </div>
          </a>
          <div>
            <p class="section-eyebrow">Instagram</p>
            <h2 class="section-title">Follow Our Journey</h2>
            <p class="section-copy">
              Watch FurGhar grow from a local Indore launch into a trusted community of pet parents, caring hosts, happy tails, and homes filled with love.
            </p>
            <a href="https://www.instagram.com/furgharofficial/" target="_blank" rel="noopener noreferrer" class="secondary-button mt-7">Visit Instagram</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


