<script setup>
import BasePage from '@/components/layout/BasePage.vue'
import LibraryGrid from '@/components/library/LibraryGrid.vue'
import LibraryHeader from '@/components/library/LibraryHeader.vue'
import LibraryTabs from '@/components/library/LibraryTabs.vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { TabsContent } from '@/components/ui/tabs'
import { computed } from 'vue'
import { useLibraryStore } from '@/stores/libraryStore'

const libraryStore = useLibraryStore()
const allItems = computed(() => libraryStore.filteredByCategory('all'))
const templateItems = computed(() => libraryStore.filteredByCategory('templates'))
const checklistItems = computed(() => libraryStore.filteredByCategory('checklists'))
const toolItems = computed(() => libraryStore.filteredByCategory('tools'))
</script>

<template>
  <BasePage max-width="max-w-6xl">
    <LibraryHeader />

    <section class="mt-10">
      <LibraryTabs default-value="all">
        <TabsContent value="all" class="mt-6">
          <LibraryGrid v-if="allItems.length">
              <Card v-for="item in allItems" :key="item.id" class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>{{ item.title }}</CardTitle>
                  <CardDescription>{{ item.description }}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">{{ item.summary }}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" @click="$router.push('/errors/403')">进入</Button>
                </CardFooter>
              </Card>
          </LibraryGrid>
          <Card v-else class="border-dashed border-slate-200/80 bg-white/60">
            <CardHeader>
              <CardTitle>暂无内容</CardTitle>
              <CardDescription>当前分类下还没有可展示的资料。</CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>

        <TabsContent value="templates" class="mt-6">
          <LibraryGrid v-if="templateItems.length">
              <Card v-for="item in templateItems" :key="item.id" class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>{{ item.title }}</CardTitle>
                  <CardDescription>{{ item.description }}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">{{ item.summary }}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" @click="$router.push('/errors/403')">进入</Button>
                </CardFooter>
              </Card>
          </LibraryGrid>
          <Card v-else class="border-dashed border-slate-200/80 bg-white/60">
            <CardHeader>
              <CardTitle>暂无内容</CardTitle>
              <CardDescription>模板库还在整理中。</CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>

        <TabsContent value="checklists" class="mt-6">
          <LibraryGrid v-if="checklistItems.length">
              <Card v-for="item in checklistItems" :key="item.id" class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>{{ item.title }}</CardTitle>
                  <CardDescription>{{ item.description }}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">{{ item.summary }}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" @click="$router.push('/errors/403')">进入</Button>
                </CardFooter>
              </Card>
          </LibraryGrid>
          <Card v-else class="border-dashed border-slate-200/80 bg-white/60">
            <CardHeader>
              <CardTitle>暂无内容</CardTitle>
              <CardDescription>清单内容正在补充。</CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>

        <TabsContent value="tools" class="mt-6">
          <LibraryGrid v-if="toolItems.length">
              <Card v-for="item in toolItems" :key="item.id" class="border-slate-200/80 bg-white/80">
                <CardHeader>
                  <CardTitle>{{ item.title }}</CardTitle>
                  <CardDescription>{{ item.description }}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-slate-600">{{ item.summary }}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" @click="$router.push('/errors/403')">进入</Button>
                </CardFooter>
              </Card>
          </LibraryGrid>
          <Card v-else class="border-dashed border-slate-200/80 bg-white/60">
            <CardHeader>
              <CardTitle>暂无内容</CardTitle>
              <CardDescription>工具集内容仍在准备。</CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
      </LibraryTabs>
    </section>
  </BasePage>
</template>
