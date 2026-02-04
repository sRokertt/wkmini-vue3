<script setup>
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { computed } from 'vue'
import { usePathStore } from '@/stores/pathStore'

const pathStore = usePathStore()
const featuredMl = computed(() => pathStore.filteredByCategory('ml').slice(0, 2))
const featuredEng = computed(() => pathStore.filteredByCategory('eng').slice(0, 2))
const featuredMath = computed(() => pathStore.filteredByCategory('math').slice(0, 2))
const formatWeeks = (weeks, text) => text || `${weeks} 周`
</script>

<template>
  <section class="mt-14">
    <Tabs default-value="ml" class="w-full">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 class="text-2xl font-semibold">学习路径</h2>
          <p class="mt-1 text-sm text-slate-500">按目标组织内容，清晰推进</p>
        </div>
        <TabsList>
          <TabsTrigger value="ml">机器学习</TabsTrigger>
          <TabsTrigger value="eng">工程化</TabsTrigger>
          <TabsTrigger value="math">数学基础</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="ml" class="mt-6">
        <div class="grid gap-4 md:grid-cols-2">
          <Card v-for="path in featuredMl" :key="path.id" class="border-slate-200">
            <CardHeader>
              <CardTitle>{{ path.title }}</CardTitle>
              <CardDescription>{{ path.description }}</CardDescription>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-slate-600">{{ path.summary }}</p>
            </CardContent>
            <CardFooter class="flex items-center justify-between">
              <Badge variant="outline">{{ formatWeeks(path.durationWeeks, path.durationText) }}</Badge>
              <router-link :to="`/paths/${path.id}`">
                <Button variant="outline" size="sm">查看详情</Button>
              </router-link>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="eng" class="mt-6">
        <div class="grid gap-4 md:grid-cols-2">
          <Card v-for="path in featuredEng" :key="path.id" class="border-slate-200">
            <CardHeader>
              <CardTitle>{{ path.title }}</CardTitle>
              <CardDescription>{{ path.description }}</CardDescription>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-slate-600">{{ path.summary }}</p>
            </CardContent>
            <CardFooter class="flex items-center justify-between">
              <Badge variant="outline">{{ formatWeeks(path.durationWeeks, path.durationText) }}</Badge>
              <router-link :to="`/paths/${path.id}`">
                <Button variant="outline" size="sm">查看详情</Button>
              </router-link>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="math" class="mt-6">
        <div class="grid gap-4 md:grid-cols-2">
          <Card v-for="path in featuredMath" :key="path.id" class="border-slate-200">
            <CardHeader>
              <CardTitle>{{ path.title }}</CardTitle>
              <CardDescription>{{ path.description }}</CardDescription>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-slate-600">{{ path.summary }}</p>
            </CardContent>
            <CardFooter class="flex items-center justify-between">
              <Badge variant="outline">{{ formatWeeks(path.durationWeeks, path.durationText) }}</Badge>
              <router-link :to="`/paths/${path.id}`">
                <Button variant="outline" size="sm">查看详情</Button>
              </router-link>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  </section>
</template>
