<template>
  <section class="relative min-h-[90vh] overflow-hidden bg-background-light dark:bg-background-dark">
    <div class="max-w-7xl mx-auto h-full">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 h-full items-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <!-- Content -->
        <div class="relative z-10 text-center lg:text-left">
          <h1 class="text-4xl tracking-tight font-extrabold text-text-primary-light dark:text-text-primary-dark sm:text-5xl md:text-6xl xl:text-7xl">
            <span class="block">Hi, I'm Nova</span>
            <span class="block text-primary-light dark:text-primary-dark mt-2">Full Stack Developer</span>
          </h1>
          <p class="mt-4 text-lg text-text-secondary-light dark:text-text-secondary-dark sm:mt-6 sm:text-xl max-w-2xl sm:mx-auto lg:mx-0">
            Passionate about creating beautiful, responsive web applications with 3+ years of experience in modern web technologies. Specializing in Vue.js, Node.js, and cloud architecture.
          </p>
          <div class="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#projects"
              class="btn-primary text-lg px-8 py-4 transform hover:scale-105 transition-transform duration-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              class="btn-secondary text-lg px-8 py-4 transform hover:scale-105 transition-transform duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>

        <!-- Profile Image -->
        <div class="relative flex justify-center lg:justify-end">
          <div class="relative w-full max-w-2xl">
            <!-- Animated background blobs -->
            <div class="absolute top-0 -left-4 w-80 h-80 bg-primary-light dark:bg-primary-dark rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
            <div class="absolute top-0 -right-4 w-80 h-80 bg-accent-primary-light dark:bg-accent-primary-dark rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
            <div class="absolute -bottom-8 left-20 w-80 h-80 bg-accent-secondary-light dark:bg-accent-secondary-dark rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
            
            <!-- Profile image container -->
            <div class="relative transform hover:scale-105 transition-transform duration-500">
              <ProfileImage />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProfileImage from '~/components/ProfileImage.vue'
</script>

<style>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
