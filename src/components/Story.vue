<script setup>
import kajuImage from '../assets/images/Kaju.jpeg'
import { Heart, Quote } from '@lucide/vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { elementRef, isVisible } = useScrollAnimation()
</script>

<template>
  <section id="story" ref="elementRef" class="section-divider py-16 lg:py-24" :style="{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(-60px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }">
    <div class="container-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
      
      <!-- Left Column: Premium Scrapbook Photo Container -->
      <div class="relative flex justify-center">
        <!-- Playful Background Blobs for Warmth & Context -->
        <div class="absolute -left-4 -top-4 h-48 w-48 rounded-full bg-orangeWarm/8 blur-2xl"></div>
        <div class="absolute -bottom-6 -right-4 h-56 w-56 rounded-full bg-forest/8 blur-2xl"></div>
        
        <!-- Polaroid Card Wrapper with floating animation -->
        <div class="relative max-w-md rounded-[2rem] border border-stone-200/60 bg-white p-5 shadow-soft transition duration-500 hover:scale-105 hover:shadow-warm animate-float-gentle">
          <!-- Playful Badge -->
          <div class="absolute -right-3 -top-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-orangeWarm text-white shadow-md animate-bounce-slow">
            <Heart class="h-5 w-5 fill-white" />
          </div>

          <!-- The Image Frame -->
          <div class="overflow-hidden rounded-2xl bg-cream/50">
            <img 
              :src="kajuImage" 
              alt="Kaju, the golden Labrador who inspired FurGhar" 
              class="aspect-[4/5] w-full object-cover rounded-2xl shadow-inner transition duration-500 hover:scale-105" 
              loading="lazy" 
            />
          </div>

          <!-- Polaroid Handwriting-Style Caption Area -->
          <div class="mt-6 px-2 text-center">
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-orangeWarm">Meet Kaju</p>
            <h3 class="mt-2 text-xl font-extrabold text-forest">The Original Inspiration</h3>
            <p class="mt-2 text-sm font-semibold text-ink/80">
              Labrador • Gentle walks • Evening cuddles • Favorite yellow ball
            </p>
          </div>
        </div>
      </div>

      <!-- Right Column: Compelling Story & Pain Points -->
      <div class="flex flex-col justify-center">
        <p class="section-eyebrow">Our Story</p>
        <h2 class="section-title mt-2">Why We Started FurGhar</h2>
        
        <p class="mt-5 text-base leading-relaxed text-ink/85">
          FurGhar began with a familiar worry. As pet parents ourselves, our fur baby <strong>Kaju</strong> made us realize how stressful travel becomes when you don't have a reliable, cozy place for your pet to stay.
        </p>

        <!-- Highlight Card for Key Pain Points (Modern & Relatable) -->
        <div class="mt-8 rounded-3xl border border-orangeWarm/10 bg-[#FCF5E8]/60 p-6 shadow-sm">
          <h4 class="text-sm font-bold uppercase tracking-wider text-orangeWarm">The Dilemma We Faced</h4>
          <ul class="mt-4 space-y-3">
            <li class="flex items-start gap-3">
              <span class="mt-0.5 text-lg">😔</span>
              <span class="text-sm font-medium text-ink/80"><strong>Friends hesitate</strong> — you feel guilty burdening them.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-0.5 text-lg">🤷‍♂️</span>
              <span class="text-sm font-medium text-ink/80"><strong>Relatives make excuses</strong> — schedules rarely align.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-0.5 text-lg">😿</span>
              <span class="text-sm font-medium text-ink/80"><strong>Traditional kennels</strong> — cages and crowded, stressful spaces.</span>
            </li>
          </ul>
        </div>

        <!-- Inspiring Quote Box -->
        <div class="relative mt-8 border-l-4 border-orangeWarm pl-5">
          <Quote class="absolute -left-2 -top-4 h-8 w-8 text-orangeWarm/10" />
          <p class="text-sm font-semibold leading-relaxed text-forest italic">
            "We created FurGhar to make sure no parent has to choose between their travel and their pet's happiness. Our goal is a true home away from home."
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes float-gentle {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-12px) rotate(1deg);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 4s ease-in-out infinite;
}

.animate-float-gentle {
  animation: float-gentle 6s ease-in-out infinite;
}
</style>


