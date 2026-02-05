<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BasePage from '@/components/layout/BasePage.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { usePathStore } from '@/stores/pathStore'
import { useCourseStore } from '@/stores/courseStore'

const route = useRoute()
const pathStore = usePathStore()
const courseStore = useCourseStore()

const pathId = computed(() => Number(route.params.id || 1))
const path = computed(() => pathStore.getPathById(pathId.value))
const courses = computed(() => path.value.recommendedCourseIds.map((id) => courseStore.getCourseById(id)))
</script>

<template>
  <BasePage>
    <section class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div class="rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
        <div class="flex flex-wrap items-center gap-3">
          <Badge class="bg-slate-900 text-white">路径课程</Badge>
          <Badge variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">{{ path.title }}</Badge>
        </div>
        <h1 class="mt-5 text-3xl font-semibold">课程清单</h1>
        <p class="mt-3 text-sm text-slate-600">按推荐顺序完成路径内课程。</p>
        <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <router-link :to="`/paths/${pathId}`">
            <Button variant="outline">返回路径详情</Button>
          </router-link>
        </div>
      </div>

      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>学习建议</CardTitle>
          <CardDescription>建议按顺序学习</CardDescription>
        </CardHeader>
        <CardContent class="space-y-3 text-sm text-slate-600">
          <p>• 先完成路径内基础课程</p>
          <p>• 每门课程完成后复盘总结</p>
          <p>• 保持节奏，避免中断</p>
        </CardContent>
      </Card>
    </section>

    <section class="mt-10">
      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>课程列表</CardTitle>
          <CardDescription>点击进入课程详情</CardDescription>
        </CardHeader>
        <CardContent class="grid gap-3 text-sm text-slate-600">
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
  </BasePage>
</template>
