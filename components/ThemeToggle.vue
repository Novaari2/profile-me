<template>
  <button
    @click="toggleColorScheme"
    class="relative p-3 rounded-full bg-surface-light dark:bg-surface-dark shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
    aria-label="Toggle color scheme"
  >
    <div class="relative">
      <!-- Sun icon for dark mode -->
      <svg
        v-if="colorScheme === 'dark'"
        class="w-6 h-6 text-primary-light transform transition-transform duration-300 group-hover:rotate-90"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      <!-- Moon icon for light mode -->
      <svg
        v-else
        class="w-6 h-6 text-primary-light dark:text-primary-dark transform transition-transform duration-300 group-hover:-rotate-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </div>
    <!-- Background glow effect -->
    <div class="absolute inset-0 rounded-full bg-gradient-to-r from-accent-primary-light/20 to-accent-secondary-light/20 dark:from-accent-primary-dark/20 dark:to-accent-secondary-dark/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </button>
</template>

<script setup>
const colorScheme = useCookie('color-scheme', {
  maxAge: 60 * 60 * 24 * 365, // 1 year
  sameSite: true
})

const toggleColorScheme = () => {
  colorScheme.value = colorScheme.value === 'dark' ? 'light' : 'dark'
  updateColorScheme()
}

const updateColorScheme = () => {
  const root = document.documentElement
  if (colorScheme.value === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

// Initialize on mount
onMounted(() => {
  if (!colorScheme.value) {
    colorScheme.value = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  updateColorScheme()

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!colorScheme.value) {
      colorScheme.value = e.matches ? 'dark' : 'light'
      updateColorScheme()
    }
  })
})
</script>

<style>
/* Add smooth transitions for theme changes */
:root {
  @apply transition-colors duration-300;
}

* {
  @apply transition-colors duration-300;
}

/* Theme toggle animations */
.theme-toggle-enter-active,
.theme-toggle-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.theme-toggle-enter-from,
.theme-toggle-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
