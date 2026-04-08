<template>
  <PageLayout>

    <!-- Hero -->
    <div class="bg-dark-800 pt-28 pb-14">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold text-white" data-aos="fade-up">Schedule a Service Appointment</h1>
        <p class="text-gray-300 mt-4 max-w-2xl text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          Our service team is ready to help keep your vehicle running its best. Book an appointment below or give us a call.
        </p>
        <div class="mt-8" data-aos="fade-up" data-aos-delay="200">
          <a href="#schedule-form" class="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg transition">
            Request an Appointment
          </a>
        </div>
      </div>
    </div>

    <!-- What to expect -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-10 text-center" data-aos="fade-up">What to Expect</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="step in steps" :key="step.title"
            class="text-center p-6 rounded-2xl border border-gray-100 shadow-sm" data-aos="fade-up">
            <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="step.icon" />
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">{{ step.title }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Appointment form -->
    <section id="schedule-form" class="py-16 bg-gray-50">
      <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <h2 class="text-2xl font-bold text-gray-900 mb-2 text-center">Request an Appointment</h2>
        <p class="text-gray-500 text-center mb-8 text-sm">Fill out the form below and we'll reach out to confirm your time.</p>

        <div v-if="submitSuccess" class="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
          <p class="text-2xl mb-2">✓</p>
          <p class="font-semibold text-green-800">Request Received!</p>
          <p class="text-green-700 text-sm mt-1">We'll contact you shortly to confirm your appointment time.</p>
        </div>

        <form v-else @submit.prevent="submitRequest" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-5">
          <div>
            <label class="form-label">Full Name *</label>
            <input v-model="form.name" type="text" class="form-input" placeholder="Jane Smith" required />
          </div>
          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label class="form-label">Email *</label>
              <input v-model="form.email" type="email" class="form-input" placeholder="jane@email.com" required />
            </div>
            <div>
              <label class="form-label">Phone *</label>
              <input v-model="form.phone" type="tel" class="form-input" placeholder="(555) 123-4567" required />
            </div>
          </div>
          <div>
            <label class="form-label">Service Type *</label>
            <select v-model="form.serviceType" class="form-input" required>
              <option value="">Select a service…</option>
              <option>Oil Change</option>
              <option>Tire Rotation / Balance</option>
              <option>Brake Inspection or Service</option>
              <option>Battery Check / Replacement</option>
              <option>AC / Heat Service</option>
              <option>Engine or Transmission</option>
              <option>Full Inspection</option>
              <option>Detailing</option>
              <option>Other</option>
            </select>
          </div>
          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label class="form-label">Year</label>
              <input v-model="form.vehicleYear" type="text" class="form-input" placeholder="2019" />
            </div>
            <div>
              <label class="form-label">Make</label>
              <input v-model="form.vehicleMake" type="text" class="form-input" placeholder="Toyota" />
            </div>
            <div>
              <label class="form-label">Model</label>
              <input v-model="form.vehicleModel" type="text" class="form-input" placeholder="Camry" />
            </div>
            <div>
              <label class="form-label">Mileage</label>
              <input v-model="form.vehicleMileage" type="text" class="form-input" placeholder="65,000" />
            </div>
          </div>
          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label class="form-label">Preferred Date</label>
              <input v-model="form.preferredDate" type="date" class="form-input" />
            </div>
            <div>
              <label class="form-label">Preferred Time</label>
              <select v-model="form.preferredTime" class="form-input">
                <option value="">Select…</option>
                <option>Morning (8am–12pm)</option>
                <option>Afternoon (12pm–5pm)</option>
                <option>I'm Flexible</option>
              </select>
            </div>
          </div>
          <div>
            <label class="form-label">Additional Notes <span class="text-gray-400 font-normal">(optional)</span></label>
            <textarea v-model="form.notes" class="form-input resize-none" rows="3"
              placeholder="Any other details we should know before your appointment"></textarea>
          </div>
          <button type="submit" :disabled="submitting" class="btn-primary w-full py-3">
            {{ submitting ? 'Submitting…' : 'Submit Request' }}
          </button>
          <p class="text-xs text-gray-400 text-center">This submits a request — not a confirmed appointment. We'll contact you to confirm.</p>
        </form>
      </div>
    </section>

  </PageLayout>
</template>

<script setup>
import { ref } from 'vue'
import PageLayout from '../components/layout/PageLayout.vue'

const form = ref({
  name: '', email: '', phone: '', serviceType: '',
  vehicleYear: '', vehicleMake: '', vehicleModel: '', vehicleMileage: '',
  preferredDate: '', preferredTime: '', notes: '',
})
const submitting    = ref(false)
const submitSuccess = ref(false)

async function submitRequest() {
  submitting.value = true
  await new Promise(r => setTimeout(r, 800))
  submitSuccess.value = true
  submitting.value = false
}

const steps = [
  {
    title: 'Book Your Time',
    description: 'Choose a date and time that works for you using the form below.',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    title: 'Drop Off Your Vehicle',
    description: 'Bring your car in at your scheduled time. Our team will check you in quickly.',
    icon: 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z',
  },
  {
    title: 'We Handle the Rest',
    description: "We'll call or text you with updates and when your vehicle is ready.",
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  },
]
</script>
