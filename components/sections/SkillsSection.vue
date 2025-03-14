<template>
  <section class="py-12 sm:py-16 bg-surface-light dark:bg-surface-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-text-primary-light dark:text-text-primary-dark sm:text-4xl">Technical Skills</h2>
        <p class="mt-3 sm:mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-text-secondary-light dark:text-text-secondary-dark">
          <span>Full Stack Developer with expertise in modern web technologies</span>
        </p>
      </div>
      <div class="mt-8 sm:mt-12">
        <div class="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <!-- Frontend Development -->
          <div class="relative p-4 sm:p-6 bg-background-light dark:bg-background-dark rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <dt>
              <div class="absolute flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-md bg-primary-light dark:bg-primary-dark text-white">
                <ComputerDesktopIcon class="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
              </div>
              <p class="ml-14 sm:ml-16 text-base sm:text-lg font-medium text-text-primary-light dark:text-text-primary-dark">Frontend Development</p>
            </dt>
            <dd class="mt-2 ml-14 sm:ml-16 text-sm sm:text-base text-text-secondary-light dark:text-text-secondary-dark">
              <span>Vue.js, Nuxt.js, React, TailwindCSS, JavaScript/TypeScript</span>
            </dd>
          </div>

          <!-- Backend Development -->
          <div class="relative p-4 sm:p-6 bg-background-light dark:bg-background-dark rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <dt>
              <div class="absolute flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-md bg-primary-light dark:bg-primary-dark text-white">
                <ServerIcon class="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
              </div>
              <p class="ml-14 sm:ml-16 text-base sm:text-lg font-medium text-text-primary-light dark:text-text-primary-dark">Backend Development</p>
            </dt>
            <dd class="mt-2 ml-14 sm:ml-16 text-sm sm:text-base text-text-secondary-light dark:text-text-secondary-dark">
              <span>Node.js, Express, NestJS, Python, Django, FastAPI</span>
            </dd>
          </div>

          <!-- Database & Cloud -->
          <div class="relative p-4 sm:p-6 bg-background-light dark:bg-background-dark rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <dt>
              <div class="absolute flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-md bg-primary-light dark:bg-primary-dark text-white">
                <CloudIcon class="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
              </div>
              <p class="ml-14 sm:ml-16 text-base sm:text-lg font-medium text-text-primary-light dark:text-text-primary-dark">Database & Cloud</p>
            </dt>
            <dd class="mt-2 ml-14 sm:ml-16 text-sm sm:text-base text-text-secondary-light dark:text-text-secondary-dark">
              <span>PostgreSQL, MongoDB, Redis, AWS, Docker, Kubernetes</span>
            </dd>
          </div>

          <!-- Tools & Practices -->
          <div class="relative p-4 sm:p-6 bg-background-light dark:bg-background-dark rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <dt>
              <div class="absolute flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-md bg-primary-light dark:bg-primary-dark text-white">
                <WrenchScrewdriverIcon class="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
              </div>
              <p class="ml-14 sm:ml-16 text-base sm:text-lg font-medium text-text-primary-light dark:text-text-primary-dark">Tools & Practices</p>
            </dt>
            <dd class="mt-2 ml-14 sm:ml-16 text-sm sm:text-base text-text-secondary-light dark:text-text-secondary-dark">
              <span>Git, CI/CD, Agile, TDD, Code Review, Documentation</span>
            </dd>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ComputerDesktopIcon, ServerIcon, CloudIcon, WrenchScrewdriverIcon } from '@heroicons/vue/24/outline'
</script>
