<template>
  <!-- RouterView renders whichever page component matches the current route -->
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { fetchSiteSettings } from './composables/useSiteSettings'

// Fetch backend settings on app load; individual views handle their own meta tags.
onMounted(() => { fetchSiteSettings() })
</script>
