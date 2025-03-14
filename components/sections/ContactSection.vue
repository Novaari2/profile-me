<template>
  <section id="contact" class="py-12 sm:py-16 bg-background-light dark:bg-background-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="section-title">Get in Touch</h2>
        <p class="section-subtitle">
          Let's connect and discuss your next project
        </p>
      </div>

      <div class="mt-8 sm:mt-12 max-w-3xl mx-auto">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <!-- Contact Form -->
          <div class="bg-surface-light dark:bg-surface-dark rounded-lg shadow-sm p-6 sm:p-8">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark">Name</label>
                <div class="mt-1">
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    v-model="formData.name"
                    class="form-input"
                    required
                  >
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark">Email</label>
                <div class="mt-1">
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    v-model="formData.email"
                    class="form-input"
                    required
                  >
                </div>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark">Message</label>
                <div class="mt-1">
                  <textarea 
                    name="message" 
                    id="message" 
                    rows="4" 
                    v-model="formData.message"
                    class="form-input"
                    required
                  ></textarea>
                </div>
              </div>

              <div>
                <button 
                  type="submit"
                  class="btn-primary w-full"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="bg-surface-light dark:bg-surface-dark rounded-lg shadow-sm p-6 sm:p-8">
            <h3 class="text-lg font-medium text-text-primary-light dark:text-text-primary-dark">Connect with Me</h3>
            <p class="mt-2 text-text-secondary-light dark:text-text-secondary-dark">
              Feel free to reach out through any of these channels
            </p>

            <dl class="mt-8 space-y-6">
              <!-- WhatsApp -->
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-primary-light dark:text-primary-dark" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div class="ml-3 text-text-secondary-light dark:text-text-secondary-dark">
                  <dt class="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">WhatsApp</dt>
                  <dd class="mt-1">
                    <a 
                      :href="whatsappUrl" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      class="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 dark:text-green-500 dark:hover:text-green-400"
                    >
                      <span>Chat on WhatsApp</span>
                      <ArrowTopRightOnSquareIcon class="h-4 w-4" />
                    </a>
                  </dd>
                </div>
              </div>

              <div class="flex">
                <div class="flex-shrink-0">
                  <EnvelopeIcon class="h-6 w-6 text-primary-light dark:text-primary-dark" />
                </div>
                <div class="ml-3 text-text-secondary-light dark:text-text-secondary-dark">
                  <dt class="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">Email</dt>
                  <dd class="mt-1">
                    <a 
                      href="mailto:novaari@gmail.com" 
                      class="hover:text-primary-light dark:hover:text-primary-dark inline-flex items-center space-x-2"
                    >
                      <span>novaari@gmail.com</span>
                      <ArrowTopRightOnSquareIcon class="h-4 w-4" />
                    </a>
                  </dd>
                </div>
              </div>

              <div class="flex">
                <div class="flex-shrink-0">
                  <CodeBracketIcon class="h-6 w-6 text-primary-light dark:text-primary-dark" />
                </div>
                <div class="ml-3 text-text-secondary-light dark:text-text-secondary-dark">
                  <dt class="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">GitHub</dt>
                  <dd class="mt-1">
                    <a href="https://github.com/novaari2" target="_blank" rel="noopener noreferrer" class="hover:text-primary-light dark:hover:text-primary-dark">
                      github.com/novaari2
                    </a>
                  </dd>
                </div>
              </div>

              <div class="flex">
                <div class="flex-shrink-0">
                  <UserIcon class="h-6 w-6 text-primary-light dark:text-primary-dark" />
                </div>
                <div class="ml-3 text-text-secondary-light dark:text-text-secondary-dark">
                  <dt class="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">LinkedIn</dt>
                  <dd class="mt-1">
                    <a href="https://linkedin.com/in/novaari" target="_blank" rel="noopener noreferrer" class="hover:text-primary-light dark:hover:text-primary-dark">
                      linkedin.com/in/novaari
                    </a>
                  </dd>
                </div>
              </div>
            </dl>

            <div class="mt-8">
              <h4 class="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">Availability</h4>
              <p class="mt-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                I'm currently available for freelance work and interesting projects. Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { EnvelopeIcon, CodeBracketIcon, UserIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const whatsappNumber = '+6285346787954'
const whatsappUrl = computed(() => {
  const message = encodeURIComponent('Hi Nova, I would like to discuss a project with you!')
  return `https://wa.me/${whatsappNumber}?text=${message}`
})

const handleSubmit = () => {
  // Here you would typically send the form data to your backend
  console.log('Form submitted:', formData.value)
  // Reset form after submission
  formData.value = {
    name: '',
    email: '',
    message: ''
  }
}
</script>
