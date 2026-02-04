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

const goCourse = (id) => {
  router.push(`/courses/${id}`)
}

const keyword = computed(() => appliedQuery.value.trim().toLowerCase())

const filteredAll = computed(() =>
  courses.value.filter((course) => {
    if (!keyword.value) return true
    return `${course.title} ${course.description}`.toLowerCase().includes(keyword.value)
  })
)

const filteredAlgo = computed(() =>
  filteredAll.value.filter((course) => course.category === 'algo')
)

const filteredMath = computed(() =>
  filteredAll.value.filter((course) => course.category === 'math')
)

const filteredMl = computed(() =>
  filteredAll.value.filter((course) => course.category === 'ml')
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
      <CoursesTabs default-value="all">
        <TabsContent value="all" class="mt-6">
          <CourseGrid :courses="filteredAll" @enter="goCourse" />
        </TabsContent>

        <TabsContent value="algo" class="mt-6">
          <CourseGrid :courses="filteredAlgo" columns="md:grid-cols-2" @enter="goCourse" />
        </TabsContent>

        <TabsContent value="math" class="mt-6">
          <CourseGrid :courses="filteredMath" columns="md:grid-cols-2" @enter="goCourse" />
        </TabsContent>

        <TabsContent value="ml" class="mt-6">
          <CourseGrid :courses="filteredMl" columns="md:grid-cols-2" @enter="goCourse" />
        </TabsContent>
      </CoursesTabs>
    </section>
  </BasePage>
</template>
