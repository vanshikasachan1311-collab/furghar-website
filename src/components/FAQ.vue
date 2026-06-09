<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { elementRef, isVisible } = useScrollAnimation()

const faqs = [
  {
    question: 'Is FurGhar a kennel?',
    answer: 'No. Pets stay with trusted pet-loving families in warm home environments instead of kennel-style boarding.',
  },
  {
    question: 'What should I bring?',
    answer: 'Please bring food, leash, favorite toy, medicines, and clear care instructions so your pet’s routine feels familiar.',
  },
  {
    question: 'Can I meet the host?',
    answer: 'Yes. A meet and greet helps you, your pet, and the host feel confident before the stay begins.',
  },
  {
    question: 'Is FurGhar available everywhere?',
    answer: 'FurGhar is currently launching in Indore, with plans to grow thoughtfully as the community expands.',
  },
]
</script>

<template>
  <section id="faq" ref="elementRef" class="section-divider py-12 lg:py-16" :style="{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(60px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }">
    <div class="container-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
      <div>
        <p class="section-eyebrow">FAQ</p>
        <h2 class="section-title">Questions pet parents ask first.</h2>
        <p class="section-copy">
          FurGhar is intentionally simple in Version 1: no backend, no bookings, no payments, just a caring first step through forms and personal matching.
        </p>
      </div>

      <div class="grid gap-4">
        <details v-for="faq in faqs" :key="faq.question" class="group rounded-3xl border border-white/70 bg-white/75 p-6 shadow-sm open:shadow-soft">
          <summary class="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-extrabold text-orangeWarm">
            {{ faq.question }}
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orangeWarm/12 text-orangeWarm group-open:rotate-45">+</span>
          </summary>
          <p class="mt-4 text-sm leading-7 text-ink/65">{{ faq.answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>


