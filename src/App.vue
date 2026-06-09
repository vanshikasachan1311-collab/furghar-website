<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Story from './components/Story.vue'
import WhyFurGhar from './components/WhyFurGhar.vue'
import HowItWorks from './components/HowItWorks.vue'
import HostSection from './components/HostSection.vue'
import ParentSection from './components/ParentSection.vue'
import TrustSection from './components/TrustSection.vue'
import FAQ from './components/FAQ.vue'
import InstagramSection from './components/InstagramSection.vue'
import Footer from './components/Footer.vue'
// import PawPrintsBackground from './components/PawPrintsBackground.vue'
</script>

<template>
  <div class="min-h-screen overflow-hidden bg-cream bg-warm-radial">
    <!-- <PawPrintsBackground /> -->
    <Navbar />
    <main>
      <Hero />
      <Story />
      <WhyFurGhar />
      <HowItWorks />
      <HostSection />
      <ParentSection />
      <TrustSection />
      <FAQ />
      <InstagramSection />
    </main>
    <Footer />
  </div>
</template>
