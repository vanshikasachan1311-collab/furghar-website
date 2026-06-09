<script setup>
import { Heart, ShieldCheck, Sparkles } from '@lucide/vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'
import { onMounted, ref } from 'vue'

const { elementRef, isVisible } = useScrollAnimation()
const showAnimation = ref(false)

onMounted(() => {
  setTimeout(() => {
    showAnimation.value = true
  }, 300)
})
</script>

<template>
  <section id="home" ref="elementRef" class="relative pt-32 sm:pt-36 lg:pt-40">
    <div :class="['container-shell grid items-center gap-12 pb-12 lg:grid-cols-[1.02fr_0.98fr] lg:pb-16', { 'scroll-hidden': !showAnimation, 'scroll-visible': showAnimation }]">
      <div class="max-w-2xl">
        <div class="inline-flex items-center gap-2 rounded-full border border-orangeWarm/20 bg-white/70 px-4 py-2 text-sm font-bold text-forest shadow-sm">
          <Sparkles class="h-4 w-4 text-orangeWarm" aria-hidden="true" />
          Launching first in Indore
        </div>
        <h1 class="mt-7 text-5xl font-extrabold tracking-[-0.04em] text-forest sm:text-6xl lg:text-7xl">
          Your pet deserves a home, not a cage.
        </h1>
        <p class="mt-6 max-w-xl text-lg leading-8 text-ink/75 sm:text-xl">
          Trusted pet-loving families for travel and emergency care, so your furry family feels safe, loved, and understood while you are away.
        </p>
        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#find-host" class="primary-button">Find a Host</a>
          <a href="#become-host" class="secondary-button">Become a Host</a>
        </div>
        <div class="mt-10 grid gap-4 sm:grid-cols-2">
          <div class="flex items-center gap-3 rounded-3xl bg-white/70 p-4 shadow-sm">
            <ShieldCheck class="h-6 w-6 text-forest" aria-hidden="true" />
            <span class="text-sm font-bold text-ink/75">Meet hosts before the stay</span>
          </div>
          <div class="flex items-center gap-3 rounded-3xl bg-white/70 p-4 shadow-sm">
            <Heart class="h-6 w-6 text-orangeWarm" aria-hidden="true" />
            <span class="text-sm font-bold text-ink/75">Care routines built around your pet</span>
          </div>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-xl lg:max-w-none">
        <div class="absolute -left-8 top-12 h-28 w-28 rounded-full bg-orangeWarm/15 blur-2xl"></div>
        <div class="absolute -right-8 bottom-10 h-36 w-36 rounded-full bg-forest/15 blur-2xl"></div>
        <div class="soft-card relative p-5 sm:p-7">
          <div class="rounded-[1.6rem] bg-gradient-to-br from-beige via-white to-[#FBE8CF] p-6 sm:p-8">
            <div class="grid grid-cols-2 gap-4">
              <div class="col-span-2 rounded-[2rem] bg-forest p-6 text-white shadow-soft sm:p-8">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold uppercase tracking-[0.18em] text-white/70">Our Core Promise</span>
                  <span class="rounded-full bg-orangeWarm px-3 py-1 text-xs font-bold text-white shadow-sm">1:1 Care</span>
                </div>
                <div class="mt-6 max-w-xl">
                  <h3 class="text-2xl font-extrabold sm:text-3xl">Personalized Stays</h3>
                  <p class="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
                    Every stay is customized around your pet's familiar feeding schedules, walking routines, and cozy habits. We match them with host families who follow their exact daily care routines so they feel completely safe and loved.
                  </p>
                </div>
              </div>
              <div class="rounded-[1.5rem] bg-white p-5 shadow-sm">
                <div class="text-5xl" aria-hidden="true">🐱</div>
                <p class="mt-5 text-sm font-extrabold text-forest">Photo updates</p>
                <p class="mt-1 text-xs leading-5 text-ink/60">Warm check-ins that help you relax.</p>
              </div>
              <div class="rounded-[1.5rem] bg-white p-5 shadow-sm">
                <div class="text-5xl" aria-hidden="true">🏡</div>
                <p class="mt-5 text-sm font-extrabold text-forest">Cozy homes</p>
                <p class="mt-1 text-xs leading-5 text-ink/60">No cages. No crowded kennel stress.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


