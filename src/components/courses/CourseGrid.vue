<script setup>
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

defineProps({
  courses: {
    type: Array,
    default: () => [],
  },
  columns: {
    type: String,
    default: 'md:grid-cols-2 lg:grid-cols-3',
  },
})

const emit = defineEmits(['enter'])

const formatChapters = (chapters) => {
  if (typeof chapters === 'number') {
    return `${chapters} 章节`
  }
  return chapters
}
</script>

<template>
  <div :class="['grid gap-4', columns]">
    <Card v-for="course in courses" :key="course.id" class="border-slate-200/80 bg-white/80">
      <CardHeader>
        <CardTitle>{{ course.title }}</CardTitle>
        <CardDescription>{{ course.description }}</CardDescription>
      </CardHeader>
      <CardContent>
        <p class="text-sm text-slate-600">{{ course.description }}</p>
      </CardContent>
      <CardFooter class="flex items-center justify-between">
        <Badge variant="outline">{{ formatChapters(course.chapters) }}</Badge>
        <Button variant="outline" size="sm" @click="emit('enter', course.id)">进入</Button>
      </CardFooter>
    </Card>
    <Card v-if="courses.length === 0" class="border-dashed border-slate-200/80 bg-white/60">
      <CardHeader>
        <CardTitle>没有匹配课程</CardTitle>
        <CardDescription>尝试更换关键词或切换分类。</CardDescription>
      </CardHeader>
    </Card>
  </div>
</template>
