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
import { computed } from 'vue'
import { useCourseStore } from '@/stores/courseStore'

const courseStore = useCourseStore()
const featuredCourses = computed(() => courseStore.courseList.slice(0, 3))
const formatChapters = (chapters) => `${chapters} 章节`
</script>

<template>
  <section class="mt-14">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-2xl font-semibold">精选课程</h2>
        <p class="mt-1 text-sm text-slate-500">面向基础与进阶能力的核心课程</p>
      </div>
      <router-link to="/courses">
        <Button variant="outline" class="hidden sm:inline-flex">查看全部</Button>
      </router-link>
    </div>
    <div class="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card v-for="course in featuredCourses" :key="course.id" class="border-slate-200/80 bg-white/80">
        <CardHeader>
          <CardTitle>{{ course.title }}</CardTitle>
          <CardDescription>{{ course.tags[0] || course.description }}</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-slate-600">{{ course.description }}</p>
        </CardContent>
        <CardFooter class="flex items-center justify-between">
          <Badge variant="outline">{{ formatChapters(course.chapters) }}</Badge>
          <router-link :to="`/courses/${course.id}`">
            <Button variant="outline" size="sm">进入</Button>
          </router-link>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>
