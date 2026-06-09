<script setup>
import { Home, HeartHandshake, Camera, Bone } from '@lucide/vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { elementRef, isVisible } = useScrollAnimation()

const reasons = [
  {
    title: 'Home-like Environment',
    copy: 'Pets stay in real homes with calm spaces, familiar routines, and the warmth they are used to.',
    icon: Home,
  },
  {
    title: 'Trusted Pet-Loving Families',
    copy: 'Hosts are selected for patience, empathy, and genuine love for animals before every match.',
    icon: HeartHandshake,
  },
  {
    title: 'Regular Photo Updates',
    copy: 'You receive reassuring check-ins so you can see your pet eating, playing, resting, and settling in.',
    icon: Camera,
  },
  {
    title: 'Personalized Care',
    copy: 'Food, walks, medicines, nap times, and quirks are shared upfront so care feels thoughtfully tailored.',
    icon: Bone,
  },
]
</script>

<template>
  <section id="why" ref="elementRef" class="section-divider py-12 lg:py-16" :style="{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'scale(1)' : 'scale(0.8)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }">
    <div class="container-shell">
      <div class="mx-auto max-w-3xl text-center">
        <p class="section-eyebrow">Why FurGhar</p>
        <h2 class="section-title">Built for pets who need love, not just lodging.</h2>
        <p class="section-copy">
          FurGhar is designed around the emotions of pet parents and the everyday comfort pets need to feel safe.
        </p>
      </div>

      <div class="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <article v-for="reason in reasons" :key="reason.title" class="soft-card group p-6 hover:-translate-y-1 hover:shadow-warm">
          <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-orangeWarm/12 text-orangeWarm group-hover:bg-forest group-hover:text-white">
            <component :is="reason.icon" class="h-7 w-7" aria-hidden="true" />
          </div>
          <h3 class="mt-6 text-xl font-extrabold text-orangeWarm">{{ reason.title }}</h3>
          <p class="mt-3 text-sm leading-7 text-ink/65">{{ reason.copy }}</p>
        </article>
      </div>
    </div>
  </section>
</template>


