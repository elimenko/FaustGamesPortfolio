<script setup>
</script>

<template>
  <header class="hero">
    <h1 class="title">Faust Games</h1>
    <p class="subtitle">Game Development Portfolio</p>
    <div class="divider"></div>
    <p class="tagline">Crafting immersive gaming experiences</p>
  </header>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.title {
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #a855f7, #6366f1, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
}

.subtitle {
  font-size: 1.25rem;
  color: #94a3b8;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.divider {
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, #a855f7, #06b6d4);
  margin: 0.5rem 0;
}

.tagline {
  font-size: 1.1rem;
  color: #64748b;
}
</style>
