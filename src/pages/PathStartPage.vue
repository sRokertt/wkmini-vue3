<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BasePage from '@/components/layout/BasePage.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { usePathStore } from '@/stores/pathStore'
import { useCourseStore } from '@/stores/courseStore'

const route = useRoute()
const pathStore = usePathStore()
const courseStore = useCourseStore()

const pathId = computed(() => Number(route.params.id || 1))
const path = computed(() => pathStore.getPathById(pathId.value))
const courses = computed(() => path.value.recommendedCourseIds.map((id) => courseStore.getCourseById(id)))
const durationLabel = computed(() => path.value.durationText || `${path.value.durationWeeks} 周`)
</script>

<template>
  <BasePage>
    <section class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div class="rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
        <div class="flex flex-wrap items-center gap-3">
          <Badge class="bg-slate-900 text-white">开始学习路径</Badge>
          <Badge variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">{{ path.title }}</Badge>
          <Badge variant="outline" class="border-slate-200 bg-white/70">{{ durationLabel }}</Badge>
        </div>
        <h1 class="mt-5 text-3xl font-semibold">{{ path.title }}</h1>
        <p class="mt-3 text-sm text-slate-600">{{ path.summary }}</p>
        <div class="mt-6 flex flex-wrap gap-2 text-xs text-slate-500">
          <Badge v-for="tag in path.tags" :key="tag" variant="outline">{{ tag }}</Badge>
        </div>
        <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <router-link :to="`/paths/${pathId}`">
            <Button variant="outline">返回路径详情</Button>
          </router-link>
          <router-link v-if="courses.length" :to="`/courses/${courses[0].id}`">
            <Button class="bg-slate-900 text-white hover:bg-slate-800">从第一门课开始</Button>
          </router-link>
        </div>
      </div>

      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>开始前准备</CardTitle>
          <CardDescription>确保学习节奏可持续</CardDescription>
        </CardHeader>
        <CardContent class="space-y-3 text-sm text-slate-600">
          <p>• 先通览路径目标与阶段拆解</p>
          <p>• 每周固定学习时间并记录进度</p>
          <p>• 课程结束后做 10 分钟复盘</p>
        </CardContent>
      </Card>
    </section>

    <section class="mt-10 grid gap-4 md:grid-cols-2">
      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>阶段节奏</CardTitle>
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
          <CardTitle>路径课程清单</CardTitle>
          <CardDescription>按推荐顺序学习</CardDescription>
        </CardHeader>
        <CardContent class="space-y-3 text-sm text-slate-600">
          <router-link
            v-for="course in courses"
            :key="course.id"
            class="flex items-center justify-between rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3 text-slate-700 hover:border-slate-300"
            :to="`/courses/${course.id}`"
          >
            <span>{{ course.title }}</span>
            <span class="text-xs text-slate-400">{{ course.chapters }} 章节</span>
          </router-link>
        </CardContent>
      </Card>
    </section>

    <section class="mt-10">
      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>学习路径</CardTitle>
          <CardDescription>按节点推进课程学习</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="flex flex-wrap items-center gap-4">
            <template v-for="(course, index) in courses" :key="course.id">
              <router-link
                :to="`/courses/${course.id}`"
                class="group flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-sm text-slate-700 transition hover:border-slate-300"
              >
                <span class="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                  {{ index + 1 }}
                </span>
                <div>
                  <p class="font-medium text-slate-900 group-hover:text-slate-950">{{ course.title }}</p>
                  <p class="text-xs text-slate-500">{{ course.chapters }} 章节</p>
                </div>
              </router-link>
              <span v-if="index < courses.length - 1" class="hidden h-px w-10 bg-slate-200 md:block" />
            </template>
          </div>
        </CardContent>
      </Card>
    </section>
  </BasePage>
</template>
