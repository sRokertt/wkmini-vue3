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
        <h2 class="text-2xl font-semibold">资料分类</h2>
        <p class="mt-1 text-sm text-slate-500">按内容类型整理</p>
      </div>
      <TabsList>
        <TabsTrigger value="all">全部</TabsTrigger>
        <TabsTrigger value="templates">模板库</TabsTrigger>
        <TabsTrigger value="checklists">清单</TabsTrigger>
        <TabsTrigger value="tools">工具集</TabsTrigger>
      </TabsList>
    </div>
    <slot />
  </Tabs>
</template>
