<script setup>
import { computed } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})

const normalizedItems = computed(() =>
  (props.items || [])
    .map((item) => ({
      label: String(item?.label || '').trim(),
      to: item?.to,
    }))
    .filter((item) => item.label)
)
</script>

<template>
  <nav class="mb-6 text-xs text-slate-500" aria-label="Breadcrumb">
    <template v-for="(item, index) in normalizedItems" :key="`${item.label}-${index}`">
      <router-link
        v-if="item.to && index < normalizedItems.length - 1"
        class="hover:text-slate-900"
        :to="item.to"
      >
        {{ item.label }}
      </router-link>
      <span v-else :class="index === normalizedItems.length - 1 ? 'text-slate-900' : ''">{{ item.label }}</span>
      <span v-if="index < normalizedItems.length - 1" class="px-2">/</span>
    </template>
  </nav>
</template>
