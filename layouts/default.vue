<template>
  <div class="min-h-screen bg-background-light dark:bg-background-dark">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <!-- Logo and Desktop Navigation -->
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <NuxtLink to="/" class="text-xl font-bold text-primary-light dark:text-primary-dark hover:opacity-80 transition-opacity">Nova</NuxtLink>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a 
                v-for="item in navigationItems" 
                :key="item.href"
                :href="item.href"
                class="border-transparent text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark hover:border-primary-light dark:hover:border-primary-dark inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200"
              >
                {{ item.name }}
              </a>
            </div>
          </div>

          <!-- Theme Toggle and Mobile Menu Button -->
          <div class="flex items-center space-x-4">
            <ThemeToggle />
            <button 
              @click="isMenuOpen = !isMenuOpen" 
              type="button" 
              class="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-200"
              aria-expanded="false"
            >
              <span class="sr-only">{{ isMenuOpen ? 'Close menu' : 'Open menu' }}</span>
              <Bars3Icon v-if="!isMenuOpen" class="block h-6 w-6" />
              <XMarkIcon v-else class="block h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <div 
        v-show="isMenuOpen" 
        class="sm:hidden bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-sm"
      >
        <div class="pt-2 pb-3 space-y-1">
          <a 
            v-for="item in navigationItems" 
            :key="item.href"
            :href="item.href"
            @click="isMenuOpen = false"
            class="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark hover:bg-background-light dark:hover:bg-background-dark block px-3 py-2 text-base font-medium transition-colors duration-200"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-16">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-surface-light dark:bg-surface-dark">
      <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center space-y-4">
          <div class="flex space-x-6">
            <a 
              href="https://github.com/novaari2" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-200"
            >
              <span class="sr-only">GitHub</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/novaari" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-200"
            >
              <span class="sr-only">LinkedIn</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
          <p class="text-center text-sm text-text-secondary-light dark:text-text-secondary-dark">
            {{ new Date().getFullYear() }} Nova. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const isMenuOpen = ref(false)

const navigationItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]

// Close mobile menu when window is resized to desktop view
if (process.client) {
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 640 && isMenuOpen.value) {
      isMenuOpen.value = false
    }
  })
}
</script>

<style>
/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 4rem;
}

/* Transition for mobile menu */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
