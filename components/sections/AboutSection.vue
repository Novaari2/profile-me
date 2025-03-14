<template>
  <section class="py-12 sm:py-16 bg-background-light dark:bg-background-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-text-primary-light dark:text-text-primary-dark sm:text-4xl">About Me</h2>
        <p class="mt-3 sm:mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-text-secondary-light dark:text-text-secondary-dark">
          Passionate Full Stack Developer with a focus on creating scalable web applications
        </p>
      </div>

      <div class="mt-8 sm:mt-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <!-- Personal Background -->
          <div class="space-y-4 sm:space-y-6">
            <h3 class="text-xl sm:text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
              Background & Journey
            </h3>
            <div class="prose prose-lg dark:prose-invert">
              <p class="text-text-secondary-light dark:text-text-secondary-dark">
                With over 3 years of experience in web development, I specialize in building robust and scalable applications using modern technologies. My journey began with a Bachelor's Degree in Computer Science, which laid the foundation for my technical expertise.
              </p>
              <p class="text-text-secondary-light dark:text-text-secondary-dark mt-4">
                I'm passionate about creating efficient backend systems and intuitive user interfaces. My experience spans across various domains, from developing RESTful APIs to implementing real-time features and optimizing application performance.
              </p>
            </div>
          </div>

          <!-- Expertise & Interests -->
          <div class="space-y-4 sm:space-y-6">
            <h3 class="text-xl sm:text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
              Expertise & Interests
            </h3>
            <div class="space-y-4">
              <!-- Current Focus -->
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <LightBulbIcon class="h-6 w-6 text-primary-light dark:text-primary-dark" />
                </div>
                <div class="ml-3">
                  <h4 class="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">Current Focus</h4>
                  <p class="mt-1 text-text-secondary-light dark:text-text-secondary-dark">
                    Specializing in Vue.js, Nuxt, Node.js, and Python for building modern web applications
                  </p>
                </div>
              </div>

              <!-- Areas of Interest -->
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <StarIcon class="h-6 w-6 text-primary-light dark:text-primary-dark" />
                </div>
                <div class="ml-3">
                  <h4 class="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">Areas of Interest</h4>
                  <p class="mt-1 text-text-secondary-light dark:text-text-secondary-dark">
                    Web Development, UI/UX Design, Cloud Architecture, and System Design
                  </p>
                </div>
              </div>

              <!-- Key Activities -->
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <ClipboardDocumentCheckIcon class="h-6 w-6 text-primary-light dark:text-primary-dark" />
                </div>
                <div class="ml-3">
                  <h4 class="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">Key Activities</h4>
                  <ul class="mt-1 space-y-2 text-text-secondary-light dark:text-text-secondary-dark">
                    <li>• Developing scalable backend services and APIs</li>
                    <li>• Implementing responsive and accessible frontend interfaces</li>
                    <li>• Optimizing application performance and user experience</li>
                    <li>• Collaborating with teams using agile methodologies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { LightBulbIcon, StarIcon, ClipboardDocumentCheckIcon } from '@heroicons/vue/24/outline'
</script>
