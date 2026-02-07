<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()
const route = useRoute()
const isLoggedIn = computed(() => authStore.isLoggedIn)
const userLabel = computed(() => authStore.user?.username || authStore.user?.email || '')

const menuOpen = ref(false)
const triggerRef = ref(null)
const menuRef = ref(null)

const closeMenu = () => {
  menuOpen.value = false
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const onDocumentClick = (event) => {
  if (!menuOpen.value) return
  const target = event.target
  const triggerEl = triggerRef.value
  const menuEl = menuRef.value
  if (triggerEl && triggerEl.contains(target)) return
  if (menuEl && menuEl.contains(target)) return
  closeMenu()
}

const onDocumentKeydown = (event) => {
  if (!menuOpen.value) return
  if (event.key === 'Escape') closeMenu()
}

const handleLogout = async () => {
  await authStore.logout()
  closeMenu()
}

watch(
  () => route.fullPath,
  () => {
    closeMenu()
  }
)

onMounted(() => {
  document.addEventListener('click', onDocumentClick, true)
  document.addEventListener('keydown', onDocumentKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick, true)
  document.removeEventListener('keydown', onDocumentKeydown)
})
</script>

<template>
  <header class="grid w-full items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
    <div class="flex items-center gap-3 px-4 py-2 md:justify-self-start">
      <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white shadow-lg shadow-slate-900/20">
        W
      </div>
      <div>
        <p class="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">wkmini</p>
        <p class="text-lg font-semibold">wkmini-vue3</p>
      </div>
    </div>
    <nav class="hidden items-center justify-center gap-6 px-6 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-500 md:flex">
      <router-link
        class="transition hover:text-slate-900"
        active-class="text-slate-900 underline underline-offset-8 decoration-2 decoration-slate-900"
        exact-active-class="text-slate-900 underline underline-offset-8 decoration-2 decoration-slate-900"
        to="/"
      >
        首页
      </router-link>
      <router-link
        class="transition hover:text-slate-900"
        active-class="text-slate-900 underline underline-offset-8 decoration-2 decoration-slate-900"
        exact-active-class="text-slate-900 underline underline-offset-8 decoration-2 decoration-slate-900"
        to="/courses"
      >
        课程
      </router-link>
      <router-link
        class="transition hover:text-slate-900"
        active-class="text-slate-900 underline underline-offset-8 decoration-2 decoration-slate-900"
        exact-active-class="text-slate-900 underline underline-offset-8 decoration-2 decoration-slate-900"
        to="/paths"
      >
        学习路径
      </router-link>
      <router-link
        class="transition hover:text-slate-900"
        active-class="text-slate-900 underline underline-offset-8 decoration-2 decoration-slate-900"
        exact-active-class="text-slate-900 underline underline-offset-8 decoration-2 decoration-slate-900"
        to="/library"
      >
        资料库
      </router-link>
      <router-link
        class="transition hover:text-slate-900"
        active-class="text-slate-900 underline underline-offset-8 decoration-2 decoration-slate-900"
        exact-active-class="text-slate-900 underline underline-offset-8 decoration-2 decoration-slate-900"
        to="/about"
      >
        关于
      </router-link>
    </nav>
    <div class="hidden px-3 py-2 md:flex md:justify-self-end">
      <div v-if="isLoggedIn" class="flex items-center gap-3">
        <div class="relative">
          <button
            ref="triggerRef"
            type="button"
            class="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
            :aria-expanded="menuOpen ? 'true' : 'false'"
            aria-haspopup="menu"
            @click="toggleMenu"
          >
            <Badge class="bg-slate-900 text-white">我</Badge>
            <span class="max-w-[180px] truncate">{{ userLabel }}</span>
            <span class="text-slate-400">▾</span>
          </button>

          <div
            v-if="menuOpen"
            ref="menuRef"
            role="menu"
            class="absolute right-0 z-50 mt-2 w-52 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 shadow-lg shadow-slate-900/10 backdrop-blur"
          >
            <router-link
              to="/me"
              role="menuitem"
              class="block px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
            >
              个人中心
            </router-link>
            <div class="h-px bg-slate-200/80" />
            <button
              type="button"
              role="menuitem"
              class="block w-full px-4 py-3 text-left text-sm text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
              :disabled="authStore.loading"
              @click="handleLogout"
            >
              退出登录
            </button>
          </div>
        </div>
        <router-link to="/courses">
          <Button class="bg-slate-900 text-white hover:bg-slate-800">进入学习</Button>
        </router-link>
      </div>
      <div v-else class="flex items-center gap-3">
        <router-link to="/register">
          <Button variant="outline">注册</Button>
        </router-link>
        <router-link to="/login">
          <Button class="bg-slate-900 text-white hover:bg-slate-800">登录</Button>
        </router-link>
      </div>
    </div>
  </header>
</template>
