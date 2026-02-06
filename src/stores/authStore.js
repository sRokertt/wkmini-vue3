import { defineStore } from 'pinia'
import { apiRequest } from '@/lib/api'

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
      await apiRequest('/api/v1/auth/csrf')
    },

    async fetchMe() {
      const payload = await apiRequest('/api/v1/auth/me')
      this.user = payload?.data || null
    },

    async login(email, password) {
      this.loading = true
      try {
        await this.fetchCsrf()
        const payload = await apiRequest('/api/v1/auth/login', {
          method: 'POST',
          body: { email, password },
          csrf: true,
        })
        this.user = payload?.data || null
      } finally {
        this.loading = false
      }
    },

    async register(email, password) {
      this.loading = true
      try {
        await this.fetchCsrf()
        const payload = await apiRequest('/api/v1/auth/register', {
          method: 'POST',
          body: { email, password },
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
