<template>
  <section id="docs" class="section section-alt">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Docs</p>
        <h2 class="section-title">Compose a planet from layers</h2>
        <p class="section-intro">
          Stack terrain and detail like layers in an image editor, choose how each one is built, and let
          CelestialSim keep the whole planet running smoothly as you move.
        </p>
        <a href="https://celestialsim.github.io/CelestialSim/" class="btn btn-secondary section-head-btn">Read the full docs →</a>
      </div>
      <div class="cap-grid">
        <FeatureCard
          tag="Terrain"
          title="Mesh layers"
          description="Shape your world with stackable layers of height, colour, and surface detail. Tweak a layer and the terrain updates live in the editor — no rebuild, no waiting."
          image-src="/mesh-layers.png"
        />
        <FeatureCard
          tag="Scattering"
          title="Scatter layers"
          description="Spread grass, trees, rocks — any mesh — across the surface in a click. Add a layer per object, and everything places on the GPU and stays put as you zoom in and out, so a planet's worth of detail never slows you down."
          image-src="/scatter-layers.png"
        />
        <FeatureCard
          tag="Generation"
          title="GPU or CPU, your choice"
          description="Build terrain on the GPU when you want raw speed, or on CPU workers when that fits your tools better. Either way the work happens off the main thread, so the editor stays responsive."
        >
          <template #media>
            <GpuFlow />
          </template>
        </FeatureCard>
        <FeatureCard
          tag="Live data"
          title="Nothing blocks the frame"
          description="Feeding in something that takes a moment to load? While it's on the way, a neighbouring tile stands in so there's never a hole. CelestialSim bakes or fetches it in the background and swaps in the real surface the instant it's ready — updating only what changed, so the view never stutters."
        >
          <template #media>
            <AsyncFlow />
          </template>
        </FeatureCard>
        <FeatureCard
          class="cap-card--wide"
          tag="Performance"
          title="Heavy detail, computed once"
          description="Pile on all the noise and detail you like. CelestialSim caches each piece of terrain as it's built and reuses it, so even expensive worlds are worked out once — not recomputed every frame. Fly away and come back, and it's already there, waiting."
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FeatureCard from '../ui/FeatureCard.vue'
import GpuFlow from '../ui/GpuFlow.vue'
import AsyncFlow from '../ui/AsyncFlow.vue'
</script>
