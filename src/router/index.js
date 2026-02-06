import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import CoursesPage from '@/pages/CoursesPage.vue'
import CourseDetailPage from '@/pages/CourseDetailPage.vue'
import CourseChaptersPage from '@/pages/CourseChaptersPage.vue'
import CoursePlanPage from '@/pages/CoursePlanPage.vue'
import LessonDetailPage from '@/pages/LessonDetailPage.vue'
import PathsPage from '@/pages/PathsPage.vue'
import PathDetailPage from '@/pages/PathDetailPage.vue'
import PathStartPage from '@/pages/PathStartPage.vue'
import LibraryPage from '@/pages/LibraryPage.vue'
import LibraryDetailPage from '@/pages/LibraryDetailPage.vue'
import LibraryResourcePage from '@/pages/LibraryResourcePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ErrorNotFoundPage from '@/pages/ErrorNotFoundPage.vue'
import ErrorForbiddenPage from '@/pages/ErrorForbiddenPage.vue'
import ErrorServerPage from '@/pages/ErrorServerPage.vue'
import { useCourseStore } from '@/stores/courseStore'
import { usePathStore } from '@/stores/pathStore'
import { useLibraryStore } from '@/stores/libraryStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/courses', name: 'courses', component: CoursesPage },
    { path: '/courses/:id', name: 'course-detail', component: CourseDetailPage },
    { path: '/courses/:id/chapters', name: 'course-chapters', component: CourseChaptersPage },
    { path: '/courses/:id/plan', name: 'course-plan', component: CoursePlanPage },
    { path: '/lessons/:id', name: 'lesson-detail', component: LessonDetailPage },
    { path: '/paths', name: 'paths', component: PathsPage },
    { path: '/paths/:id', name: 'path-detail', component: PathDetailPage },
    { path: '/paths/:id/start', name: 'path-start', component: PathStartPage },
    { path: '/library', name: 'library', component: LibraryPage },
    { path: '/library/:id', name: 'library-detail', component: LibraryDetailPage },
    { path: '/library/:id/resource', name: 'library-resource', component: LibraryResourcePage },
    { path: '/about', name: 'about', component: AboutPage },
    { path: '/errors/404', name: 'error-404', component: ErrorNotFoundPage },
    { path: '/errors/403', name: 'error-403', component: ErrorForbiddenPage },
    { path: '/errors/500', name: 'error-500', component: ErrorServerPage },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: ErrorNotFoundPage },
  ],
})

const isValidId = (value) => {
  const parsed = Number(value)
  return Number.isInteger(parsed) && parsed > 0
}

const isAuthenticated = () => false
const allowedCourseCategories = new Set(['all', 'algo', 'math', 'ml'])

const errorRoute = (name, to, reason) => ({
  name,
  query: {
    from: to.fullPath,
    reason,
  },
})

const recordError = (to, reason) => {
  if (typeof window === 'undefined') return
  const payload = {
    path: to.fullPath,
    reason,
    at: new Date().toISOString(),
  }
  window.localStorage.setItem('wkmini-last-error', JSON.stringify(payload))
}

const isValidText = (value) => typeof value === 'string' && value.trim().length > 0
const hasRequiredLessonFields = (lesson) =>
  Number.isInteger(lesson?.id) && isValidText(lesson?.title) && isValidText(lesson?.duration)
const hasRequiredStageFields = (stage) => isValidText(stage?.title) && isValidText(stage?.detail)

router.beforeEach((to) => {
  if (to.meta?.requiresAuth && !isAuthenticated()) {
    recordError(to, 'auth-required')
    return errorRoute('error-403', to, 'auth-required')
  }

  if (to.name === 'courses' && to.query?.category) {
    const category = String(to.query.category)
    if (!allowedCourseCategories.has(category)) {
      recordError(to, 'invalid-category')
      return errorRoute('error-404', to, 'invalid-category')
    }
  }

  if (to.name === 'courses') {
    const courseStore = useCourseStore()
    if (!courseStore.courseList.length) {
      return errorRoute('error-404', to, 'courses-empty')
    }
  }

  if (to.name === 'paths') {
    const pathStore = usePathStore()
    if (!pathStore.pathList.length) {
      return errorRoute('error-404', to, 'paths-empty')
    }
  }

  if (to.name === 'library') {
    const libraryStore = useLibraryStore()
    if (!libraryStore.itemList.length) {
      return errorRoute('error-404', to, 'library-empty')
    }
  }

  const idParam = to.params.id
  if (!idParam) return true
  if (!isValidId(idParam)) {
    recordError(to, 'invalid-id')
    return errorRoute('error-404', to, 'invalid-id')
  }

  const id = Number(idParam)
  if (to.name === 'library-detail' || to.name === 'library-resource') {
    const libraryStore = useLibraryStore()
    const exists = libraryStore.itemList.some((item) => item.id === id)
    if (!exists) {
      recordError(to, 'library-not-found')
      return errorRoute('error-404', to, 'library-not-found')
    }
  }
  if (to.name === 'course-detail' || to.name === 'course-chapters' || to.name === 'course-plan') {
    const courseStore = useCourseStore()
    const exists = courseStore.courseList.some((item) => item.id === id)
    if (!exists) {
      recordError(to, 'course-not-found')
      return errorRoute('error-404', to, 'course-not-found')
    }

    const course = courseStore.getCourseById(id)
    if (!isValidText(course.title) || !isValidText(course.description)) {
      recordError(to, 'course-incomplete')
      return errorRoute('error-404', to, 'course-incomplete')
    }

    if (!Array.isArray(course.tags) || course.tags.length === 0) {
      recordError(to, 'course-tags-missing')
      return errorRoute('error-404', to, 'course-tags-missing')
    }

    if (to.name === 'course-chapters' && (!course.lessonItems || course.lessonItems.length === 0)) {
      recordError(to, 'course-empty-chapters')
      return errorRoute('error-404', to, 'course-empty-chapters')
    }

    if (to.name === 'course-chapters' && !course.lessonItems.every(hasRequiredLessonFields)) {
      recordError(to, 'course-chapters-invalid')
      return errorRoute('error-404', to, 'course-chapters-invalid')
    }

    if (to.name === 'course-detail') {
      if (!isValidText(course.highlights) || !isValidText(course.readiness) || !isValidText(course.outcome)) {
        recordError(to, 'course-detail-incomplete')
        return errorRoute('error-404', to, 'course-detail-incomplete')
      }
      if (!Array.isArray(course.recommended) || course.recommended.length === 0) {
        recordError(to, 'course-recommended-missing')
        return errorRoute('error-404', to, 'course-recommended-missing')
      }
    }

    if (to.name === 'course-plan') {
      const hasPlanWeeks = Array.isArray(course.planWeeks) && course.planWeeks.length > 0
      const hasOutcomes = Array.isArray(course.outcomes) && course.outcomes.length > 0
      if (!hasPlanWeeks || !hasOutcomes) {
        recordError(to, 'course-plan-missing')
        return errorRoute('error-404', to, 'course-plan-missing')
      }
    }
  }

  if (to.name === 'lesson-detail') {
    const courseStore = useCourseStore()
    const course = courseStore.getCourseById(1)
    const lesson = course.lessonItems?.find((item) => item.id === id)
    if (!lesson) {
      recordError(to, 'lesson-not-found')
      return errorRoute('error-404', to, 'lesson-not-found')
    }
    if (!lesson.content || lesson.content.trim().length < 10) {
      recordError(to, 'lesson-empty')
      return errorRoute('error-404', to, 'lesson-empty')
    }
  }

  if (to.name === 'path-detail' || to.name === 'path-start' || to.name === 'path-courses') {
    const pathStore = usePathStore()
    const exists = pathStore.pathList.some((item) => item.id === id)
    if (!exists) {
      recordError(to, 'path-not-found')
      return errorRoute('error-404', to, 'path-not-found')
    }
    const path = pathStore.getPathById(id)
    if (!isValidText(path.title) || !isValidText(path.summary)) {
      recordError(to, 'path-incomplete')
      return errorRoute('error-404', to, 'path-incomplete')
    }
    if (Array.isArray(path.stages) && path.stages.length === 0) {
      recordError(to, 'path-empty-stages')
      return errorRoute('error-404', to, 'path-empty-stages')
    }
    if (Array.isArray(path.stages) && !path.stages.every(hasRequiredStageFields)) {
      recordError(to, 'path-stages-invalid')
      return errorRoute('error-404', to, 'path-stages-invalid')
    }
    if (Array.isArray(path.recommendedCourseIds) && path.recommendedCourseIds.length > 0) {
      const courseStore = useCourseStore()
      const invalid = path.recommendedCourseIds.some(
        (courseId) => !courseStore.courseList.some((item) => item.id === courseId)
      )
      if (invalid) {
        recordError(to, 'path-course-invalid')
        return errorRoute('error-500', to, 'path-course-invalid')
      }
    }
  }

  return true
})

export default router
