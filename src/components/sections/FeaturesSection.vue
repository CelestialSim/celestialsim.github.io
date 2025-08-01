<template>
  <section id="features" class="section section-alt">
    <div class="container">
      <h2 class="section-title">Key Features</h2>
      <div class="features-grid">
        <FeatureCard
          icon="🌍"
          title="Dynamic LOD"
          description="Adaptive Level-of-Detail rendering that automatically adjusts mesh complexity based on camera distance and viewing angle for optimal performance."
          video-src="/mode1.webm"
        />
        <FeatureCard
          icon="🌊"
          title="Interactive Simulation"
          description="Real-time interactive environments with dynamic water bodies, realistic rendering, and responsive terrain modifications."
          video-src="/mode2.webm"
        />
        <FeatureCard
          icon="🌲"
          title="Example-Based Procedural Generation"
          description="Intelligent procedural content generation using example patterns for terrain similarity, biome distribution, and realistic ecosystem placement."
          video-src="/mode3.webm"
        />
        <FeatureCard
          icon="⚡"
          title="GPU Acceleration"
          description="Compute shader-based generation and simulation for maximum performance and scalability across different hardware configurations."
        />
        <FeatureCard
          icon="🤖"
          title="AI First"
          description="Leveraging advanced embedding technologies to intelligently generate, search, and organize 3D objects and terrain features for enhanced procedural generation."
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FeatureCard from '../ui/FeatureCard.vue'
</script>
