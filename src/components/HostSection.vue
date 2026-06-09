<script setup>
import { BadgeIndianRupee, Heart, Users, WandSparkles } from '@lucide/vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { elementRef, isVisible } = useScrollAnimation()

const hostFormUrl = 'https://forms.gle/v259EvBTWbPqMqnw6'
const benefits = [
  { text: 'Spend time with adorable pets', icon: Heart },
  { text: 'Help fellow pet parents', icon: Users },
  { text: 'Earn along the way', icon: BadgeIndianRupee },
  { text: 'Join a trusted community', icon: WandSparkles },
]
</script>

<template>
  <section id="become-host" ref="elementRef" class="section-divider py-12 lg:py-16" :style="{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(50px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }">
    <div class="container-shell">
      <div class="overflow-hidden rounded-[2.5rem] bg-forest shadow-soft">
        <div class="grid items-center gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_0.82fr] lg:p-14">
          <div>
            <p class="text-sm font-bold uppercase tracking-[0.24em] text-orangeWarm">Become a Host</p>
            <h2 class="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">Love pets? Become a FurGhar Host.</h2>
            <p class="mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Open your home to pets who need a safe, affectionate place to stay. FurGhar hosts bring comfort to pet parents and joyful companionship into their own lives.
            </p>
            <a :href="hostFormUrl" target="_blank" rel="noopener noreferrer" class="mt-8 inline-flex items-center justify-center rounded-full bg-orangeWarm px-7 py-3 text-sm font-extrabold text-white shadow-warm hover:-translate-y-0.5 hover:bg-[#b86205] focus:outline-none focus:ring-4 focus:ring-white/25">
              Apply as Host
            </a>
          </div>

          <div class="grid gap-4">
            <div v-for="benefit in benefits" :key="benefit.text" class="flex items-center gap-4 rounded-3xl bg-white/10 p-4 text-white backdrop-blur">
              <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-forest">
                <component :is="benefit.icon" class="h-6 w-6" aria-hidden="true" />
              </span>
              <span class="font-bold">{{ benefit.text }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


