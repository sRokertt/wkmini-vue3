import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import CoursesPage from '@/pages/CoursesPage.vue'
import CourseDetailPage from '@/pages/CourseDetailPage.vue'
import CourseChaptersPage from '@/pages/CourseChaptersPage.vue'
import CoursePlanPage from '@/pages/CoursePlanPage.vue'
import LessonDetailPage from '@/pages/LessonDetailPage.vue'
import PathsPage from '@/pages/PathsPage.vue'
import PathDetailPage from '@/pages/PathDetailPage.vue'
import LibraryPage from '@/pages/LibraryPage.vue'
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
    { path: '/library', name: 'library', component: LibraryPage },
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

router.beforeEach((to) => {
  if (to.meta?.requiresAuth && !isAuthenticated()) {
    return errorRoute('error-403', to, 'auth-required')
  }

  if (to.name === 'courses' && to.query?.category) {
    const category = String(to.query.category)
    if (!allowedCourseCategories.has(category)) {
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
    return errorRoute('error-404', to, 'invalid-id')
  }

  const id = Number(idParam)
  if (to.name === 'course-detail' || to.name === 'course-chapters' || to.name === 'course-plan') {
    const courseStore = useCourseStore()
    const exists = courseStore.courseList.some((item) => item.id === id)
    if (!exists) {
      return errorRoute('error-404', to, 'course-not-found')
    }

    const course = courseStore.getCourseById(id)
    if (!course.title || !course.description) {
      return errorRoute('error-404', to, 'course-incomplete')
    }

    if (to.name === 'course-chapters' && (!course.lessonItems || course.lessonItems.length === 0)) {
      return errorRoute('error-404', to, 'course-empty-chapters')
    }

    if (to.name === 'course-plan') {
      const hasPlanWeeks = Array.isArray(course.planWeeks) && course.planWeeks.length > 0
      const hasOutcomes = Array.isArray(course.outcomes) && course.outcomes.length > 0
      if (!hasPlanWeeks || !hasOutcomes) {
        return errorRoute('error-404', to, 'course-plan-missing')
      }
    }
  }

  if (to.name === 'lesson-detail') {
    const courseStore = useCourseStore()
    const course = courseStore.getCourseById(1)
    const lesson = course.lessonItems?.find((item) => item.id === id)
    if (!lesson) {
      return errorRoute('error-404', to, 'lesson-not-found')
    }
    if (!lesson.content) {
      return errorRoute('error-404', to, 'lesson-empty')
    }
  }

  if (to.name === 'path-detail') {
    const pathStore = usePathStore()
    const exists = pathStore.pathList.some((item) => item.id === id)
    if (!exists) {
      return errorRoute('error-404', to, 'path-not-found')
    }
    const path = pathStore.getPathById(id)
    if (!path.title || !path.summary) {
      return errorRoute('error-404', to, 'path-incomplete')
    }
    if (Array.isArray(path.stages) && path.stages.length === 0) {
      return errorRoute('error-404', to, 'path-empty-stages')
    }
    if (Array.isArray(path.recommendedCourseIds) && path.recommendedCourseIds.length > 0) {
      const courseStore = useCourseStore()
      const invalid = path.recommendedCourseIds.some(
        (courseId) => !courseStore.courseList.some((item) => item.id === courseId)
      )
      if (invalid) {
        return errorRoute('error-500', to, 'path-course-invalid')
      }
    }
  }

  return true
})

export default router
