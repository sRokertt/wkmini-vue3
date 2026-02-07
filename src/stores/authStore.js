import { defineStore } from 'pinia'
import { apiRequest } from '@/lib/api'

const backendUnavailableMessage = (status) => {
  const suffix = status ? `（HTTP ${status}）` : ''
  return `后端未启动或 /api 代理不可用${suffix}。请先启动 wkmini-server（默认 http://localhost:8080）。`
}

const isBackendUnavailable = (error) => {
  const status = error?.status
  if (!status) return true
  return status >= 500
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    initialized: false,
    loading: false,
    user: null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
  },
  actions: {
    async init() {
      if (this.initialized) return
      this.initialized = true
      try {
        await this.fetchCsrf()
        await this.fetchMe()
      } catch {
        this.user = null
      }
    },

    async fetchCsrf() {
      try {
        await apiRequest('/api/v1/auth/csrf')
      } catch (e) {
        if (isBackendUnavailable(e)) {
          const err = new Error(backendUnavailableMessage(e?.status))
          err.status = e?.status
          throw err
        }
        throw e
      }
    },

    async fetchMe() {
      const payload = await apiRequest('/api/v1/auth/me')
      this.user = payload?.data || null
    },

    async login(identifier, password) {
      this.loading = true
      try {
        await this.fetchCsrf()
        const payload = await apiRequest('/api/v1/auth/login', {
          method: 'POST',
          body: { identifier, password },
          csrf: true,
        })
        this.user = payload?.data || null
      } finally {
        this.loading = false
      }
    },

    async register(email, password, username) {
      this.loading = true
      try {
        await this.fetchCsrf()
        const payload = await apiRequest('/api/v1/auth/register', {
          method: 'POST',
          body: {
            email,
            password,
            ...(username && String(username).trim() ? { username: String(username).trim() } : {}),
          },
          csrf: true,
        })
        this.user = payload?.data || null
      } finally {
        this.loading = false
      }
    },

    async logout() {
      this.loading = true
      try {
        await this.fetchCsrf()
        await apiRequest('/api/v1/auth/logout', { method: 'POST', csrf: true })
      } finally {
        this.user = null
        this.loading = false
      }
    },
  },
})
