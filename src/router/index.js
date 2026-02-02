import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import CoursesPage from '@/pages/CoursesPage.vue'
import PathsPage from '@/pages/PathsPage.vue'
import LibraryPage from '@/pages/LibraryPage.vue'
import AboutPage from '@/pages/AboutPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/courses', name: 'courses', component: CoursesPage },
    { path: '/paths', name: 'paths', component: PathsPage },
    { path: '/library', name: 'library', component: LibraryPage },
    { path: '/about', name: 'about', component: AboutPage },
  ],
})

export default router
