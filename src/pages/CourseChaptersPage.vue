<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCourseStore } from '@/stores/courseStore'
import { useProgressStore } from '@/stores/progressStore'
import BasePage from '@/components/layout/BasePage.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const route = useRoute()

const courseId = computed(() => Number(route.params.id || 1))
const courseStore = useCourseStore()
const course = computed(() => courseStore.getCourseById(courseId.value))
const chapters = computed(() => course.value.lessonItems || [])
const totalChapters = computed(() => chapters.value.length)

const progressStore = useProgressStore()
const startLesson = computed(() => {
  const current = chapters.value.find((chapter) => chapter.id === progressStore.currentLessonId)
  return current || chapters.value[0]
})

const getStatus = (chapterId) => progressStore.getStatus(chapterId)
</script>

<template>
  <BasePage>
    <section class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div class="rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
        <div class="flex flex-wrap items-center gap-3">
          <Badge class="bg-slate-900 text-white">章节目录</Badge>
          <Badge variant="outline" class="border-amber-300/60 bg-amber-50 text-amber-700">{{ course.title }}</Badge>
          <Badge variant="outline" class="border-slate-200 bg-white/70">{{ totalChapters }} 章节</Badge>
        </div>
        <h1 class="mt-5 text-3xl font-semibold">课程章节目录</h1>
        <p class="mt-3 text-sm text-slate-600">集中查看所有章节并直接进入学习。</p>
        <p class="mt-2 text-xs text-slate-500">上次学习到：{{ startLesson.title }}</p>
        <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <router-link :to="`/courses/${courseId}`">
            <Button variant="outline">返回课程详情</Button>
          </router-link>
          <router-link :to="`/lessons/${startLesson.id}`">
            <Button class="bg-slate-900 text-white hover:bg-slate-800">继续学习</Button>
          </router-link>
        </div>
      </div>

      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>学习建议</CardTitle>
          <CardDescription>建议按顺序学习</CardDescription>
        </CardHeader>
        <CardContent class="space-y-3 text-sm text-slate-600">
          <p>• 每节课完成后做 3-5 道练习题</p>
          <p>• 完成每个章节后回顾概念卡片</p>
          <p>• 遇到难点优先复习矩阵与线性变换</p>
        </CardContent>
      </Card>
    </section>

    <section class="mt-10">
      <Card class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>章节列表</CardTitle>
          <CardDescription>点击进入具体内容</CardDescription>
        </CardHeader>
        <CardContent class="grid gap-3 text-sm text-slate-600">
          <router-link
            v-for="chapter in chapters"
            :key="chapter.id"
            class="flex items-center justify-between rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3 text-slate-700 hover:border-slate-300"
            :to="`/lessons/${chapter.id}`"
          >
            <span>{{ chapter.id }}. {{ chapter.title }}</span>
            <div class="flex items-center gap-3">
              <span class="text-xs text-slate-400">{{ chapter.duration }}</span>
              <span
                class="rounded-full border px-2 py-0.5 text-xs"
                :class="getStatus(chapter.id).className"
              >
                {{ getStatus(chapter.id).label }}
              </span>
            </div>
          </router-link>
        </CardContent>
      </Card>
    </section>
  </BasePage>
</template>
