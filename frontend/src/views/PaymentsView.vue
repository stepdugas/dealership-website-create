<template>
  <PageLayout>
    <div class="bg-dark-800 pt-28 pb-14">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold text-white" data-aos="fade-up">Get Started Today</h1>
        <p class="text-gray-300 mt-4 max-w-2xl text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          One simple package. Your dealership online in days.
        </p>
      </div>
    </div>

    <section class="py-20 bg-gray-50">
      <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Pricing card -->
        <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden" data-aos="fade-up">

          <!-- Header -->
          <div class="bg-primary-600 px-8 py-6 text-center">
            <p class="text-primary-100 text-sm font-semibold uppercase tracking-wider mb-1">Standard Package</p>
            <div class="flex items-end justify-center gap-2">
              <span class="text-5xl font-extrabold text-white">$1,000</span>
              <span class="text-primary-200 mb-2">setup</span>
            </div>
            <p class="text-primary-100 mt-1">then <span class="font-bold text-white">$50/month</span> hosting</p>
          </div>

          <!-- What's included -->
          <div class="px-8 py-8">
            <p class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-5">What's included</p>
            <ul class="space-y-3 mb-8">
              <li v-for="item in includes" :key="item" class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-gray-700 text-sm">{{ item }}</span>
              </li>
            </ul>

            <a
              :href="STRIPE_LINK"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-xl transition text-lg"
            >
              Get Started — $1,000 + $50/mo
            </a>
            <p class="text-xs text-gray-400 text-center mt-3">Secure checkout powered by Stripe. Cancel anytime.</p>
          </div>
        </div>

        <!-- FAQ -->
        <div class="mt-12 space-y-4" data-aos="fade-up">
          <h2 class="text-xl font-bold text-gray-900 mb-6">Common Questions</h2>
          <details v-for="q in faq" :key="q.question" class="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <summary class="cursor-pointer px-6 py-4 font-semibold text-gray-900 flex items-center justify-between select-none hover:bg-gray-50 transition">
              {{ q.question }}
              <svg class="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </summary>
            <div class="px-6 pb-5 pt-3 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
              {{ q.answer }}
            </div>
          </details>
        </div>

      </div>
    </section>
  </PageLayout>
</template>

<script setup>
import PageLayout from '../components/layout/PageLayout.vue'

// Swap this for the live Stripe link when you go live
const STRIPE_LINK = 'https://buy.stripe.com/test_4gMcN5brOf4KdVU7jD9IQ00'

const includes = [
  'Custom dealership website built and launched',
  'Full inventory management system',
  'Customer contact & lead tracking',
  'Financing application page',
  'Service appointment scheduling',
  'Staff directory page',
  'Facebook Marketplace auto-feed',
  'Mobile-friendly on all devices',
  'Managed hosting — we handle everything',
  'Ongoing updates and support',
]

const faq = [
  {
    question: 'What does the $1,000 cover?',
    answer: 'The setup fee covers building and launching your custom dealership website — configured with your branding, business info, inventory, and all the pages you need. It\'s a one-time cost to get you live.',
  },
  {
    question: 'What does the $50/month cover?',
    answer: 'Monthly hosting keeps your site live, fast, and secure. It also covers ongoing support — if something breaks or you need changes, we\'ve got you.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes. Cancel your monthly subscription anytime. No contracts, no cancellation fees.',
  },
  {
    question: 'How long does it take to go live?',
    answer: 'Most sites are live within a few days of your setup payment and onboarding call. We move fast.',
  },
  {
    question: 'Do you offer custom pricing?',
    answer: 'Reach out directly — we\'re happy to work something out for special situations.',
  },
]
</script>
