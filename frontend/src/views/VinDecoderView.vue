<!--
  VinDecoderView — Free public VIN decoder using the NHTSA vPIC API.
  No auth required. Renders results as a window-sticker style card.
  Ghost-marketing: attracts organic traffic, surfaces the contact CTA.
-->
<template>
  <PageLayout>

    <!-- ── Hero banner ──────────────────────────────────────────────────── -->
    <div class="bg-dark-800 pt-28 pb-14">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="inline-block bg-primary-600/20 text-primary-400 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
          Free Tool — No Sign-Up Needed
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Free VIN Decoder
        </h1>
        <p class="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
          Enter any 17-character VIN to instantly decode the full vehicle report — make, model, engine, safety data, and more.
        </p>
      </div>
    </div>

    <!-- ── Search box ────────────────────────────────────────────────────── -->
    <div class="bg-dark-900 py-8 border-b border-white/10">
      <div class="max-w-2xl mx-auto px-4">
        <form @submit.prevent="decode" class="flex gap-3">
          <input
            v-model="vinInput"
            type="text"
            maxlength="17"
            placeholder="Enter 17-character VIN…"
            class="flex-1 bg-dark-700 border border-white/15 text-white placeholder-gray-500
                   rounded-xl px-5 py-3.5 text-sm font-mono tracking-widest uppercase
                   focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                   transition"
            autocomplete="off"
            spellcheck="false"
          />
          <button
            type="submit"
            :disabled="loading || vinInput.trim().length !== 17"
            class="btn-primary px-6 py-3.5 text-sm disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            <span v-if="loading" class="flex items-center gap-2">
              <svg class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
              </svg>
              Decoding…
            </span>
            <span v-else>Decode VIN</span>
          </button>
        </form>

        <p v-if="vinInput.length > 0 && vinInput.length < 17" class="text-yellow-400 text-xs mt-2 pl-1">
          VIN must be exactly 17 characters ({{ vinInput.length }}/17)
        </p>
        <p v-if="apiError" class="text-red-400 text-xs mt-2 pl-1">{{ apiError }}</p>
      </div>
    </div>

    <!-- ── Main content ──────────────────────────────────────────────────── -->
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">

      <!-- Ghost marketing CTA banner -->
      <div class="rounded-2xl border border-primary-500/30 bg-primary-900/20 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <div class="flex-shrink-0 bg-primary-600/20 rounded-xl p-3">
          <svg class="w-7 h-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-white font-semibold text-sm">Ready to bring your dealership online?</p>
          <p class="text-gray-400 text-sm mt-0.5">
            I build fast, professional websites for independent dealers — so you can focus on selling cars.
          </p>
        </div>
        <RouterLink to="/#contact-form" class="flex-shrink-0 btn-primary text-sm py-2.5 px-5 whitespace-nowrap">
          Let's Talk
        </RouterLink>
      </div>

      <!-- Empty state -->
      <div v-if="!result && !loading" class="text-center py-16 text-gray-500">
        <svg class="w-16 h-16 mx-auto mb-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7"/>
        </svg>
        <p class="text-lg font-medium text-gray-400">Enter a VIN above to see full vehicle details</p>
        <p class="text-sm mt-2">Data sourced from the NHTSA National Vehicle Database — always free, no account needed.</p>
      </div>

      <!-- Loading skeleton -->
      <div v-else-if="loading" class="animate-pulse space-y-6">
        <div class="h-10 bg-dark-700 rounded-xl w-1/3"></div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div v-for="n in 12" :key="n" class="h-20 bg-dark-700 rounded-xl"></div>
        </div>
      </div>

      <!-- ── Window Sticker ──────────────────────────────────────────────── -->
      <div v-else-if="result" class="space-y-8">

        <!-- Vehicle identity header -->
        <div class="rounded-2xl border border-white/10 bg-dark-800 overflow-hidden">
          <div class="bg-gradient-to-r from-primary-700 to-primary-600 px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p class="text-primary-200 text-xs font-semibold uppercase tracking-widest mb-1">Window Sticker</p>
              <h2 class="text-2xl md:text-3xl font-extrabold text-white">
                {{ result.year }} {{ result.make }} {{ result.model }}
              </h2>
              <p v-if="result.trim" class="text-primary-200 text-sm mt-0.5">{{ result.trim }}</p>
            </div>
            <div class="sm:text-right">
              <p class="text-primary-200 text-xs uppercase tracking-widest mb-1">VIN</p>
              <p class="text-white font-mono font-bold text-lg tracking-widest">{{ decodedVin }}</p>
            </div>
          </div>

          <!-- Quick-glance badges -->
          <div class="px-8 py-5 flex flex-wrap gap-3">
            <span v-for="badge in quickBadges" :key="badge.label"
              class="inline-flex items-center gap-1.5 bg-dark-700 border border-white/10 rounded-lg px-3 py-1.5 text-sm">
              <span class="text-gray-400 text-xs">{{ badge.label }}</span>
              <span class="text-white font-medium">{{ badge.value }}</span>
            </span>
          </div>
        </div>

        <!-- Detail sections -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StickerSection title="Vehicle Identity"     :rows="result.identity" />
          <StickerSection title="Engine & Powertrain"  :rows="result.engine" />
          <StickerSection title="Dimensions & Weight"  :rows="result.dimensions" />
          <StickerSection title="Safety & Standards"   :rows="result.safety" />
          <StickerSection title="Manufacturing"        :rows="result.manufacturing" class="md:col-span-2" />
        </div>

        <p class="text-center text-xs text-gray-600">
          Data sourced from the NHTSA vPIC API &mdash; provided as-is. Always verify with an official CARFAX or AutoCheck report.
        </p>
      </div>

      <!-- Bottom CTA -->
      <div class="rounded-2xl bg-dark-800 border border-white/10 p-8 text-center space-y-4">
        <h3 class="text-white text-xl font-bold">Looking for more ways to digitize your dealership?</h3>
        <p class="text-gray-400 max-w-xl mx-auto text-sm">
          A professional website puts your inventory in front of buyers 24/7 — no more missed calls,
          no more hand-written lists. I'll handle everything from setup to launch.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <RouterLink to="/#contact-form" class="btn-primary text-sm px-6 py-3">Get Your Site Built</RouterLink>
          <RouterLink to="/demo"          class="btn-outline text-sm px-6 py-3">View Demo Site</RouterLink>
        </div>
      </div>

    </div>
  </PageLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import PageLayout from '../components/layout/PageLayout.vue'
import StickerSection from '../components/vin/StickerSection.vue'
import { siteSettings } from '../composables/useSiteSettings'
import { usePageMeta }  from '../composables/usePageMeta'

usePageMeta(() => ({
  title:       'Free VIN Decoder — Full Vehicle Report',
  description: `Decode any 17-character VIN instantly and get a full window-sticker report: make, model, engine, safety features, and manufacturing details. Free, no sign-up required. Powered by ${siteSettings.businessName}.`,
  path:        '/vin-decoder',
}))

// ── State ─────────────────────────────────────────────────────────────────────
const vinInput   = ref('')
const loading    = ref(false)
const apiError   = ref('')
const result     = ref(null)
const decodedVin = ref('')

// ── Helpers ───────────────────────────────────────────────────────────────────
function val(raw, fallback = '—') {
  return raw && raw.trim() && raw.trim() !== 'Not Applicable' ? raw.trim() : fallback
}

function buildRows(obj) {
  return Object.entries(obj)
    .filter(([, v]) => v && v !== '—')
    .map(([label, value]) => ({ label, value }))
}

// ── API call ──────────────────────────────────────────────────────────────────
async function decode() {
  const vin = vinInput.value.trim().toUpperCase()
  if (vin.length !== 17) return

  loading.value  = true
  apiError.value = ''
  result.value   = null
  decodedVin.value = vin

  try {
    const res  = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/${vin}?format=json`)
    const data = await res.json()

    if (!res.ok || !data?.Results?.length) {
      apiError.value = 'Could not decode this VIN. Please verify it is correct and try again.'
      return
    }

    const d = data.Results[0]

    const errorCode = d.ErrorCode || ''
    if (errorCode && !errorCode.startsWith('0')) {
      apiError.value = `NHTSA note: ${d.AdditionalErrorText || 'Some fields may be unavailable for this VIN.'}`
    }

    // Quick badges
    const badges = []
    if (val(d.ModelYear)      !== '—') badges.push({ label: 'Year',  value: val(d.ModelYear) })
    if (val(d.VehicleType)    !== '—') badges.push({ label: 'Type',  value: val(d.VehicleType) })
    if (val(d.BodyClass)      !== '—') badges.push({ label: 'Body',  value: val(d.BodyClass) })
    if (val(d.DriveType)      !== '—') badges.push({ label: 'Drive', value: val(d.DriveType) })
    if (val(d.FuelTypePrimary)!== '—') badges.push({ label: 'Fuel',  value: val(d.FuelTypePrimary) })
    if (val(d.Doors)          !== '—') badges.push({ label: 'Doors', value: val(d.Doors) })
    if (val(d.Seats)          !== '—') badges.push({ label: 'Seats', value: val(d.Seats) })

    const cylinders = val(d.EngineCylinders)
    const disp      = val(d.DisplacementL)
    const engineStr = cylinders !== '—' && disp !== '—'
      ? `${disp}L ${cylinders}-Cylinder`
      : cylinders !== '—' ? `${cylinders}-Cylinder` : disp !== '—' ? `${disp}L` : '—'

    result.value = {
      year:  val(d.ModelYear),
      make:  val(d.Make),
      model: val(d.Model),
      trim:  val(d.Trim) !== '—' ? val(d.Trim) : '',
      quickBadges: badges,
      identity: buildRows({
        'Make': val(d.Make), 'Model': val(d.Model), 'Year': val(d.ModelYear),
        'Trim': val(d.Trim), 'Series': val(d.Series), 'Body Style': val(d.BodyClass),
        'Vehicle Type': val(d.VehicleType), 'Doors': val(d.Doors), 'Seats': val(d.Seats),
      }),
      engine: buildRows({
        'Engine': engineStr, 'Horsepower (HP)': val(d.EngineHP),
        'Engine KW': val(d.EngineKW), 'Engine Model': val(d.EngineModel),
        'Fuel Type (Primary)': val(d.FuelTypePrimary), 'Fuel Type (Secondary)': val(d.FuelTypeSecondary),
        'Turbo': val(d.Turbo), 'Drive Type': val(d.DriveType),
        'Transmission Style': val(d.TransmissionStyle), 'Transmission Speeds': val(d.TransmissionSpeeds),
      }),
      dimensions: buildRows({
        'GVWR': val(d.GVWR), 'Wheelbase (in)': val(d.WheelBaseShort),
        'Bed Length (in)': val(d.BedLengthIN), 'Bed Type': val(d.BedType),
        'Cab Type': val(d.CabType), 'Curb Weight (lbs)': val(d.CurbWeightLB),
      }),
      safety: buildRows({
        'ABS Brakes': val(d.ABS), 'ESC': val(d.ESC), 'Traction Control': val(d.TractionControl),
        'Forward Collision Warn': val(d.ForwardCollisionWarning),
        'Lane Departure Warn': val(d.LaneDepartureWarning),
        'Backup Camera': val(d.RearVisibilitySystem),
        'Air Bags Front': val(d.AirBagLocFront), 'Air Bags Side': val(d.AirBagLocSide),
        'Air Bags Curtain': val(d.AirBagLocCurtain),
      }),
      manufacturing: buildRows({
        'Manufacturer': val(d.Manufacturer), 'Plant City': val(d.PlantCity),
        'Plant State': val(d.PlantState), 'Plant Country': val(d.PlantCountry),
        'Made In': val(d.Origin), 'Destination Market': val(d.DestinationMarket),
      }),
    }

  } catch {
    apiError.value = 'Network error — please check your connection and try again.'
  } finally {
    loading.value = false
  }
}

const quickBadges = computed(() => result.value?.quickBadges ?? [])
</script>

<style scoped>
.btn-outline {
  @apply inline-flex items-center justify-center rounded-xl border border-primary-500 text-primary-400
         font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-150;
}
</style>
