<template>
  <section id="install" class="section">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Get started</p>
        <h2 class="section-title">Add it to your Godot project</h2>
        <p class="section-intro">
          CelestialSim ships as a prebuilt addon for Windows, macOS, Linux, and Android. No Rust
          toolchain and no shader compiler needed — download, drop it in, and add a node.
        </p>
      </div>

      <div class="steps">
        <div class="step">
          <span class="step-num">01</span>
          <h3>Download the release</h3>
          <p>Grab the latest <code>celestialsim-&lt;version&gt;.zip</code> from the releases page and unzip it.</p>
        </div>
        <div class="step">
          <span class="step-num">02</span>
          <h3>Copy the addon</h3>
          <p>Move <code>addons/celestialsim/</code> into your project's <code>addons/</code> folder and open it in Godot.</p>
        </div>
        <div class="step">
          <span class="step-num">03</span>
          <h3>Add the node</h3>
          <p>Drop a <code>Celestial</code> node into a scene and press play — you have a planet.</p>
        </div>
      </div>

      <div class="get-started-cta">
        <a href="https://github.com/CelestialSim/CelestialSim/releases" class="btn btn-primary">Download for Godot</a>
        <a href="https://celestialsim.github.io/CelestialSim/" class="btn btn-secondary">Read the docs</a>
      </div>
      <div class="dev-note">
        <span class="dot"></span>
        Beta release — expect breaking changes while the APIs settle.
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Get started / install section
</script>
