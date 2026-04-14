<!--
  LandingPageView — Stephanie's business landing page.
  Standalone layout — does not use PageLayout (no dealership header/footer).
-->
<template>
  <div class="min-h-screen bg-dark-900 flex flex-col">

    <!-- ── Minimal Header ─────────────────────────────────────────────────── -->
    <header class="border-b border-white/10 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto w-full">
      <span class="text-white font-bold text-lg tracking-tight">{{ brand }}</span>
      <RouterLink to="/get-started" class="btn-primary text-sm py-2 px-5">
        Get Started
      </RouterLink>
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
        Fast, professional websites for independent car dealerships — with inventory management,
        lead capture, and SEO built in. Live in <strong class="text-white">2 weeks</strong>,
        starting at <strong class="text-white">$1,000</strong> + $50/month to host.
      </p>

      <!-- Three option cards -->
      <div class="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5 w-full max-w-4xl">

        <!-- Option 1: View Demo -->
        <RouterLink
          to="/demo"
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
        <RouterLink
          to="/get-started"
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
        </RouterLink>

      </div>
    </section>

    <!-- ── What's Included ────────────────────────────────────────────────── -->
    <section class="bg-dark-800 border-y border-white/10 py-16 px-4">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-white text-2xl font-bold text-center mb-10">Everything your dealership website needs</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          <div v-for="feature in features" :key="feature.label" class="flex flex-col items-center gap-2">
            <div class="w-10 h-10 rounded-lg bg-primary-600/20 flex items-center justify-center">
              <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon"/>
              </svg>
            </div>
            <span class="text-gray-300 text-xs font-medium leading-tight">{{ feature.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── How It Works ────────────────────────────────────────────────────── -->
    <section class="py-16 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-white text-2xl font-bold mb-12">How it works</h2>
        <div class="grid grid-cols-1 sm:grid-cols-5 gap-6 items-start">
          <div v-for="(step, i) in steps" :key="i" class="flex flex-col items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
              {{ i + 1 }}
            </div>
            <p class="text-white font-semibold text-sm">{{ step.title }}</p>
            <p class="text-gray-400 text-xs leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
        <RouterLink to="/get-started" class="btn-primary mt-12 inline-block px-8 py-3.5 text-sm font-semibold">
          Start the Conversation
        </RouterLink>
      </div>
    </section>

    <!-- ── Footer ──────────────────────────────────────────────────────────── -->
    <footer class="border-t border-white/10 py-8 px-4 text-center text-gray-600 text-xs">
      <p>&copy; {{ new Date().getFullYear() }} {{ brand }}. All rights reserved.</p>
    </footer>

  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { usePageMeta } from '../composables/usePageMeta'

const brand = import.meta.env.VITE_BUSINESS_BRAND || 'DealerSites Pro'

usePageMeta(() => ({
  title:          'Custom Car Dealership Websites — Fast, Affordable, Done for You',
  description:    'Professional websites for independent car dealerships. Inventory management, lead capture, and local SEO built in. Live in 2 weeks from $1,000.',
  ogTitle:        'Custom Car Dealership Websites | ' + brand,
  ogDescription:  'Professional dealership websites with inventory, lead capture, and SEO built in. See the live demo or get started today.',
  path:           '/',
}))

// ── Features grid ─────────────────────────────────────────────────────────────
const features = [
  { label: 'Live Inventory',  icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
  { label: 'Lead Capture',    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { label: 'Local SEO',       icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
  { label: 'Mobile-First',    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { label: 'Admin Panel',     icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' },
]

// ── Steps ─────────────────────────────────────────────────────────────────────
const steps = [
  { title: 'Fill out the inquiry form', desc: 'Tell me about your dealership — takes less than 2 minutes.' },
  { title: 'We chat',                   desc: 'I reach out within one business day to go over your needs and answer any questions.' },
  { title: 'Sign off & pay',            desc: 'Fill out the client intake form and pay a one-time $1,000 setup fee via Stripe.' },
  { title: 'I build your site',         desc: 'Custom site built around your brand, inventory, and location — done within 2 weeks.' },
  { title: 'Go live',                   desc: 'Your site launches. Ongoing hosting is just $50/month.' },
]
</script>

<style scoped>
.btn-primary {
  @apply inline-flex items-center justify-center rounded-xl bg-primary-600 text-white
         font-semibold hover:bg-primary-700 transition-colors duration-150;
}
</style>
