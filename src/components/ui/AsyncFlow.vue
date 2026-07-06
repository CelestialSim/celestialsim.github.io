<template>
  <svg class="flowchart" viewBox="0 0 560 200" role="img"
    aria-label="Data-flow: a new chunk whose surface isn't ready is covered by a neighbouring resident chunk's baked texture (a stand-in), while off the main thread a CPU worker bakes the surface or map tiles stream in; when the data is ready it's uploaded to the GPU, which renders the real chunk. Only chunks whose data just arrived re-bake.">
    <defs>
      <marker id="asy-ah-gpu" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
        <path class="mk-gpu" d="M0 0 L6 3 L0 6 Z" />
      </marker>
      <marker id="asy-ah-cpu" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
        <path class="mk-cpu" d="M0 0 L6 3 L0 6 Z" />
      </marker>
    </defs>

    <!-- new chunk forks: stand-in (shown now) + off-thread work -->
    <path class="flow flow-gpu" marker-end="url(#asy-ah-gpu)" d="M128 86 C 160 86 166 52 194 52" />
    <path class="flow flow-cpu" marker-end="url(#asy-ah-cpu)" d="M128 106 C 160 106 166 146 194 146" />
    <!-- stand-in shown until ready (ghost) -->
    <path class="flow flow-ghost" d="M382 52 C 404 52 406 84 420 86" />
    <!-- worker ready -> render -->
    <path class="flow flow-cpu" marker-end="url(#asy-ah-cpu)" d="M382 146 C 404 146 406 108 420 106" />

    <!-- new chunk -->
    <rect class="node" x="10" y="70" width="118" height="52" rx="8" />
    <text class="t-title" x="69" y="92" text-anchor="middle">New chunk</text>
    <text class="t-sub" x="69" y="106" text-anchor="middle">surface not ready</text>

    <!-- stand-in -->
    <rect class="node node-gpu" x="194" y="28" width="188" height="48" rx="8" />
    <text class="t-title t-gpu" x="288" y="47" text-anchor="middle">GPU draws a stand-in</text>
    <text class="t-sub" x="288" y="61" text-anchor="middle">a neighbour's baked tile</text>

    <!-- off-thread -->
    <rect class="node node-cpu" x="194" y="124" width="188" height="48" rx="8" />
    <text class="t-title t-cpu" x="288" y="143" text-anchor="middle">off the main thread</text>
    <text class="t-sub" x="288" y="157" text-anchor="middle">worker bake · tile fetch</text>

    <!-- GPU renders real -->
    <rect class="node node-gpu" x="420" y="70" width="132" height="52" rx="8" />
    <text class="t-title" x="486" y="92" text-anchor="middle">GPU renders</text>
    <text class="t-sub" x="486" y="106" text-anchor="middle">the real chunk</text>

    <!-- footer -->
    <text class="t-mid" x="280" y="190" text-anchor="middle">only chunks whose data just arrived re-bake</text>
  </svg>
</template>

<script setup lang="ts">
// Async stand-in data-flow diagram for the "Nothing blocks the frame" card.
</script>
