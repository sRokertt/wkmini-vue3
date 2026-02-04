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
  ],
})

export default router
