<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { PawPrint } from '@lucide/vue'

const pawPrints = ref([])
let interval = null
let currentX = 0
let currentY = 0
let direction = 0
let stepCount = 0

const startNewWalk = () => {
  // Start from a random edge
  const edge = Math.floor(Math.random() * 4)
  switch(edge) {
    case 0: // Top
      currentX = Math.random() * 100
      currentY = 0
      direction = 90 + (Math.random() - 0.5) * 60
      break
    case 1: // Right
      currentX = 100
      currentY = Math.random() * 100
      direction = 180 + (Math.random() - 0.5) * 60
      break
    case 2: // Bottom
      currentX = Math.random() * 100
      currentY = 100
      direction = 270 + (Math.random() - 0.5) * 60
      break
    case 3: // Left
      currentX = 0
      currentY = Math.random() * 100
      direction = 0 + (Math.random() - 0.5) * 60
      break
  }
  stepCount = 0
}

const addPawPrint = () => {
  // Move in the current direction
  const speed = 6
  currentX += Math.cos(direction * Math.PI / 180) * speed
  currentY += Math.sin(direction * Math.PI / 180) * speed
  
  // Add alternating left/right offset for natural gait
  const sideOffset = stepCount % 2 === 0 ? 3 : -3
  const perpOffsetX = Math.sin(direction * Math.PI / 180) * sideOffset
  const perpOffsetY = -Math.cos(direction * Math.PI / 180) * sideOffset
  
  const x = currentX + perpOffsetX
  const y = currentY + perpOffsetY
  
  // Check if out of bounds
  if (x < -5 || x > 105 || y < -5 || y > 105) {
    startNewWalk()
    return
  }
  
  const pawPrint = {
    id: Date.now() + Math.random(),
    x: x,
    y: y,
    rotation: direction + (stepCount % 2 === 0 ? 15 : -15),
    size: 45 + Math.random() * 15,
    opacity: 0.45 + Math.random() * 0.1
  }
  pawPrints.value.push(pawPrint)
  
  // Alternate left/right paw
  stepCount++
  
  // Remove old paw prints
  if (pawPrints.value.length > 12) {
    pawPrints.value.shift()
  }
}

onMounted(() => {
  startNewWalk()
  interval = setInterval(addPawPrint, 300)
})

onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})
</script>

<template>
  <div class="pointer-events-none fixed inset-0 z-0 overflow-hidden">
    <div
      v-for="paw in pawPrints"
      :key="paw.id"
      class="absolute transition-all duration-300 ease-out"
      :style="{
        left: `${paw.x}%`,
        top: `${paw.y}%`,
        transform: `rotate(${paw.rotation}deg)`,
        width: `${paw.size}px`,
        height: `${paw.size}px`,
        opacity: paw.opacity
      }"
    >
      <PawPrint class="w-full h-full text-forest/50" />
    </div>
  </div>
</template>
