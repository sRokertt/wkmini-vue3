<script setup>
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

defineProps({
  defaultValue: {
    type: String,
    default: 'all',
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
        <TabsTrigger value="all">全部</TabsTrigger>
        <TabsTrigger value="algo">算法</TabsTrigger>
        <TabsTrigger value="math">数学</TabsTrigger>
        <TabsTrigger value="ml">机器学习</TabsTrigger>
      </TabsList>
    </div>
    <slot />
  </Tabs>
</template>
