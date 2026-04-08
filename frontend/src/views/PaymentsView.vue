<template>
  <PageLayout>
    <section class="py-24 min-h-screen bg-gray-50">
      <div class="max-w-2xl mx-auto px-4 text-center">
        <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-12">
          <div class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
            </svg>
          </div>
          <h1 class="text-2xl font-bold text-gray-900 mb-3">Payments</h1>
          <p class="text-gray-500">Online payment processing coming soon. This page will allow clients to make payments securely.</p>
        </div>
      </div>
    </section>
  </PageLayout>
</template>

<script setup>
import PageLayout from '../components/layout/PageLayout.vue'
</script>
