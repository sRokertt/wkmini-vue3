<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BasePage from '@/components/layout/BasePage.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { usePathStore } from '@/stores/pathStore'
import { useCourseStore } from '@/stores/courseStore'

const route = useRoute()
const router = useRouter()
const pathStore = usePathStore()
const courseStore = useCourseStore()

const pathId = computed(() => Number(route.params.id || 1))
const path = computed(() => pathStore.getPathById(pathId.value))
const recommendedCourses = computed(() =>
  path.value.recommendedCourseIds.map((id) => courseStore.getCourseById(id))
)
const durationLabel = computed(() => path.value.durationText || `${path.value.durationWeeks} 周`)

</script>

<template>
  <BasePage>
    <section class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div class="rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
          <div class="flex flex-wrap items-center gap-3">
            <Badge class="bg-slate-900 text-white">学习路径</Badge>
            <Badge variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">{{ durationLabel }}</Badge>
            <Badge variant="outline" class="border-slate-200 bg-white/70">推荐</Badge>
          </div>
          <h1 class="mt-5 text-3xl font-semibold">{{ path.title }}</h1>
          <p class="mt-3 text-sm text-slate-600">
            {{ path.summary }}
          </p>
          <div class="mt-6 flex flex-wrap gap-2 text-xs text-slate-500">
            <Badge v-for="tag in path.tags" :key="tag" variant="outline">{{ tag }}</Badge>
          </div>
          <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button class="bg-slate-900 text-white hover:bg-slate-800" @click="router.push('/errors/403')">开始学习路径</Button>
            <Button variant="outline" @click="router.push('/errors/403')">收藏路径</Button>
            <Button variant="outline" @click="$router.push('/paths')">返回路径列表</Button>
          </div>
        </div>

        <Card class="border-slate-200/80 bg-white/80">
          <CardHeader>
            <CardTitle>路径信息</CardTitle>
            <CardDescription>建议节奏与难度</CardDescription>
          </CardHeader>
          <CardContent class="space-y-4 text-sm text-slate-600">
            <div>
              <p class="text-xs text-slate-500">总时长</p>
              <p class="mt-1 text-lg font-semibold text-slate-900">{{ durationLabel }}</p>
            </div>
            <div>
              <p class="text-xs text-slate-500">适合人群</p>
              <p class="mt-1">{{ path.audience }}</p>
            </div>
            <div>
              <p class="text-xs text-slate-500">学习节奏</p>
              <p class="mt-1">{{ path.rhythm }}</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" class="w-full" @click="router.push('/errors/403')">查看课程清单</Button>
          </CardFooter>
        </Card>
    </section>

    <section class="mt-10 grid gap-4 md:grid-cols-2">
        <Card class="border-slate-200/80 bg-white/80">
          <CardHeader>
            <CardTitle>阶段拆解</CardTitle>
            <CardDescription>按阶段推进</CardDescription>
          </CardHeader>
          <CardContent class="space-y-3 text-sm text-slate-600">
            <div
              v-for="stage in path.stages"
              :key="stage.title"
              class="rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3"
            >
              <p class="font-medium text-slate-800">{{ stage.title }}</p>
              <p class="mt-1 text-xs text-slate-500">{{ stage.detail }}</p>
            </div>
          </CardContent>
        </Card>

        <Card class="border-slate-200/80 bg-white/80">
          <CardHeader>
            <CardTitle>推荐课程</CardTitle>
            <CardDescription>路径内课程清单</CardDescription>
          </CardHeader>
          <CardContent class="space-y-3 text-sm text-slate-600">
            <div
              v-for="course in recommendedCourses"
              :key="course.id"
              class="flex items-center justify-between rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3"
            >
              <span>{{ course.title }}</span>
              <Button variant="outline" size="sm" @click="$router.push(`/courses/${course.id}`)">进入</Button>
            </div>
          </CardContent>
        </Card>
    </section>
  </BasePage>
</template>
