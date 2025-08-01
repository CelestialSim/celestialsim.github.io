<template>
  <section id="contribute" class="section section-alt">
    <div class="container">
      <h2 class="section-title">Contribute</h2>
      <div class="contribute-intro">
        <p>CelestialSim is built by a passionate community of developers who believe in open source
          procedural generation. <strong>Join us and help shape the future of planetary
            simulation!</strong></p>
      </div>
      <div class="team-grid">
        <TeamMember
          name="Calonca"
          role="Main Developer"
          description="Core architect and lead developer of CelestialSim, responsible for the main engine development and system architecture."
          :links="[
            { url: 'https://github.com/Calonca', label: '🐙 GitHub' },
            { url: 'https://www.linkedin.com/in/alessandro-la-conca/', label: '💼 LinkedIn' }
          ]"
        />
        <TeamMember
          name="Tolcrein"
          role="Noise Functions & Visual Design"
          description="Specialized in developing noise functions for terrain generation and creating project showcase images for visual presentation."
          :links="[
            { url: 'https://github.com/Tolcrein', label: '🐙 GitHub' }
          ]"
        />
        <TeamMember
          name="Metto"
          role="Demo & Movement Systems"
          description="Focused on improving player movement systems in demo scenes and enhancing the overall user experience and interaction design."
          :links="[
            { url: 'https://www.linkedin.com/in/emanuele-orlando-0864a5282/', label: '💼 LinkedIn' }
          ]"
        />
        <div class="contribute-card">
          <div class="contribute-icon">🚀</div>
          <h3>Your Name Here?</h3>
          <p class="member-role">Future Contributor</p>
          <p>We're always looking for passionate developers to join our open source community. Whether
            you're interested in Godot development, procedural generation, or AI integration, there's a
            place for you!</p>
          <div class="contribute-actions">
            <a href="https://discord.gg/bfCcWkstRB" class="btn btn-primary">
              💬 Join Discord Community
            </a>
          </div>
          <p class="contribute-note">Start by joining our Discord to discuss ideas, get help with setup,
            and connect with other contributors!</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TeamMember from '../ui/TeamMember.vue'
</script>
