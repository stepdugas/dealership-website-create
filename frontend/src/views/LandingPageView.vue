<!--
  LandingPageView — Stephanie's business landing page.
  This is NOT the dealership demo. It is the entry point for prospective dealer clients.
  Standalone layout — does not use PageLayout (no dealership header/footer).

  Three paths:
    1. View Demo Website  → /inventory
    2. Free VIN Decoder   → /vin-decoder
    3. Get Started        → scrolls to #contact-form
-->
<template>
  <div class="min-h-screen bg-dark-900 flex flex-col">

    <!-- ── Minimal Header ─────────────────────────────────────────────────── -->
    <header class="border-b border-white/10 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto w-full">
      <span class="text-white font-bold text-lg tracking-tight">{{ brand }}</span>
      <a href="#contact-form"
        class="btn-primary text-sm py-2 px-5">
        Get Started
      </a>
    </header>

    <!-- ── Hero ──────────────────────────────────────────────────────────────── -->
    <section class="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
      <span class="inline-block bg-primary-600/20 text-primary-400 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
        Custom Dealership Websites
      </span>
      <h1 class="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-3xl">
        Your Dealership Deserves a Website That Actually Works
      </h1>
      <p class="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl">
        We build fast, professional websites for independent car dealerships — with inventory management, lead capture, and SEO built in.
        Live in <strong class="text-white">2 weeks</strong>, starting at <strong class="text-white">$2,500</strong>.
      </p>

      <!-- Three option cards -->
      <div class="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5 w-full max-w-4xl">

        <!-- Option 1: View Demo -->
        <RouterLink
          to="/inventory"
          class="group flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-dark-800
                 p-8 hover:border-primary-500/50 hover:bg-dark-700 transition-all duration-200"
        >
          <div class="w-14 h-14 rounded-xl bg-primary-600/20 flex items-center justify-center group-hover:bg-primary-600/30 transition">
            <svg class="w-7 h-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
          </div>
          <div>
            <p class="text-white font-bold text-lg">View Demo Site</p>
            <p class="text-gray-400 text-sm mt-1">See exactly what your dealership's website will look like</p>
          </div>
          <span class="text-primary-400 text-sm font-medium group-hover:text-primary-300 transition">
            Explore the demo →
          </span>
        </RouterLink>

        <!-- Option 2: Free VIN Decoder -->
        <RouterLink
          to="/vin-decoder"
          class="group flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-dark-800
                 p-8 hover:border-primary-500/50 hover:bg-dark-700 transition-all duration-200"
        >
          <div class="w-14 h-14 rounded-xl bg-primary-600/20 flex items-center justify-center group-hover:bg-primary-600/30 transition">
            <svg class="w-7 h-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
          <div>
            <p class="text-white font-bold text-lg">Free VIN Decoder</p>
            <p class="text-gray-400 text-sm mt-1">Decode any vehicle instantly — no sign-up, completely free</p>
          </div>
          <span class="text-primary-400 text-sm font-medium group-hover:text-primary-300 transition">
            Try it free →
          </span>
        </RouterLink>

        <!-- Option 3: Get Started -->
        <a
          href="#contact-form"
          class="group flex flex-col items-center gap-4 rounded-2xl border border-primary-500/40 bg-primary-900/20
                 p-8 hover:border-primary-400 hover:bg-primary-900/30 transition-all duration-200"
        >
          <div class="w-14 h-14 rounded-xl bg-primary-600/30 flex items-center justify-center group-hover:bg-primary-600/40 transition">
            <svg class="w-7 h-7 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <div>
            <p class="text-white font-bold text-lg">Get Your Site Built</p>
            <p class="text-gray-400 text-sm mt-1">Tell me about your dealership — I'll handle everything else</p>
          </div>
          <span class="text-primary-300 text-sm font-medium group-hover:text-primary-200 transition">
            Start the conversation →
          </span>
        </a>

      </div>
    </section>

    <!-- ── What's Included ────────────────────────────────────────────────── -->
    <section class="bg-dark-800 border-y border-white/10 py-16 px-4">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-white text-2xl font-bold text-center mb-10">Everything your dealership website needs</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          <div v-for="feature in features" :key="feature.label" class="flex flex-col items-center gap-2">
            <div class="w-10 h-10 rounded-lg bg-primary-600/20 flex items-center justify-center">
              <component :is="'svg'" class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon"/>
              </component>
            </div>
            <span class="text-gray-300 text-xs font-medium leading-tight">{{ feature.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── How It Works ────────────────────────────────────────────────────── -->
    <section class="py-16 px-4">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-white text-2xl font-bold mb-12">Live in 3 simple steps</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div v-for="(step, i) in steps" :key="i" class="flex flex-col items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">
              {{ i + 1 }}
            </div>
            <p class="text-white font-semibold">{{ step.title }}</p>
            <p class="text-gray-400 text-sm">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Contact Form ────────────────────────────────────────────────────── -->
    <section id="contact-form" class="bg-dark-800 border-t border-white/10 py-16 px-4">
      <div class="max-w-xl mx-auto">
        <div class="text-center mb-10">
          <h2 class="text-white text-3xl font-extrabold">Let's build your website</h2>
          <p class="text-gray-400 mt-3">
            Fill out the form below and I'll reach out within one business day to discuss your dealership's needs.
          </p>
        </div>

        <!-- Success state -->
        <div v-if="submitted" class="rounded-2xl border border-emerald-500/40 bg-emerald-900/20 p-8 text-center">
          <svg class="w-12 h-12 text-emerald-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <p class="text-white font-bold text-lg">Message sent!</p>
          <p class="text-gray-400 text-sm mt-2">I'll be in touch within one business day. Check your email for a confirmation.</p>
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
          <!-- Netlify hidden fields -->
          <input type="hidden" name="form-name" value="dealer-inquiry" />
          <div class="hidden">
            <label>Don't fill this out: <input name="bot-field" /></label>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
            class="btn-primary w-full py-3.5 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ submitting ? 'Sending…' : 'Send My Message' }}
          </button>

          <p v-if="formError" class="text-red-400 text-sm text-center">{{ formError }}</p>

          <p class="text-gray-600 text-xs text-center">
            No spam. No sales calls unless you want them. Just a real conversation about your website.
          </p>
        </form>
      </div>
    </section>

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

// Business brand — set VITE_BUSINESS_BRAND in Netlify env vars
const brand = import.meta.env.VITE_BUSINESS_BRAND || 'DealerSites Pro'

usePageMeta(() => ({
  title:       'Custom Car Dealership Websites — Fast, Affordable, Done for You',
  description: 'We build professional websites for independent car dealerships. Inventory management, lead capture, local SEO, and tools like a free VIN decoder — live in 2 weeks from $2,500.',
  ogTitle:     'Custom Car Dealership Websites | ' + brand,
  ogDescription: 'Professional dealership websites with inventory, lead capture, and SEO built in. See the live demo, try the free VIN decoder, or get started today.',
  path:        '/',
}))

// ── Features grid ─────────────────────────────────────────────────────────────
const features = [
  { label: 'Live Inventory',    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
  { label: 'Lead Capture',      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { label: 'Local SEO',         icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
  { label: 'Mobile-First',      icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { label: 'Admin Panel',       icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' },
  { label: 'Free VIN Decoder',  icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
]

// ── Steps ─────────────────────────────────────────────────────────────────────
const steps = [
  { title: 'Fill out the form',    desc: 'Tell me about your dealership — takes less than 2 minutes.' },
  { title: 'I build your site',    desc: 'Custom setup based on your brand, inventory, and location.' },
  { title: 'Go live',              desc: 'Your site is deployed and live within 2 weeks of kickoff.' },
]

// ── Form ──────────────────────────────────────────────────────────────────────
const form = ref({ name: '', email: '', dealership: '', phone: '', contactPreference: '', message: '' })
const submitting = ref(false)
const submitted  = ref(false)
const formError  = ref('')

async function submitForm() {
  submitting.value = true
  formError.value  = ''
  try {
    const body = new URLSearchParams({
      'form-name':        'dealer-inquiry',
      name:                form.value.name,
      email:               form.value.email,
      dealership:          form.value.dealership,
      phone:               form.value.phone,
      contactPreference:   form.value.contactPreference,
      message:             form.value.message,
    })
    const res = await fetch('/', {
      method:  'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body:    body.toString(),
    })
    if (!res.ok) throw new Error('Network response was not ok')
    submitted.value = true
  } catch {
    formError.value = 'Something went wrong. Please email me directly or try again.'
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
</style>
