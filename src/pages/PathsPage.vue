<script setup>
import BasePage from '@/components/layout/BasePage.vue'
import PathsGrid from '@/components/paths/PathsGrid.vue'
import PathsHeader from '@/components/paths/PathsHeader.vue'
import PathsTabs from '@/components/paths/PathsTabs.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { TabsContent } from '@/components/ui/tabs'
import { computed } from 'vue'
import { usePathStore } from '@/stores/pathStore'

const pathStore = usePathStore()
const allPaths = computed(() => pathStore.filteredByCategory('all'))
const mlPaths = computed(() => pathStore.filteredByCategory('ml'))
const engPaths = computed(() => pathStore.filteredByCategory('eng'))
const mathPaths = computed(() => pathStore.filteredByCategory('math'))
const formatWeeks = (weeks, text) => text || `${weeks} 周`
</script>

<template>
  <BasePage max-width="max-w-6xl">
    <PathsHeader />

    <section class="mt-10">
      <PathsTabs default-value="all">
        <TabsContent value="all" class="mt-6">
          <PathsGrid>
            <Card v-for="path in allPaths" :key="path.id" class="flex h-full flex-col border-slate-200/80 bg-white/80">
              <CardHeader>
                <CardTitle>{{ path.title }}</CardTitle>
                <CardDescription>{{ path.description }}</CardDescription>
              </CardHeader>
              <CardContent class="flex-1">
                <p class="text-sm text-slate-600">{{ path.summary }}</p>
              </CardContent>
              <CardFooter class="mt-auto flex items-center justify-between">
                <Badge variant="outline">{{ formatWeeks(path.durationWeeks, path.durationText) }}</Badge>
                <router-link :to="`/paths/${path.id}`">
                  <Button variant="outline" size="sm">查看详情</Button>
                </router-link>
              </CardFooter>
            </Card>
          </PathsGrid>
        </TabsContent>
        <TabsContent value="ml" class="mt-6">
          <PathsGrid>
            <Card v-for="path in mlPaths" :key="path.id" class="flex h-full flex-col border-slate-200/80 bg-white/80">
              <CardHeader>
                <CardTitle>{{ path.title }}</CardTitle>
                <CardDescription>{{ path.description }}</CardDescription>
              </CardHeader>
              <CardContent class="flex-1">
                <p class="text-sm text-slate-600">{{ path.summary }}</p>
              </CardContent>
              <CardFooter class="mt-auto flex items-center justify-between">
                <Badge variant="outline">{{ formatWeeks(path.durationWeeks, path.durationText) }}</Badge>
                <router-link :to="`/paths/${path.id}`">
                  <Button variant="outline" size="sm">查看详情</Button>
                </router-link>
              </CardFooter>
            </Card>
          </PathsGrid>
        </TabsContent>
        <TabsContent value="eng" class="mt-6">
          <PathsGrid>
            <Card v-for="path in engPaths" :key="path.id" class="flex h-full flex-col border-slate-200/80 bg-white/80">
              <CardHeader>
                <CardTitle>{{ path.title }}</CardTitle>
                <CardDescription>{{ path.description }}</CardDescription>
              </CardHeader>
              <CardContent class="flex-1">
                <p class="text-sm text-slate-600">{{ path.summary }}</p>
              </CardContent>
              <CardFooter class="mt-auto flex items-center justify-between">
                <Badge variant="outline">{{ formatWeeks(path.durationWeeks, path.durationText) }}</Badge>
                <router-link :to="`/paths/${path.id}`">
                  <Button variant="outline" size="sm">查看详情</Button>
                </router-link>
              </CardFooter>
            </Card>
          </PathsGrid>
        </TabsContent>
        <TabsContent value="math" class="mt-6">
          <PathsGrid>
            <Card v-for="path in mathPaths" :key="path.id" class="flex h-full flex-col border-slate-200/80 bg-white/80">
              <CardHeader>
                <CardTitle>{{ path.title }}</CardTitle>
                <CardDescription>{{ path.description }}</CardDescription>
              </CardHeader>
              <CardContent class="flex-1">
                <p class="text-sm text-slate-600">{{ path.summary }}</p>
              </CardContent>
              <CardFooter class="mt-auto flex items-center justify-between">
                <Badge variant="outline">{{ formatWeeks(path.durationWeeks, path.durationText) }}</Badge>
                <router-link :to="`/paths/${path.id}`">
                  <Button variant="outline" size="sm">查看详情</Button>
                </router-link>
              </CardFooter>
            </Card>
          </PathsGrid>
        </TabsContent>
      </PathsTabs>
    </section>
  </BasePage>
</template>
