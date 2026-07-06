<template>
  <article class="cap-card">
    <div v-if="$slots.media" class="cap-media cap-media--diagram">
      <slot name="media" />
    </div>
    <div v-else-if="imageSrc" class="cap-media cap-media--img">
      <img :src="imageSrc" :alt="title" loading="lazy">
    </div>
    <div v-else-if="videoSrc" class="cap-media">
      <video :src="videoSrc" autoplay muted loop playsinline></video>
    </div>
    <div class="cap-body">
      <span class="cap-tag">{{ tag }}</span>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Props {
  tag: string
  title: string
  description: string
  videoSrc?: string
  imageSrc?: string
}

defineProps<Props>()
</script>
