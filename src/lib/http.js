import axios from 'axios'
import { readCsrfToken } from '@/lib/cookies'

const isWriteMethod = (method) => {
  const m = String(method || 'get').toLowerCase()
  return m !== 'get' && m !== 'head' && m !== 'options'
}

export const http = axios.create({
  baseURL: '/',
  withCredentials: true,
})

http.interceptors.request.use((config) => {
  if (config?.skipCsrf) return config

  const next = { ...config }
  next.headers = { ...(config.headers || {}) }

  if (isWriteMethod(next.method) && !next.headers['X-CSRF-Token']) {
    const csrfToken = readCsrfToken()
    if (csrfToken) next.headers['X-CSRF-Token'] = csrfToken
  }

  return next
})
