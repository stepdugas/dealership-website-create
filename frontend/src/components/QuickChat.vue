<!--
  QuickChat — floating "Quick Question?" widget.
  Lightweight Netlify form so visitors can ask a fast question without
  committing to the full inquiry form.
-->
<template>
  <!-- Floating trigger button -->
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

    <!-- Chat panel -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 translate-y-4 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-4 scale-95"
    >
      <div
        v-if="open"
        class="w-80 rounded-2xl border border-white/15 bg-dark-800 shadow-2xl overflow-hidden"
      >
        <!-- Panel header -->
        <div class="bg-primary-600 px-5 py-4 flex items-center justify-between">
          <div>
            <p class="text-white font-semibold text-sm">Quick Question?</p>
            <p class="text-primary-200 text-xs mt-0.5">I'll reply within one business day</p>
          </div>
          <button @click="open = false" class="text-primary-200 hover:text-white transition-colors ml-2 shrink-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Success -->
        <div v-if="submitted" class="px-5 py-8 text-center">
          <svg class="w-10 h-10 text-emerald-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <p class="text-white font-semibold text-sm">Got it — talk soon!</p>
          <p class="text-gray-400 text-xs mt-1">I'll email you back within one business day.</p>
        </div>

        <!-- Form -->
        <form
          v-else
          @submit.prevent="send"
          name="quick-question"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          class="px-5 py-5 space-y-3"
        >
          <input type="hidden" name="form-name" value="quick-question" />
          <div class="hidden"><input name="bot-field" /></div>

          <input
            v-model="form.name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            class="chat-input"
          />
          <input
            v-model="form.email"
            name="email"
            type="email"
            required
            placeholder="Your email"
            class="chat-input"
          />
          <textarea
            v-model="form.question"
            name="question"
            rows="3"
            required
            placeholder="What's on your mind?"
            class="chat-input resize-none"
          />

          <p v-if="error" class="text-red-400 text-xs">{{ error }}</p>

          <button
            type="submit"
            :disabled="sending"
            class="w-full bg-primary-600 hover:bg-primary-700 disabled:opacity-50 text-white text-sm font-semibold rounded-xl py-2.5 transition-colors"
          >
            {{ sending ? 'Sending…' : 'Send Question' }}
          </button>
        </form>
      </div>
    </Transition>

    <!-- Bubble button -->
    <button
      @click="open = !open"
      class="w-14 h-14 rounded-full bg-primary-600 hover:bg-primary-700 shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
      :aria-label="open ? 'Close chat' : 'Ask a quick question'"
    >
      <!-- Chat icon when closed -->
      <svg v-if="!open" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
      </svg>
      <!-- X icon when open -->
      <svg v-else class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const open      = ref(false)
const submitted = ref(false)
const sending   = ref(false)
const error     = ref('')
const form      = ref({ name: '', email: '', question: '' })

async function send() {
  sending.value = true
  error.value   = ''
  try {
    const body = new URLSearchParams({
      'form-name': 'quick-question',
      name:         form.value.name,
      email:        form.value.email,
      question:     form.value.question,
    })
    const res = await fetch('/', {
      method:  'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body:    body.toString(),
    })
    if (!res.ok) throw new Error()
    submitted.value = true
  } catch {
    error.value = 'Something went wrong — please try again.'
  } finally {
    sending.value = false
  }
}
</script>

<style scoped>
.chat-input {
  @apply w-full bg-dark-700 border border-white/10 text-white placeholder-gray-600
         rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500
         focus:border-transparent transition;
}
</style>
