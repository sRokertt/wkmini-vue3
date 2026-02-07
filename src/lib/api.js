import { http } from '@/lib/http'
import { getCookie, readCsrfToken } from '@/lib/cookies'

export { getCookie, readCsrfToken }

export const apiRequest = async (path, options = {}) => {
  const method = options.method || 'GET'
  const headers = { ...(options.headers || {}) }
  const body = options.body

  const hasBody = body !== undefined && body !== null && String(method).toUpperCase() !== 'GET'
  const csrfEnabled = !!options.csrf

  if (csrfEnabled && !headers['X-CSRF-Token']) {
    const csrfToken = readCsrfToken()
    if (csrfToken) headers['X-CSRF-Token'] = csrfToken
  }

  try {
    const response = await http.request({
      url: path,
      method,
      headers,
      data: hasBody ? body : undefined,
      skipCsrf: !csrfEnabled,
    })

    const payload = response?.data
    if (payload && typeof payload.code === 'number' && payload.code !== 0) {
      const error = new Error(payload?.message || 'Request failed')
      error.status = response?.status
      error.code = payload?.code
      throw error
    }
    return payload
  } catch (e) {
    const status = e?.response?.status
    const payload = e?.response?.data
    const message = payload?.message || e?.message || (status ? `Request failed: ${status}` : 'Request failed')
    const error = new Error(message)
    error.status = status
    error.code = payload?.code
    throw error
  }
}
