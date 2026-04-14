<template>
  <!-- RouterView renders whichever page component matches the current route -->
  <RouterView />
</template>

<script setup>
import { RouterView, useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { fetchSiteSettings } from './composables/useSiteSettings'
import AOS from 'aos'

const router = useRouter()

onMounted(() => {
  fetchSiteSettings()

  // Initialise AOS after Vue has rendered the DOM so it can find all [data-aos] elements
  AOS.init({
    duration: 700,
    easing:   'ease-out-cubic',
    once:     true,
    offset:   60,
  })

  // Refresh AOS after each route change so newly rendered [data-aos] elements are picked up
  router.afterEach(() => {
    setTimeout(() => AOS.refresh(), 100)
  })
})
</script>
