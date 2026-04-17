<template>
  <PageLayout>
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-gray-300">
      <h1 class="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
      <p class="text-sm text-gray-500 mb-10">Last updated: April 17, 2026</p>

      <section class="mb-10">
        <h2 class="text-lg font-semibold text-white mb-3">Who we are</h2>
        <p class="text-sm leading-relaxed">
          This website is operated by Custom Dealership Websites, a web design service that builds
          professional websites for independent car dealerships. Our site is located at
          <a href="https://custom-dealership-website.netlify.app" class="text-primary-400 hover:text-primary-300">
            custom-dealership-website.netlify.app
          </a>.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-lg font-semibold text-white mb-3">What information we collect</h2>
        <p class="text-sm leading-relaxed mb-3">
          We only collect information you voluntarily provide to us. This includes:
        </p>
        <ul class="list-disc list-inside text-sm leading-loose space-y-1 text-gray-400">
          <li>Your name, email address, and phone number (via the inquiry or contact form)</li>
          <li>Your dealership name, location, and business details (via the client intake form)</li>
          <li>Payment information processed through Stripe — we never see or store your card number</li>
        </ul>
        <p class="text-sm leading-relaxed mt-3">
          We do not use tracking cookies, third-party analytics, or ad networks on this site.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-lg font-semibold text-white mb-3">How we use your information</h2>
        <ul class="list-disc list-inside text-sm leading-loose space-y-1 text-gray-400">
          <li>To respond to your inquiry and discuss your project</li>
          <li>To build and deliver your dealership website</li>
          <li>To process your payment via Stripe</li>
          <li>To contact you about your project or account</li>
        </ul>
        <p class="text-sm leading-relaxed mt-3">
          We do not sell, rent, or share your personal information with third parties for marketing purposes.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-lg font-semibold text-white mb-3">Free VIN Decoder</h2>
        <p class="text-sm leading-relaxed">
          The free VIN decoder tool does not require you to create an account or provide any personal
          information. VIN lookups are processed via the NHTSA public API. We do not log or store
          the VINs you decode.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-lg font-semibold text-white mb-3">Data retention</h2>
        <p class="text-sm leading-relaxed">
          We retain contact and intake form submissions for as long as needed to fulfill your project
          and maintain business records. You may request deletion of your data at any time by
          contacting us.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-lg font-semibold text-white mb-3">Third-party services</h2>
        <p class="text-sm leading-relaxed">
          We use the following third-party services, each with their own privacy policies:
        </p>
        <ul class="list-disc list-inside text-sm leading-loose space-y-1 text-gray-400 mt-2">
          <li>Stripe — payment processing</li>
          <li>Netlify — website hosting and form submissions</li>
          <li>NHTSA API — VIN decoding (no personal data sent)</li>
        </ul>
      </section>

      <section class="mb-10">
        <h2 class="text-lg font-semibold text-white mb-3">Your rights</h2>
        <p class="text-sm leading-relaxed">
          You have the right to request access to, correction of, or deletion of any personal
          information we hold about you. To exercise these rights, contact us at the email below.
        </p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-white mb-3">Contact</h2>
        <p class="text-sm leading-relaxed">
          Questions about this policy? Reach out at
          <a :href="'mailto:' + siteSettings.email" class="text-primary-400 hover:text-primary-300">
            {{ siteSettings.email }}
          </a>.
        </p>
      </section>
    </div>
  </PageLayout>
</template>

<script setup>
import PageLayout from '../components/layout/PageLayout.vue'
import { siteSettings } from '../composables/useSiteSettings'
import { usePageMeta } from '../composables/usePageMeta'

usePageMeta(() => ({
  title:       'Privacy Policy',
  description: 'Privacy policy for Custom Dealership Websites. Learn how we collect, use, and protect your information.',
  path:        '/privacy',
}))
</script>
