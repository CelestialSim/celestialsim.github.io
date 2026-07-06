<template>
  <section id="contribute" class="section section-alt">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Contribute</p>
        <h2 class="section-title">Built in the open</h2>
        <p class="section-intro contribute-intro">
          CelestialSim is built by a small, open community. Whether you write code, make art, or just
          love procedural worlds, there's room to help shape where it goes.
        </p>
      </div>
      <div class="team-grid">
        <TeamMember
          name="Calonca"
          role="Main Developer"
          description="Core architect and lead developer, responsible for the engine and system architecture."
          :links="[
            { url: 'https://github.com/Calonca', label: 'GitHub' },
            { url: 'https://www.linkedin.com/in/alessandro-la-conca/', label: 'LinkedIn' }
          ]"
        />
        <TeamMember
          name="Tolcrein"
          role="Noise & Visual Design"
          description="Develops noise functions for terrain generation and creates the project's showcase imagery."
          :links="[
            { url: 'https://github.com/Tolcrein', label: 'GitHub' }
          ]"
        />
        <TeamMember
          name="Metto"
          role="Demo & Movement"
          description="Improves player movement in the demo scenes and the overall feel of interaction."
          :links="[
            { url: 'https://www.linkedin.com/in/emanuele-orlando-0864a5282/', label: 'LinkedIn' }
          ]"
        />
        <TeamMember
          name="BackupMiles"
          role="Documentation"
          description="Documentation and API reference generated from articles and source."
          :links="[
            { url: 'https://github.com/BackupMiles', label: 'GitHub' }
          ]"
        />
        <div class="contribute-card">
          <TorusCanvas />
          <div class="member-avatar" aria-hidden="true"></div>
          <h3>Your name here?</h3>
          <p class="member-role">Future Contributor</p>
          <p>Coders, artists, and worldbuilders welcome. If you're into Godot or procedural worlds,
            there's a place for you.</p>
          <div class="contribute-actions">
            <a href="https://discord.gg/bfCcWkstRB" class="btn btn-secondary">Join the Discord</a>
          </div>
          <p class="contribute-note">Start there to discuss ideas, get help with setup, and meet other
            contributors.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TeamMember from '../ui/TeamMember.vue'
import TorusCanvas from '../ui/TorusCanvas.vue'
</script>
