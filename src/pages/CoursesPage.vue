<script setup>
import BasePage from '@/components/layout/BasePage.vue'
import CourseGrid from '@/components/courses/CourseGrid.vue'
import CoursesHeader from '@/components/courses/CoursesHeader.vue'
import CoursesTabs from '@/components/courses/CoursesTabs.vue'
import { TabsContent } from '@/components/ui/tabs'
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { useCourseStore } from '@/stores/courseStore'

const router = useRouter()
const searchQuery = ref('')
const appliedQuery = ref('')

const courseStore = useCourseStore()
const courses = computed(() => courseStore.courseList)

const categories = [
  { label: '全部', value: 'all' },
  { label: '算法', value: 'algo' },
  { label: '数学', value: 'math' },
  { label: '机器学习', value: 'ml' },
]

const goCourse = (id) => {
  router.push(`/courses/${id}`)
}

const keyword = computed(() => appliedQuery.value.trim().toLowerCase())

const matchesKeyword = (course) => {
  if (!keyword.value) return true
  return `${course.title} ${course.description}`.toLowerCase().includes(keyword.value)
}

const filteredByCategory = (category) =>
  courses.value.filter(
    (course) => matchesKeyword(course) && (category === 'all' || course.category === category)
  )

const goSearch = () => {
  appliedQuery.value = searchQuery.value
}

const resetSearch = () => {
  searchQuery.value = ''
  appliedQuery.value = ''
}
</script>

<template>
  <BasePage max-width="max-w-6xl">
    <CoursesHeader v-model="searchQuery" @search="goSearch" @reset="resetSearch" />
    <section class="mt-10">
      <CoursesTabs default-value="all" :categories="categories">
        <TabsContent v-for="category in categories" :key="category.value" :value="category.value" class="mt-6">
          <CourseGrid
            :courses="filteredByCategory(category.value)"
            :columns="category.value === 'all' ? undefined : 'md:grid-cols-2'"
            @enter="goCourse"
          />
        </TabsContent>
      </CoursesTabs>
    </section>
  </BasePage>
</template>
