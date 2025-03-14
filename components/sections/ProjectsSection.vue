<template>
  <section id="projects" class="py-12 sm:py-16 bg-surface-light dark:bg-surface-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-text-primary-light dark:text-text-primary-dark sm:text-4xl">Featured Projects</h2>
        <p class="mt-3 sm:mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-text-secondary-light dark:text-text-secondary-dark">
          Showcasing my expertise in building scalable and efficient applications
        </p>
      </div>

      <div class="mt-8 sm:mt-12 grid gap-8 lg:grid-cols-2">
        <!-- Message Queue Integration Service -->
        <div class="bg-background-light dark:bg-background-dark rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <QueueListIcon class="h-8 w-8 text-primary-light dark:text-primary-dark" />
            </div>
            <div class="ml-4">
              <h3 class="text-xl sm:text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
                Message Queue Integration Service
              </h3>
            </div>
          </div>
          <div class="mt-4 space-y-4">
            <p class="text-text-secondary-light dark:text-text-secondary-dark">
              A distributed message processing system built with RabbitMQ for handling high-volume data streams and ensuring reliable message delivery across microservices.
            </p>
            <div class="space-y-2">
              <h4 class="font-medium text-text-primary-light dark:text-text-primary-dark">Key Features:</h4>
              <ul class="ml-4 space-y-1 text-text-secondary-light dark:text-text-secondary-dark">
                <li>• Asynchronous message processing with dead letter queues</li>
                <li>• Automatic retry mechanism for failed messages</li>
                <li>• Real-time monitoring and alerting system</li>
                <li>• Horizontal scaling capabilities</li>
              </ul>
            </div>
            <div class="space-y-2">
              <h4 class="font-medium text-text-primary-light dark:text-text-primary-dark">Tech Stack:</h4>
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 bg-surface-light dark:bg-surface-dark rounded text-sm text-text-secondary-light dark:text-text-secondary-dark">Node.js</span>
                <span class="px-2 py-1 bg-surface-light dark:bg-surface-dark rounded text-sm text-text-secondary-light dark:text-text-secondary-dark">RabbitMQ</span>
                <span class="px-2 py-1 bg-surface-light dark:bg-surface-dark rounded text-sm text-text-secondary-light dark:text-text-secondary-dark">Redis</span>
                <span class="px-2 py-1 bg-surface-light dark:bg-surface-dark rounded text-sm text-text-secondary-light dark:text-text-secondary-dark">Docker</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Real-time Analytics Dashboard -->
        <div class="bg-background-light dark:bg-background-dark rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <ChartBarIcon class="h-8 w-8 text-primary-light dark:text-primary-dark" />
            </div>
            <div class="ml-4">
              <h3 class="text-xl sm:text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
                Real-time Analytics Dashboard
              </h3>
            </div>
          </div>
          <div class="mt-4 space-y-4">
            <p class="text-text-secondary-light dark:text-text-secondary-dark">
              An interactive dashboard for visualizing real-time data analytics, featuring customizable widgets and automated reporting capabilities.
            </p>
            <div class="space-y-2">
              <h4 class="font-medium text-text-primary-light dark:text-text-primary-dark">Key Features:</h4>
              <ul class="ml-4 space-y-1 text-text-secondary-light dark:text-text-secondary-dark">
                <li>• Real-time data visualization with WebSocket</li>
                <li>• Customizable dashboard layouts</li>
                <li>• Automated PDF report generation</li>
                <li>• Data export in multiple formats</li>
              </ul>
            </div>
            <div class="space-y-2">
              <h4 class="font-medium text-text-primary-light dark:text-text-primary-dark">Tech Stack:</h4>
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 bg-surface-light dark:bg-surface-dark rounded text-sm text-text-secondary-light dark:text-text-secondary-dark">Vue.js</span>
                <span class="px-2 py-1 bg-surface-light dark:bg-surface-dark rounded text-sm text-text-secondary-light dark:text-text-secondary-dark">Python</span>
                <span class="px-2 py-1 bg-surface-light dark:bg-surface-dark rounded text-sm text-text-secondary-light dark:text-text-secondary-dark">FastAPI</span>
                <span class="px-2 py-1 bg-surface-light dark:bg-surface-dark rounded text-sm text-text-secondary-light dark:text-text-secondary-dark">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { QueueListIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
</script>
