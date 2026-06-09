<script setup>
import { ref } from 'vue'
import { Menu, X } from '@lucide/vue'
import logoColor from '../assets/images/logo-color.jpeg'

const isOpen = ref(false)

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Become a Host', href: '#become-host' },
  { label: 'Find a Host', href: '#find-host' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-forest/10 bg-cream/88 backdrop-blur-xl">
    <nav class="container-shell flex h-20 items-center justify-between" aria-label="Primary navigation">
      <a href="#home" class="flex items-center" aria-label="FurGhar home" @click="closeMenu">
        <img :src="logoColor" alt="FurGhar" class="h-14 w-auto rounded-2xl object-contain sm:h-16" loading="eager" />
      </a>

      <div class="hidden items-center gap-7 lg:flex">
        <a v-for="link in links" :key="link.href" :href="link.href" class="text-sm font-semibold text-ink/75 hover:text-forest">
          {{ link.label }}
        </a>
      </div>

      <button class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-forest shadow-sm lg:hidden" type="button" :aria-expanded="isOpen" aria-controls="mobile-menu" aria-label="Toggle menu" @click="isOpen = !isOpen">
        <X v-if="isOpen" class="h-6 w-6" aria-hidden="true" />
        <Menu v-else class="h-6 w-6" aria-hidden="true" />
      </button>
    </nav>

    <div v-show="isOpen" id="mobile-menu" class="border-t border-forest/10 bg-cream/95 px-5 py-5 shadow-soft lg:hidden">
      <div class="mx-auto grid max-w-7xl gap-2">
        <a v-for="link in links" :key="link.href" :href="link.href" class="rounded-2xl px-4 py-3 text-sm font-bold text-ink/80 hover:bg-white hover:text-forest" @click="closeMenu">
          {{ link.label }}
        </a>
      </div>
    </div>
  </header>
</template>


