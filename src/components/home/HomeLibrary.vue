<script setup>
import { computed } from 'vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useLibraryStore } from '@/stores/libraryStore'

const libraryStore = useLibraryStore()
const featuredItems = computed(() => libraryStore.itemList.slice(0, 3))
</script>

<template>
  <section class="mt-14">
    <Card class="border-slate-200/80 bg-white/80">
      <CardHeader>
        <CardTitle>资料库</CardTitle>
        <CardDescription>模板、清单与工具的集中管理</CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4 md:grid-cols-3">
        <router-link
          v-for="item in featuredItems"
          :key="item.id"
          class="rounded-2xl border border-slate-200/80 bg-white/80 p-4 hover:border-slate-300"
          to="/library"
        >
          <p class="text-sm font-medium">{{ item.title }}</p>
          <p class="mt-2 text-xs text-slate-500">{{ item.description }}</p>
        </router-link>
      </CardContent>
    </Card>
  </section>
</template>
