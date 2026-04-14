<!--
  StickerSection — reusable card used inside the VIN decoder window sticker.
  Accepts a title and an array of { label, value } rows.
-->
<template>
  <div class="rounded-2xl border border-white/10 bg-dark-800 overflow-hidden">
    <!-- Section header -->
    <div class="bg-dark-700 px-6 py-3 border-b border-white/10">
      <h3 class="text-white font-semibold text-sm uppercase tracking-wider">{{ title }}</h3>
    </div>

    <!-- Rows -->
    <div class="divide-y divide-white/5">
      <div
        v-for="row in rows"
        :key="row.label"
        class="flex items-baseline justify-between px-6 py-3 gap-4"
      >
        <span class="text-gray-500 text-xs flex-shrink-0">{{ row.label }}</span>
        <span class="text-white text-sm font-medium text-right">{{ row.value }}</span>
      </div>
      <div v-if="!rows.length" class="px-6 py-4 text-gray-600 text-sm">No data available.</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  rows:  { type: Array,  default: () => [] },
})
</script>
