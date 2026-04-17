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
    <section class="flex flex-col items-center text-center px-4 pt-20 pb-16">
      <span class="inline-block bg-primary-600/20 text-primary-400 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
        Custom Dealership Websites
      </span>
      <h1 class="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-3xl">
        Your Dealership Deserves a Website That Actually Works
      </h1>
      <p class="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl">
        Fast, professional websites for independent car dealerships — inventory management,
        lead capture, and SEO built in. Live in <strong class="text-white">2 weeks</strong>
        with <strong class="text-white">flexible payment plans</strong>.
      </p>

      <!-- Primary CTA -->
      <RouterLink
        to="/get-started"
        class="mt-10 btn-primary px-10 py-4 text-base font-bold shadow-lg shadow-primary-900/40"
      >
        Get Your Site Built →
      </RouterLink>

      <!-- Secondary links -->
      <div class="mt-5 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
        <RouterLink to="/demo" class="hover:text-white transition-colors">
          View the demo site →
        </RouterLink>
        <RouterLink to="/vin-decoder" class="hover:text-white transition-colors">
          Try the free VIN decoder →
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

    <!-- ── Demo Preview ─────────────────────────────────────────────────────── -->
    <section class="py-20 px-4">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12">
          <span class="inline-block bg-primary-600/20 text-primary-400 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-5">
            Live Demo
          </span>
          <h2 class="text-white text-3xl md:text-4xl font-extrabold mb-4">
            See exactly what your site would look like
          </h2>
          <p class="text-gray-400 text-lg max-w-xl mx-auto">
            This is a real, working example — inventory, lead forms, admin panel and all. Click around.
          </p>
        </div>

        <!-- Browser mockup -->
        <div class="rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-black/40">
          <!-- Browser chrome -->
          <div class="bg-dark-700 px-4 py-3 flex items-center gap-3 border-b border-white/10">
            <div class="flex gap-1.5">
              <div class="w-3 h-3 rounded-full bg-red-500/70"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500/70"></div>
              <div class="w-3 h-3 rounded-full bg-green-500/70"></div>
            </div>
            <div class="flex-1 bg-dark-800 rounded-md px-3 py-1 text-xs text-gray-500 text-center truncate">
              cardealershipswebsitebuilder.com/demo
            </div>
          </div>
          <!-- iframe -->
          <div class="relative w-full" style="padding-bottom: 56.25%;">
            <iframe
              src="/demo"
              class="absolute inset-0 w-full h-full border-0 pointer-events-none"
              loading="lazy"
              title="Demo dealership website"
            ></iframe>
            <!-- Click overlay — sends them to /demo in a new tab -->
            <a
              href="/demo"
              target="_blank"
              rel="noopener"
              class="absolute inset-0 z-10"
              aria-label="Open live demo"
            ></a>
          </div>
        </div>

        <!-- Callouts + CTA below mockup -->
        <div class="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <ul class="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-400">
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-primary-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
              </svg>
              Live inventory
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-primary-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
              </svg>
              Lead capture forms
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-primary-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
              </svg>
              Mobile-friendly
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-primary-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
              </svg>
              Fast &amp; professional
            </li>
          </ul>
          <a
            href="/demo"
            target="_blank"
            rel="noopener"
            class="btn-primary px-8 py-3.5 text-sm font-semibold shrink-0"
          >
            Open Full Demo →
          </a>
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

    <!-- ── About ──────────────────────────────────────────────────────────── -->
    <section class="bg-dark-800 border-y border-white/10 py-16 px-4">
      <div class="max-w-2xl mx-auto text-center">
        <span class="inline-block bg-primary-600/20 text-primary-400 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-5">
          Who's behind this
        </span>
        <h2 class="text-white text-2xl font-bold mb-5">Hi, I'm Stephanie</h2>
        <p class="text-gray-400 leading-relaxed mb-4">
          I'm a web developer who builds websites specifically for independent car dealerships.
          I got tired of seeing small lots either paying way too much for bloated platforms or
          stuck with outdated sites that don't bring in leads — so I built a better option.
        </p>
        <p class="text-gray-400 leading-relaxed mb-4">
          Every site I build includes live inventory management, a lead capture system, and local
          SEO out of the box. You get a real, custom website — not a template rental — and I handle
          everything from setup to launch.
        </p>
        <p class="text-gray-400 leading-relaxed">
          If you're an independent dealer who wants a professional site without the runaround,
          I'd love to talk.
        </p>
        <RouterLink to="/get-started" class="mt-8 inline-block btn-primary px-8 py-3 text-sm font-semibold">
          Let's Talk
        </RouterLink>
      </div>
    </section>

    <!-- ── Pricing ───────────────────────────────────────────────────────── -->
    <section class="bg-dark-800 border-y border-white/10 py-16 px-4">
      <div class="max-w-4xl mx-auto">
        <span class="block text-center inline-block bg-primary-600/20 text-primary-400 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-5 w-fit mx-auto">
          Pricing
        </span>
        <h2 class="text-white text-2xl font-bold text-center mb-3">Two ways to get started</h2>
        <p class="text-gray-400 text-center mb-3 max-w-xl mx-auto">
          Pick what works for your budget. Both plans include the exact same site — full features, no compromises.
        </p>
        <p class="text-center text-xs text-gray-600 mb-10">
          For context: most dealership platforms (Dealer.com, DealerSocket) charge $500–$1,500/month. Plan A pays for itself in under 2 months.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

          <!-- Plan A -->
          <div class="rounded-2xl border border-white/10 bg-dark-900 p-8 flex flex-col">
            <div class="mb-6">
              <span class="inline-block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Plan A — Best Value</span>
              <div class="flex items-end gap-2 mb-1">
                <span class="text-white text-4xl font-extrabold">$1,000</span>
                <span class="text-gray-400 text-sm mb-1.5">one-time setup</span>
              </div>
              <p class="text-gray-400 text-sm">then <strong class="text-white">$50/month</strong> to host — cancel anytime</p>
            </div>
            <ul class="space-y-3 mb-8 flex-1">
              <li v-for="item in planAPerks" :key="item" class="flex items-start gap-3 text-sm text-gray-300">
                <svg class="w-4 h-4 text-primary-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
                {{ item }}
              </li>
            </ul>
            <RouterLink to="/get-started" class="btn-secondary w-full py-3 text-sm font-semibold text-center">
              Get Started with Plan A
            </RouterLink>
          </div>

          <!-- Plan B -->
          <div class="rounded-2xl border-2 border-primary-500 bg-dark-900 p-8 flex flex-col relative">
            <div class="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span class="bg-primary-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                No Upfront Cost
              </span>
            </div>
            <div class="mb-6">
              <span class="inline-block text-xs font-semibold uppercase tracking-widest text-primary-400 mb-3">Plan B — Skip the Setup Fee</span>
              <div class="flex items-end gap-2 mb-1">
                <span class="text-white text-4xl font-extrabold">$99</span>
                <span class="text-gray-400 text-sm mb-1.5">/month</span>
              </div>
              <p class="text-gray-400 text-sm">12-month minimum, then month-to-month</p>
            </div>
            <ul class="space-y-3 mb-8 flex-1">
              <li v-for="item in planBPerks" :key="item" class="flex items-start gap-3 text-sm text-gray-300">
                <svg class="w-4 h-4 text-primary-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
                {{ item }}
              </li>
            </ul>
            <RouterLink to="/get-started" class="btn-primary w-full py-3 text-sm font-semibold text-center">
              Get Started with Plan B
            </RouterLink>
          </div>

        </div>

        <!-- Monthly fee breakdown -->
        <div class="mt-10 rounded-2xl border border-white/10 bg-dark-900 p-6">
          <p class="text-white font-semibold text-sm text-center mb-6">What your monthly fee covers</p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div v-for="item in monthlyIncludes" :key="item.label" class="flex flex-col items-center text-center gap-2">
              <div class="w-9 h-9 rounded-lg bg-primary-600/20 flex items-center justify-center">
                <svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon"/>
                </svg>
              </div>
              <p class="text-white text-xs font-semibold">{{ item.label }}</p>
              <p class="text-gray-500 text-xs leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>
        </div>

        <p class="text-gray-600 text-xs text-center mt-6">
          Not sure which plan fits? Use the chat widget or fill out the form — no pressure.
        </p>
      </div>
    </section>

    <!-- ── FAQ ────────────────────────────────────────────────────────────── -->
    <section class="py-16 px-4">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-white text-2xl font-bold text-center mb-10">Common questions</h2>
        <div class="space-y-3">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="rounded-xl border border-white/10 bg-dark-800 overflow-hidden"
          >
            <button
              @click="openFaq = openFaq === i ? null : i"
              class="w-full flex items-center justify-between px-6 py-5 text-left"
            >
              <span class="text-white font-semibold text-sm pr-4">{{ faq.q }}</span>
              <svg
                class="w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200"
                :class="openFaq === i ? 'rotate-180' : ''"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-show="openFaq === i" class="px-6 pb-5">
              <p class="text-gray-400 text-sm leading-relaxed">{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Bottom CTA ─────────────────────────────────────────────────────── -->
    <section class="bg-dark-800 border-t border-white/10 py-16 px-4 text-center">
      <h2 class="text-white text-2xl font-bold mb-3">Ready to get your dealership online?</h2>
      <p class="text-gray-400 mb-8 max-w-xl mx-auto">
        Fill out a quick form and I'll reach out within one business day.
        No pressure, no sales pitch — just a real conversation.
      </p>
      <RouterLink to="/get-started" class="btn-primary px-10 py-4 text-base font-bold">
        Get Started Today
      </RouterLink>
    </section>

    <!-- ── Footer ──────────────────────────────────────────────────────────── -->
    <footer class="border-t border-white/10 py-8 px-4 text-center text-gray-600 text-xs">
      <p>&copy; {{ new Date().getFullYear() }} {{ brand }}. All rights reserved.</p>
    </footer>

    <!-- ── Floating chat widget ──────────────────────────────────────────── -->
    <QuickChat />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { usePageMeta } from '../composables/usePageMeta'
import QuickChat from '../components/QuickChat.vue'

const brand   = import.meta.env.VITE_BUSINESS_BRAND || 'Car Dealership Website Builder'
const openFaq = ref(null)

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

// ── Pricing perks ─────────────────────────────────────────────────────────────
const planAPerks = [
  'Full custom website built around your brand',
  'Admin panel — add, edit & remove inventory from your phone',
  'Lead capture forms so buyers contact you directly',
  'Local SEO setup to help nearby buyers find you',
  'Live in 2 weeks',
  'Lowest ongoing cost — just $50/month after',
  'Cancel anytime after setup',
]

const planBPerks = [
  'Full custom website built around your brand',
  'Admin panel — add, edit & remove inventory from your phone',
  'Lead capture forms so buyers contact you directly',
  'Local SEO setup to help nearby buyers find you',
  'Live in 2 weeks',
  'No large upfront payment — spread the cost out',
  '12-month minimum, then month-to-month',
]

const monthlyIncludes = [
  { icon: 'M5 12h14M12 5l7 7-7 7', label: 'Hosting & SSL', desc: 'Your site stays fast, secure, and online 24/7' },
  { icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z', label: 'Ongoing support', desc: 'Questions or issues? I\'ve got you covered' },
  { icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z', label: 'Manage from your phone', desc: 'Update inventory, photos & prices on the go' },
  { icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15', label: 'Updates included', desc: 'Minor tweaks and fixes at no extra charge' },
]

// ── FAQ ───────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'Can I update my own inventory after the site is live?',
    a: 'Yes — you get a full admin panel where you can add, edit, and remove vehicles yourself at any time. No need to contact me every time a car sells.',
  },
  {
    q: 'What\'s the difference between Plan A and Plan B?',
    a: 'Same site, different payment structure. Plan A costs $1,000 upfront then $50/month — better deal long-term. Plan B is $99/month with no upfront cost, so you spread everything out. Plan B requires a 12-month minimum commitment, then goes month-to-month.',
  },
  {
    q: 'What exactly is included in the setup?',
    a: 'Everything: custom design built around your brand, live inventory system, lead capture forms, local SEO setup, mobile optimization, and full deployment. You own the site.',
  },
  {
    q: 'What does the monthly fee cover?',
    a: 'Hosting, SSL certificate, backend server, and database. Your site stays fast, secure, and online. Plan A is $50/month (cancel anytime). Plan B is $99/month for the first 12 months, then month-to-month.',
  },
  {
    q: 'Do I need a domain name already?',
    a: 'No. I can help you pick and set up a domain as part of the process. If you already have one, we\'ll use it.',
  },
  {
    q: 'What if I want changes after the site launches?',
    a: 'Minor adjustments (text, colors, layout tweaks) in the first 30 days are included. Larger feature additions can be scoped separately — I\'ll always give you a straight answer on what something will cost.',
  },
]
</script>

<style scoped>
.btn-primary {
  @apply inline-flex items-center justify-center rounded-xl bg-primary-600 text-white
         font-semibold hover:bg-primary-700 transition-colors duration-150;
}
.btn-secondary {
  @apply inline-flex items-center justify-center rounded-xl border border-white/20 text-white
         font-semibold hover:border-white/40 hover:bg-white/5 transition-colors duration-150;
}
</style>
