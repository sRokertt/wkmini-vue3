import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { courseDefaults, courses as courseData } from '@/data/courses'

const favoriteStoreKey = 'wkmini-course-favorites'

const readStorage = (key, fallback) => {
  if (typeof window === 'undefined') {
    return fallback
  }
  const raw = window.localStorage.getItem(key)
  if (!raw) {
    return fallback
  }
  try {
    return JSON.parse(raw)
  } catch (error) {
    return fallback
  }
}

const writeStorage = (key, value) => {
  if (typeof window === 'undefined') {
    return
  }
  window.localStorage.setItem(key, JSON.stringify(value))
}

const normalizeCourse = (course) => ({
  ...courseDefaults,
  ...course,
  tags: course?.tags ?? courseDefaults.tags,
  planWeeks: course?.planWeeks ?? courseDefaults.planWeeks,
  outcomes: course?.outcomes ?? courseDefaults.outcomes,
  keyTopics: course?.keyTopics ?? courseDefaults.keyTopics,
  learningWays: course?.learningWays ?? courseDefaults.learningWays,
  lessonItems: course?.lessonItems ?? courseDefaults.lessonItems,
  recommended: course?.recommended ?? courseDefaults.recommended,
})

export const useCourseStore = defineStore('course', () => {
  const courses = ref(courseData)
  const favoriteIds = ref(readStorage(favoriteStoreKey, []))

  const courseList = computed(() => courses.value.map((course) => normalizeCourse(course)))

  const getCourseById = (id) => {
    const fallback = courses.value[0]
    const found = courses.value.find((course) => course.id === id) || fallback
    return normalizeCourse(found)
  }

  const isFavorited = (courseId) => favoriteIds.value.includes(courseId)

  const toggleFavorite = (courseId) => {
    if (favoriteIds.value.includes(courseId)) {
      favoriteIds.value = favoriteIds.value.filter((id) => id !== courseId)
      writeStorage(favoriteStoreKey, favoriteIds.value)
      return
    }
    favoriteIds.value = [...favoriteIds.value, courseId]
    writeStorage(favoriteStoreKey, favoriteIds.value)
  }

  return {
    courseList,
    getCourseById,
    favoriteIds,
    isFavorited,
    toggleFavorite,
  }
})
