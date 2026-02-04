<script setup>
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

defineProps({
  defaultValue: {
    type: String,
    default: 'all',
  },
  categories: {
    type: Array,
    default: () => [
      { label: '全部', value: 'all' },
      { label: '算法', value: 'algo' },
      { label: '数学', value: 'math' },
      { label: '机器学习', value: 'ml' },
    ],
  },
})
</script>

<template>
  <Tabs :default-value="defaultValue" class="w-full">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 class="text-2xl font-semibold">课程分类</h2>
        <p class="mt-1 text-sm text-slate-500">按主题快速切换</p>
      </div>
      <TabsList>
        <TabsTrigger v-for="category in categories" :key="category.value" :value="category.value">
          {{ category.label }}
        </TabsTrigger>
      </TabsList>
    </div>
    <slot />
  </Tabs>
</template>
