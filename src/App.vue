<script setup lang="ts">
import { onMounted } from 'vue'
import { useScrollEffects } from './composables/useScrollEffects'
import { useParticles } from './composables/useParticles'
import { useNavigation } from './composables/useNavigation'
import { useRedditEmbeds } from './composables/useRedditEmbeds'

// Layout Components
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'

// Section Components
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import FeaturesSection from './components/sections/FeaturesSection.vue'
import DemoSection from './components/sections/DemoSection.vue'
import GodotSection from './components/sections/GodotSection.vue'
import NewsSection from './components/sections/NewsSection.vue'
import ContributeSection from './components/sections/ContributeSection.vue'

onMounted(async () => {
  const { initScrollEffects } = useScrollEffects()
  const { initParticleSystem } = useParticles()
  const { handleButtonHighlight, initTypingEffect, initPerformanceMonitoring } = useNavigation()
  const { initLazyRedditEmbeds } = useRedditEmbeds()

  // Initialize all systems
  const cleanupScrollEffects = await initScrollEffects()
  const cleanupParticles = initParticleSystem()
  
  handleButtonHighlight()
  initTypingEffect()
  initPerformanceMonitoring()
  initLazyRedditEmbeds()

  // Cleanup on unmount
  return () => {
    cleanupScrollEffects()
    cleanupParticles()
  }
})
</script>

<template>
  <div>
    <AppHeader />

    <main>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <DemoSection />
      <GodotSection />
      <NewsSection />
      <ContributeSection />
    </main>

    <AppFooter />
  </div>
</template>

<style>
/* Global styles are imported in main.ts from styles.css */
</style>
