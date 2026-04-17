<template>
  <PageLayout>
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-gray-300">
      <h1 class="text-3xl font-bold text-white mb-2">Terms of Service</h1>
      <p class="text-sm text-gray-500 mb-10">Last updated: April 17, 2026</p>

      <section class="mb-10">
        <h2 class="text-lg font-semibold text-white mb-3">Overview</h2>
        <p class="text-sm leading-relaxed">
          These terms govern the web design and hosting services provided by Custom Dealership Websites
          ("we", "us") to you ("client"). By submitting an inquiry, signing off on a project, or
          making a payment, you agree to these terms.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-lg font-semibold text-white mb-3">Services</h2>
        <p class="text-sm leading-relaxed mb-3">
          We build custom websites for independent car dealerships. Each site includes:
        </p>
        <ul class="list-disc list-inside text-sm leading-loose space-y-1 text-gray-400">
          <li>Custom design built around your brand and location</li>
          <li>Inventory management (add, edit, and remove vehicles)</li>
          <li>Lead capture and contact forms</li>
          <li>Local SEO setup</li>
          <li>Mobile-responsive design</li>
          <li>Hosting and ongoing maintenance</li>
        </ul>
      </section>

      <section class="mb-10">
        <h2 class="text-lg font-semibold text-white mb-3">Pricing</h2>
        <ul class="list-disc list-inside text-sm leading-loose space-y-1 text-gray-400">
          <li><span class="text-white font-medium">$1,000 one-time setup fee</span> — due before work begins</li>
          <li><span class="text-white font-medium">$50/month hosting fee</span> — billed monthly after your site goes live</li>
        </ul>
        <p class="text-sm leading-relaxed mt-3">
          Pricing is agreed upon before any work starts. We will never charge you more than what
          was discussed without your explicit approval.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-lg font-semibold text-white mb-3">Timeline</h2>
        <p class="text-sm leading-relaxed">
          We aim to deliver your completed site within approximately 2 weeks of receiving your
          setup fee and completed client intake form. Delays caused by missing content, photos,
          or feedback from your side may extend this timeline.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-lg font-semibold text-white mb-3">Refund policy</h2>
        <p class="text-sm leading-relaxed mb-3">
          The $1,000 setup fee is fully refundable if you cancel before work has begun. Once
          development has started, the setup fee is non-refundable.
        </p>
        <p class="text-sm leading-relaxed">
          Monthly hosting fees are non-refundable for the current billing period. You may cancel
          hosting at any time with 30 days' written notice.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-lg font-semibold text-white mb-3">Your content</h2>
        <p class="text-sm leading-relaxed">
          You retain ownership of all content you provide — photos, vehicle listings, business
          information, and logos. You grant us a license to use that content solely to build and
          maintain your website. You are responsible for ensuring you have the rights to any
          content you provide.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-lg font-semibold text-white mb-3">Our work</h2>
        <p class="text-sm leading-relaxed">
          The underlying website template and code remain the intellectual property of Custom
          Dealership Websites. Your site is licensed to you for use during the hosting
          relationship. If you cancel hosting and wish to take the code elsewhere, contact us
          to discuss options.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-lg font-semibold text-white mb-3">Limitation of liability</h2>
        <p class="text-sm leading-relaxed">
          We are not liable for any lost business, lost revenue, or indirect damages arising from
          use or downtime of your website. Our total liability to you will not exceed the total
          amount you have paid us in the 3 months prior to any claim.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-lg font-semibold text-white mb-3">Changes to these terms</h2>
        <p class="text-sm leading-relaxed">
          We may update these terms from time to time. Continued use of our services after any
          changes constitutes acceptance of the new terms. We will notify active clients of any
          material changes.
        </p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-white mb-3">Contact</h2>
        <p class="text-sm leading-relaxed">
          Questions about these terms? Reach out at
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
  title:       'Terms of Service',
  description: 'Terms of service for Custom Dealership Websites. Pricing, timeline, refund policy, and everything else you need to know.',
  path:        '/terms',
}))
</script>
