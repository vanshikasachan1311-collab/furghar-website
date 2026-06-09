<script setup>
import { CheckCircle2 } from '@lucide/vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { elementRef, isVisible } = useScrollAnimation()

const badges = ['Meet & Greet', 'Host Verification', 'Personalized Care', 'Emergency Contact Support']
</script>

<template>
  <section ref="elementRef" class="section-divider py-10 lg:py-14" :style="{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'scale(1)' : 'scale(0.8)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }" aria-labelledby="trust-heading">
    <div class="container-shell">
      <div class="rounded-[2rem] border border-forest/10 bg-white/70 p-6 shadow-sm">
        <h2 id="trust-heading" class="sr-only">FurGhar trust and safety commitments</h2>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="badge in badges" :key="badge" class="flex items-center gap-3 rounded-2xl bg-cream px-4 py-4 font-extrabold text-orangeWarm">
            <CheckCircle2 class="h-6 w-6 text-orangeWarm" aria-hidden="true" />
            {{ badge }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


