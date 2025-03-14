<template>
  <main class="scroll-smooth">
    <section id="hero">
      <HeroSection />
    </section>
    <section id="about">
      <AboutSection />
    </section>
    <section id="skills">
      <SkillsSection />
    </section>
    <section id="projects">
      <ProjectsSection />
    </section>
    <section id="contact">
      <ContactSection />
    </section>
  </main>
</template>

<script setup>
// Import all section components
import HeroSection from '~/components/sections/HeroSection.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import SkillsSection from '~/components/sections/SkillsSection.vue'
import ProjectsSection from '~/components/sections/ProjectsSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'

definePageMeta({
  layout: 'default'
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
