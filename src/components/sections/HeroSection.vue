<template>
  <section class="hero">
    <div class="hero-inner">
      <div class="hero-content">
        <p class="hero-eyebrow">
          A Godot plugin<span class="sep">·</span>Free &amp; open source
        </p>
        <h1 class="hero-title">
          Procedural planets,<br><span class="accent">built for your pipeline.</span>
        </h1>
        <p class="hero-sub">
          CelestialSim grows detailed, planet-scale worlds in real time, right inside the Godot editor.
          Generate on the GPU for speed or on CPU workers when it suits your tools — and pull in data as
          it loads, without ever freezing the frame. Made for artists and developers alike.
        </p>
        <div class="hero-cta">
          <a href="#install" class="btn btn-primary">Download for Godot</a>
          <a href="https://github.com/CelestialSim/CelestialSim" class="btn btn-secondary">View on GitHub</a>
          <a href="https://discord.gg/bfCcWkstRB" class="btn btn-ghost">Join Discord →</a>
        </div>
        <div class="spec-bar">
          <span>Real-time in the editor</span>
          <span>GPU or CPU generation</span>
          <span>Streams data without freezing</span>
        </div>
      </div>
      <PlanetVisual />
    </div>
  </section>
</template>

<script setup lang="ts">
import PlanetVisual from '../ui/PlanetVisual.vue'
</script>
