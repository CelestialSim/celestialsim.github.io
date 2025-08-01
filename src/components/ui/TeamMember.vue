<template>
  <div class="team-member">
    <div class="member-avatar"></div>
    <h3>{{ name }}</h3>
    <p class="member-role">{{ role }}</p>
    <p>{{ description }}</p>
    <div v-if="links.length > 0" class="member-links">
      <a 
        v-for="link in links" 
        :key="link.url"
        :href="link.url" 
        target="_blank" 
        rel="noopener noreferrer"
        class="member-link">
        {{ link.label }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Link {
  url: string
  label: string
}

interface Props {
  name: string
  role: string
  description: string
  links: Link[]
}

defineProps<Props>()
</script>
