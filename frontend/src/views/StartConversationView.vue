<!--
  StartConversationView — inquiry form + how-it-works steps.
  Standalone layout (no PageLayout) to match the landing page aesthetic.
-->
<template>
  <div class="min-h-screen bg-dark-900 flex flex-col">

    <!-- ── Minimal Header ─────────────────────────────────────────────────── -->
    <header class="border-b border-white/10 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto w-full">
      <RouterLink to="/" class="text-white font-bold text-lg tracking-tight hover:text-primary-400 transition-colors">
        {{ brand }}
      </RouterLink>
      <RouterLink to="/demo" class="text-gray-400 text-sm hover:text-white transition-colors">
        View Demo →
      </RouterLink>
    </header>

    <div class="flex-1 max-w-5xl mx-auto w-full px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

      <!-- ── Left: Steps ──────────────────────────────────────────────────── -->
      <div>
        <span class="inline-block bg-primary-600/20 text-primary-400 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-5">
          How it works
        </span>
        <h1 class="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
          Let's get your dealership online
        </h1>
        <div class="flex flex-col sm:flex-row gap-3 mb-10">
          <div class="flex-1 rounded-xl border border-white/10 bg-dark-800 px-4 py-3 text-sm">
            <p class="text-white font-semibold">Plan A</p>
            <p class="text-gray-400 mt-0.5">$1,000 setup + $50/mo</p>
          </div>
          <div class="flex-1 rounded-xl border border-primary-500/50 bg-dark-800 px-4 py-3 text-sm">
            <p class="text-primary-400 font-semibold">Plan B</p>
            <p class="text-gray-400 mt-0.5">$99/mo, no upfront cost</p>
          </div>
        </div>

        <ol class="space-y-8">
          <li v-for="(step, i) in steps" :key="i" class="flex gap-4">
            <div class="flex-shrink-0 w-9 h-9 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm mt-0.5">
              {{ i + 1 }}
            </div>
            <div>
              <p class="text-white font-semibold">{{ step.title }}</p>
              <p class="text-gray-400 text-sm mt-1 leading-relaxed">{{ step.desc }}</p>
            </div>
          </li>
        </ol>

        <div class="mt-10 rounded-xl border border-white/10 bg-dark-800 p-5 text-sm text-gray-400">
          <p><strong class="text-white">Questions before filling out the form?</strong></p>
          <p class="mt-1">Email me directly at <a href="mailto:stepdugas@gmail.com" class="text-primary-400 hover:text-primary-300 transition-colors">stepdugas@gmail.com</a> and I'll get back to you fast.</p>
        </div>
      </div>

      <!-- ── Right: Form ─────────────────────────────────────────────────── -->
      <div class="bg-dark-800 rounded-2xl border border-white/10 p-8">

        <!-- Success state -->
        <div v-if="submitted" class="py-6">
          <div class="text-center mb-6">
            <svg class="w-12 h-12 text-emerald-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <p class="text-white font-bold text-xl">You're on my radar!</p>
            <p class="text-gray-400 text-sm mt-2">I'll reach out within one business day. Talk soon.</p>
          </div>

          <!-- Payment CTA -->
          <div class="rounded-xl border border-white/10 bg-dark-900 p-5 text-center">
            <p class="text-white font-semibold text-sm mb-1">Want to lock in your spot now?</p>
            <p class="text-gray-400 text-xs mb-4">Pay securely via Stripe — no obligation until we've talked and you're ready.</p>

            <!-- Plan A selected or not sure -->
            <template v-if="form.planPreference !== 'Plan B'">
              <a
                href="https://buy.stripe.com/5kQ00jeMV94Xc0F32Tfw403"
                target="_blank"
                rel="noopener"
                class="block w-full btn-secondary py-3 text-sm font-semibold text-center mb-2"
              >
                Pay Plan A Setup — $1,000
              </a>
              <p class="text-gray-600 text-xs">$50/month hosting starts after your site goes live</p>
            </template>

            <!-- Plan B selected -->
            <template v-if="form.planPreference === 'Plan B'">
              <a
                href="https://buy.stripe.com/7sYeVd0W52Gz1m19rhfw401"
                target="_blank"
                rel="noopener"
                class="block w-full btn-primary py-3 text-sm font-semibold text-center mb-2"
              >
                Start Plan B — $99/month
              </a>
              <p class="text-gray-600 text-xs">12-month minimum · cancel after 12 months</p>
            </template>

            <!-- Not sure -->
            <template v-if="form.planPreference === 'Not sure' || !form.planPreference">
              <div class="flex flex-col gap-2 mt-2">
                <a
                  href="https://buy.stripe.com/5kQ00jeMV94Xc0F32Tfw403"
                  target="_blank"
                  rel="noopener"
                  class="block w-full btn-secondary py-2.5 text-xs font-semibold text-center"
                >
                  Plan A — $1,000 setup + $50/mo
                </a>
                <a
                  href="https://buy.stripe.com/7sYeVd0W52Gz1m19rhfw401"
                  target="_blank"
                  rel="noopener"
                  class="block w-full btn-primary py-2.5 text-xs font-semibold text-center"
                >
                  Plan B — $99/month
                </a>
              </div>
            </template>
          </div>

          <RouterLink to="/" class="mt-5 inline-block text-primary-400 text-sm hover:text-primary-300 transition-colors">
            ← Back to home
          </RouterLink>
        </div>

        <!-- Form -->
        <form
          v-else
          @submit.prevent="submitForm"
          name="dealer-inquiry"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          class="space-y-5"
        >
          <div class="mb-6">
            <h2 class="text-white text-xl font-bold">Start the conversation</h2>
            <p class="text-gray-400 text-sm mt-1">Fill this out and I'll be in touch within one business day.</p>
          </div>

          <!-- Netlify hidden fields -->
          <input type="hidden" name="form-name" value="dealer-inquiry" />
          <div class="hidden">
            <label>Don't fill this out: <input name="bot-field" /></label>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">Your Name *</label>
              <input
                v-model="form.name"
                name="name"
                type="text"
                required
                placeholder="Jane Smith"
                class="landing-input"
              />
            </div>
            <div>
              <label class="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">Dealership Name *</label>
              <input
                v-model="form.dealership"
                name="dealership"
                type="text"
                required
                placeholder="Smith's Auto Sales"
                class="landing-input"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">Email Address *</label>
              <input
                v-model="form.email"
                name="email"
                type="email"
                required
                placeholder="jane@yourdealership.com"
                class="landing-input"
              />
            </div>
            <div>
              <label class="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">Phone Number</label>
              <input
                v-model="form.phone"
                name="phone"
                type="tel"
                placeholder="(555) 867-5309"
                class="landing-input"
              />
            </div>
          </div>

          <div>
            <label class="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">Which plan are you leaning toward?</label>
            <div class="flex gap-3">
              <label
                class="flex-1 flex flex-col items-center justify-center cursor-pointer rounded-xl border px-3 py-3 text-center transition-colors"
                :class="form.planPreference === 'Plan A' ? 'border-primary-500 bg-primary-600/20' : 'border-white/10 hover:border-white/25'"
              >
                <input type="radio" v-model="form.planPreference" name="planPreference" value="Plan A" class="sr-only" />
                <span class="text-xs font-semibold" :class="form.planPreference === 'Plan A' ? 'text-primary-400' : 'text-white'">Plan A</span>
                <span class="text-gray-500 text-xs mt-0.5">$1,000 + $50/mo</span>
              </label>
              <label
                class="flex-1 flex flex-col items-center justify-center cursor-pointer rounded-xl border px-3 py-3 text-center transition-colors"
                :class="form.planPreference === 'Plan B' ? 'border-primary-500 bg-primary-600/20' : 'border-white/10 hover:border-white/25'"
              >
                <input type="radio" v-model="form.planPreference" name="planPreference" value="Plan B" class="sr-only" />
                <span class="text-xs font-semibold" :class="form.planPreference === 'Plan B' ? 'text-primary-400' : 'text-white'">Plan B</span>
                <span class="text-gray-500 text-xs mt-0.5">$99/mo</span>
              </label>
              <label
                class="flex-1 flex flex-col items-center justify-center cursor-pointer rounded-xl border px-3 py-3 text-center transition-colors"
                :class="form.planPreference === 'Not sure' ? 'border-primary-500 bg-primary-600/20' : 'border-white/10 hover:border-white/25'"
              >
                <input type="radio" v-model="form.planPreference" name="planPreference" value="Not sure" class="sr-only" />
                <span class="text-xs font-semibold" :class="form.planPreference === 'Not sure' ? 'text-primary-400' : 'text-white'">Not sure</span>
                <span class="text-gray-500 text-xs mt-0.5">Help me decide</span>
              </label>
            </div>
          </div>

          <div>
            <label class="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">Best Way to Reach You</label>
            <div class="flex gap-3">
              <label v-for="option in ['Email', 'Text', 'Call']" :key="option"
                class="flex-1 flex items-center justify-center gap-2 cursor-pointer rounded-xl border px-4 py-3 text-sm font-medium transition-colors"
                :class="form.contactPreference === option
                  ? 'border-primary-500 bg-primary-600/20 text-primary-400'
                  : 'border-white/10 text-gray-400 hover:border-white/25'"
              >
                <input type="radio" v-model="form.contactPreference" name="contactPreference" :value="option" class="sr-only" />
                {{ option }}
              </label>
            </div>
          </div>

          <div>
            <label class="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">Message</label>
            <textarea
              v-model="form.message"
              name="message"
              rows="4"
              placeholder="Tell me a little about your dealership — how many cars on the lot, what you're currently using for a website, anything that's important to you..."
              class="landing-input resize-none"
            />
          </div>

          <button
            type="submit"
            :disabled="submitting"
            class="btn-primary w-full py-3.5 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ submitting ? 'Sending…' : 'Send My Message' }}
          </button>

          <p v-if="formError" class="text-red-400 text-sm text-center">{{ formError }}</p>

          <p class="text-gray-600 text-xs text-center">
            No spam. No pressure. Just a real conversation about your website.
          </p>
        </form>
      </div>
    </div>

    <!-- ── Footer ──────────────────────────────────────────────────────────── -->
    <footer class="border-t border-white/10 py-8 px-4 text-center text-gray-600 text-xs">
      <p>&copy; {{ new Date().getFullYear() }} {{ brand }}. All rights reserved.</p>
    </footer>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { usePageMeta } from '../composables/usePageMeta'

const brand = import.meta.env.VITE_BUSINESS_BRAND || 'Car Dealership Website Builder'

usePageMeta(() => ({
  title:       'Start the Conversation — Get Your Dealership Website Built',
  description: 'Ready to get your dealership online? Fill out a quick form and I\'ll reach out within one business day. $1,000 setup, $50/month hosting, live in 2 weeks.',
  path:        '/get-started',
}))

// ── Steps (mirrored from landing page) ────────────────────────────────────────
const steps = [
  { title: 'Fill out the inquiry form', desc: 'Takes less than 2 minutes. Tell me the basics about your dealership.' },
  { title: 'We chat',                   desc: 'I reach out within one business day to go over your needs and answer any questions.' },
  { title: 'Sign off & pay',            desc: 'Fill out the client intake form with your details and pay a one-time $1,000 setup fee via Stripe.' },
  { title: 'I build your site',         desc: 'A custom site built around your brand, inventory, and location — done within 2 weeks.' },
  { title: 'Go live',                   desc: 'Your site launches. Ongoing hosting is just $50/month, cancel anytime.' },
]

// ── Form ──────────────────────────────────────────────────────────────────────
const form = ref({ name: '', email: '', dealership: '', phone: '', planPreference: '', contactPreference: '', message: '' })
const submitting = ref(false)
const submitted  = ref(false)
const formError  = ref('')

async function submitForm() {
  submitting.value = true
  formError.value  = ''
  try {
    const body = new URLSearchParams({
      'form-name':       'dealer-inquiry',
      name:               form.value.name,
      email:              form.value.email,
      dealership:         form.value.dealership,
      phone:              form.value.phone,
      planPreference:     form.value.planPreference,
      contactPreference:  form.value.contactPreference,
      message:            form.value.message,
    })
    const res = await fetch('/', {
      method:  'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body:    body.toString(),
    })
    if (!res.ok) throw new Error('Network response was not ok')
    submitted.value = true
  } catch {
    formError.value = 'Something went wrong. Please try again or email me directly.'
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.landing-input {
  @apply w-full bg-dark-700 border border-white/15 text-white placeholder-gray-600
         rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500
         focus:border-transparent transition;
}
.btn-primary {
  @apply inline-flex items-center justify-center rounded-xl bg-primary-600 text-white
         font-semibold hover:bg-primary-700 transition-colors duration-150;
}
</style>
