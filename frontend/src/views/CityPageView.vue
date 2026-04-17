<!--
  CityPageView — Programmatic SEO page for each city.
  Route: /car-dealership-websites-:citySlug
  Data source: src/data/cityPages.js
  Each page has a unique meta title, description, intro paragraph, and local insight paragraph.
-->
<template>
  <div v-if="city" class="min-h-screen bg-dark-900 flex flex-col">

    <!-- ── Minimal brand header ──────────────────────────────────────────── -->
    <header class="border-b border-white/10 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto w-full">
      <RouterLink to="/" class="text-white font-bold text-lg tracking-tight">{{ brand }}</RouterLink>
      <a href="#city-contact" class="btn-primary text-sm py-2 px-5">Get a Free Quote</a>
    </header>

    <!-- ── Hero ─────────────────────────────────────────────────────────── -->
    <section class="py-20 px-4 text-center">
      <div class="max-w-3xl mx-auto">
        <span class="inline-block bg-primary-600/20 text-primary-400 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
          {{ city.city }}, {{ city.stateAbbr }}
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Car Dealership Websites in {{ city.city }}, {{ city.stateAbbr }}
        </h1>
        <p class="mt-6 text-gray-400 text-lg leading-relaxed">
          {{ city.intro }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a href="#city-contact" class="btn-primary text-sm px-7 py-3">Get a Free Quote</a>
          <RouterLink to="/inventory" class="btn-outline text-sm px-7 py-3">See Live Demo</RouterLink>
        </div>
      </div>
    </section>

    <!-- ── Local Insight ─────────────────────────────────────────────────── -->
    <section class="bg-dark-800 border-y border-white/10 py-14 px-4">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-white text-2xl font-bold mb-5">
          Why {{ city.city }} dealerships need a better website
        </h2>
        <p class="text-gray-400 text-lg leading-relaxed">{{ city.localInsight }}</p>
      </div>
    </section>

    <!-- ── What We Build ─────────────────────────────────────────────────── -->
    <section class="py-14 px-4">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-white text-2xl font-bold text-center mb-10">
          Everything included — no hidden costs
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="rounded-xl border border-white/10 bg-dark-800 p-6"
          >
            <div class="w-9 h-9 rounded-lg bg-primary-600/20 flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon"/>
              </svg>
            </div>
            <p class="text-white font-semibold text-sm">{{ feature.title }}</p>
            <p class="text-gray-400 text-xs mt-1.5 leading-relaxed">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Process ───────────────────────────────────────────────────────── -->
    <section class="bg-dark-800 border-y border-white/10 py-14 px-4">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-white text-2xl font-bold mb-10">
          How we get your {{ city.city }} dealership online
        </h2>
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

    <!-- ── Pricing ───────────────────────────────────────────────────────── -->
    <section class="py-14 px-4">
      <div class="max-w-xl mx-auto text-center">
        <h2 class="text-white text-2xl font-bold mb-4">Simple, transparent pricing</h2>
        <p class="text-gray-400 mb-8">One flat setup fee. Your site is yours. No monthly platform fees.</p>
        <div class="rounded-2xl border border-primary-500/40 bg-primary-900/20 p-8">
          <p class="text-primary-300 text-xs font-semibold uppercase tracking-widest mb-2">Starting at</p>
          <p class="text-white text-5xl font-extrabold">$2,500</p>
          <p class="text-gray-400 text-sm mt-2">one-time setup fee</p>
          <ul class="mt-6 space-y-2 text-sm text-gray-400 text-left">
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              Full inventory management system
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              Admin panel — you manage your own inventory
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              Local SEO setup for {{ city.city }} searches
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              Free VIN decoder built into your site
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              Live in 2 weeks guaranteed
            </li>
          </ul>
          <a href="#city-contact" class="btn-primary block w-full mt-8 text-sm py-3 text-center">
            Get a Free Quote for {{ city.city }}
          </a>
        </div>
      </div>
    </section>

    <!-- ── Contact Form ──────────────────────────────────────────────────── -->
    <section id="city-contact" class="bg-dark-800 border-t border-white/10 py-14 px-4">
      <div class="max-w-xl mx-auto">
        <div class="text-center mb-8">
          <h2 class="text-white text-2xl font-bold">
            Get your {{ city.city }} dealership online
          </h2>
          <p class="text-gray-400 mt-2 text-sm">
            Fill out the form and I'll get back to you within one business day.
          </p>
        </div>

        <div v-if="submitted" class="rounded-2xl border border-emerald-500/40 bg-emerald-900/20 p-8 text-center">
          <svg class="w-10 h-10 text-emerald-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <p class="text-white font-bold">Message sent!</p>
          <p class="text-gray-400 text-sm mt-1">I'll be in touch shortly.</p>
        </div>

        <form
          v-else
          @submit.prevent="submitForm"
          name="dealer-inquiry"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          class="space-y-4"
        >
          <input type="hidden" name="form-name" value="dealer-inquiry" />
          <input type="hidden" name="city" :value="city.city + ', ' + city.stateAbbr" />
          <div class="hidden"><label>Don't fill: <input name="bot-field" /></label></div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">Name *</label>
              <input v-model="form.name" name="name" type="text" required placeholder="Your name" class="city-input" />
            </div>
            <div>
              <label class="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">Email *</label>
              <input v-model="form.email" name="email" type="email" required placeholder="you@example.com" class="city-input" />
            </div>
          </div>
          <div>
            <label class="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">Dealership Name *</label>
            <input v-model="form.dealership" name="dealership" type="text" required placeholder="Your dealership name" class="city-input" />
          </div>
          <div>
            <label class="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">Message</label>
            <textarea v-model="form.message" name="message" rows="3" placeholder="Tell me about your dealership..." class="city-input resize-none"/>
          </div>

          <button type="submit" :disabled="submitting"
            class="btn-primary w-full py-3 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
            {{ submitting ? 'Sending…' : 'Send Message' }}
          </button>
          <p v-if="formError" class="text-red-400 text-xs text-center">{{ formError }}</p>
        </form>
      </div>
    </section>

    <!-- ── Internal links to other city pages ────────────────────────────── -->
    <section class="py-10 px-4 border-t border-white/10">
      <div class="max-w-5xl mx-auto">
        <p class="text-gray-600 text-xs text-center mb-4">Also serving dealerships in:</p>
        <div class="flex flex-wrap gap-2 justify-center">
          <RouterLink
            v-for="c in relatedCities"
            :key="c.slug"
            :to="'/car-dealership-websites-' + c.slug"
            class="text-xs text-gray-500 hover:text-primary-400 transition-colors px-2 py-1 rounded border border-white/5 hover:border-primary-500/30"
          >
            {{ c.city }}, {{ c.stateAbbr }}
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ── Footer ────────────────────────────────────────────────────────── -->
    <footer class="border-t border-white/10 py-6 px-4 text-center text-gray-600 text-xs">
      <RouterLink to="/" class="hover:text-gray-400 transition">{{ brand }}</RouterLink>
      <span class="mx-2">·</span>
      <RouterLink to="/inventory" class="hover:text-gray-400 transition">View Demo</RouterLink>
      <span class="mx-2">·</span>
      <RouterLink to="/vin-decoder" class="hover:text-gray-400 transition">Free VIN Decoder</RouterLink>
      <p class="mt-3">&copy; {{ new Date().getFullYear() }} {{ brand }}. All rights reserved.</p>
    </footer>

  </div>

  <!-- 404 fallback if slug doesn't match -->
  <div v-else class="min-h-screen bg-dark-900 flex flex-col items-center justify-center text-center px-4">
    <p class="text-white text-2xl font-bold">Page not found</p>
    <RouterLink to="/" class="btn-primary mt-6 text-sm px-6 py-3">Back to Home</RouterLink>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { usePageMeta } from '../composables/usePageMeta'
import { cityPages, getCityBySlug } from '../data/cityPages'

const route = useRoute()
const brand = import.meta.env.VITE_BUSINESS_BRAND || 'Car Dealership Website Builder'

const city = computed(() => getCityBySlug(route.params.citySlug))

// Six nearby/related cities for internal linking (excludes current page)
const relatedCities = computed(() => {
  if (!city.value) return []
  return cityPages.filter((c) => c.slug !== city.value.slug).slice(0, 8)
})

usePageMeta(() => {
  if (!city.value) return { title: 'Page Not Found', noindex: true }
  return {
    title:       city.value.metaTitle,
    description: city.value.metaDescription,
    ogTitle:     city.value.metaTitle + ' | ' + brand,
    path:        '/car-dealership-websites-' + city.value.slug,
  }
})

// ── Features ─────────────────────────────────────────────────────────────────
const features = [
  {
    title: 'Live Inventory Management',
    desc:  'Add, edit, and remove vehicles from any device. Photos, specs, pricing — all in one place.',
    icon:  'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
  },
  {
    title: 'Lead Capture Forms',
    desc:  'Contact and inquiry forms on every page. Leads delivered straight to your email.',
    icon:  'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    title: 'Local SEO Built In',
    desc:  'Structured data, meta tags, sitemap, and schema markup so your dealership gets found in local search.',
    icon:  'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  },
  {
    title: 'Mobile-First Design',
    desc:  'Looks great and works perfectly on every phone, tablet, and desktop.',
    icon:  'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  },
  {
    title: 'Admin Panel',
    desc:  'Easy-to-use backend so your team manages inventory without needing a developer.',
    icon:  'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
  },
  {
    title: 'Free VIN Decoder',
    desc:  'Attract organic traffic to your site with a free public VIN decoder tool — built right in.',
    icon:  'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
]

// ── Steps ─────────────────────────────────────────────────────────────────────
const steps = [
  { title: 'Fill out the form',    desc: 'Tell me about your dealership — quick and easy.' },
  { title: 'I build your site',    desc: 'Custom setup tailored to your brand and market.' },
  { title: 'Go live in 2 weeks',   desc: 'Your site is deployed and ranking in local search.' },
]

// ── Contact form ──────────────────────────────────────────────────────────────
const form       = ref({ name: '', email: '', dealership: '', message: '' })
const submitting = ref(false)
const submitted  = ref(false)
const formError  = ref('')

async function submitForm() {
  submitting.value = true
  formError.value  = ''
  try {
    const body = new URLSearchParams({
      'form-name': 'dealer-inquiry',
      name:         form.value.name,
      email:        form.value.email,
      dealership:   form.value.dealership,
      message:      form.value.message,
      city:         city.value ? city.value.city + ', ' + city.value.stateAbbr : '',
    })
    const res = await fetch('/', {
      method:  'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body:    body.toString(),
    })
    if (!res.ok) throw new Error()
    submitted.value = true
  } catch {
    formError.value = 'Something went wrong. Please email us directly or try again.'
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.city-input {
  @apply w-full bg-dark-700 border border-white/15 text-white placeholder-gray-600
         rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500
         focus:border-transparent transition;
}
.btn-outline {
  @apply inline-flex items-center justify-center rounded-xl border border-primary-500 text-primary-400
         font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-150;
}
</style>
