<template>
  <div class="feature-card">
    <div v-if="videoSrc" class="feature-visual">
      <video :src="videoSrc" autoplay muted loop class="feature-image"></video>
    </div>
    <div class="feature-content" :class="{ 'full-content': !videoSrc }">
      <div class="feature-icon">{{ icon }}</div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: string
  title: string
  description: string
  videoSrc?: string
}

defineProps<Props>()
</script>
