<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Open Source Procedural Planet Simulation</h1>
      <p class="hero-subtitle">
        Experience real-time planetary generation with dynamic Level-of-Detail rendering,
        ecosystem simulation, and AI-assisted terrain editing. <strong>Free & Open Source for
          Godot.</strong>
      </p>
      <div class="hero-buttons">
        <a href="#demo" class="btn btn-primary">Try Demo</a>
        <a href="https://github.com/CelestialSim/web-demo" class="btn btn-secondary">⭐ Star Demo on
          GitHub</a>
        <a href="https://discord.gg/bfCcWkstRB" class="btn btn-accent">💬 Join Discord</a>
      </div>
    </div>
    <PlanetVisual />
  </section>
</template>

<script setup lang="ts">
import PlanetVisual from '../ui/PlanetVisual.vue'
</script>
