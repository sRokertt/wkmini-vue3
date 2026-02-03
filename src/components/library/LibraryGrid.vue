<script setup>
defineProps({
  columns: {
    type: String,
    default: 'md:grid-cols-2 lg:grid-cols-3',
  },
})
</script>

<template>
  <div :class="['grid gap-4', columns]">
    <slot />
  </div>
</template>
