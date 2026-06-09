<script setup>
import { Mail, MessageCircle, PawPrint, Camera } from '@lucide/vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { elementRef, isVisible } = useScrollAnimation()

const currentYear = new Date().getFullYear()
const links = [
  { label: 'Instagram', href: 'https://www.instagram.com/furgharofficial/', icon: Camera },
  { label: 'WhatsApp', href: 'https://wa.me/919315631683', icon: MessageCircle },
  { label: 'Email', href: 'mailto:furgharofficial@gmail.com', icon: Mail },
]

const contactDetails = [
  { label: 'WhatsApp', value: '+91 93156 31683' },
  { label: 'Email', value: 'furgharofficial@gmail.com' },
]
</script>

<template>
  <footer id="contact" ref="elementRef" class="border-t border-forest/10 bg-[#2F5234] py-12 text-white" :style="{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(50px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }">
    <div class="container-shell">
      <div class="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <a href="#home" class="inline-flex items-center gap-3" aria-label="FurGhar home">
            <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-forest">
              <PawPrint class="h-6 w-6" aria-hidden="true" />
            </span>
            <span class="text-2xl font-extrabold">FurGhar</span>
          </a>
          <p class="mt-4 max-w-md text-sm leading-7 text-white/75">A home away from home for your furry family.</p>
        </div>

        <div class="flex flex-wrap gap-3 md:justify-end">
          <a v-for="link in links" :key="link.label" :href="link.href" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 text-sm font-bold text-white hover:bg-white hover:text-forest">
            <component :is="link.icon" class="h-4 w-4" aria-hidden="true" />
            {{ link.label }}
          </a>
        </div>
      </div>

      <div class="mt-8 grid gap-3 rounded-3xl bg-white/10 p-5 text-sm text-white/80 sm:grid-cols-2">
        <div v-for="detail in contactDetails" :key="detail.label">
          <p class="font-bold uppercase tracking-[0.18em] text-white/50">{{ detail.label }}</p>
          <p class="mt-2 select-all font-semibold text-white">{{ detail.value }}</p>
        </div>
      </div>

      <div class="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ currentYear }} FurGhar</p>
        <p>Made for warm homes, happy pets, and peaceful travel.</p>
      </div>
    </div>
  </footer>
</template>


