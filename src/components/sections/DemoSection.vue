<template>
  <section id="demo" class="section section-alt">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Web demo</p>
        <h2 class="section-title">Try a taste in the browser</h2>
      </div>
      <div class="demo-card">
        <div class="demo-media">
          <video src="/mode1.webm" autoplay muted loop playsinline></video>
        </div>
        <div class="demo-copy">
          <h3>Run the terrain demo on compute.toys</h3>
          <p>
            A pared-down version of the terrain generator runs live in your browser — no install, just
            open it and fly around. It's a preview of the core generation; the full engine lives in the
            Godot plugin.
          </p>
          <p class="demo-note">Requires a WebGPU-capable browser (Chrome, Edge, or similar).</p>
          <a href="https://compute.toys/view/3159" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Open the demo →</a>
        </div>
      </div>
      <p class="demo-downloads">
        Want the whole planet to explore? Download the full demo for
        <a href="https://github.com/Calonca/CelestialSimDemo/releases">Windows, Linux &amp; Android →</a>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
// Compact web demo — hosted on compute.toys
</script>
