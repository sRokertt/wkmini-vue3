const parseJsonSafely = async (response) => {
  try {
    return await response.json()
  } catch {
    return null
  }
}

export const getCookie = (name) => {
  if (typeof document === 'undefined') return ''
  const needle = `${encodeURIComponent(name)}=`
  const parts = String(document.cookie || '').split(';')
  for (const part of parts) {
    const trimmed = part.trim()
    if (!trimmed.startsWith(needle)) continue
    return decodeURIComponent(trimmed.slice(needle.length))
  }
  return ''
}

export const readCsrfToken = () => getCookie('wkmini-csrf')

export const apiRequest = async (path, options = {}) => {
  const method = options.method || 'GET'
  const headers = {
    ...(options.headers || {}),
  }

  const body = options.body
  const hasBody = body !== undefined && body !== null && method !== 'GET'
  if (hasBody && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json'
  }

  if (options.csrf) {
    const csrfToken = readCsrfToken()
    if (csrfToken) headers['X-CSRF-Token'] = csrfToken
  }

  const response = await fetch(path, {
    method,
    headers,
    body: hasBody ? JSON.stringify(body) : undefined,
    credentials: 'include',
  })

  const payload = await parseJsonSafely(response)
  if (!response.ok || (payload && typeof payload.code === 'number' && payload.code !== 0)) {
    const message = payload?.message || `Request failed: ${response.status}`
    const error = new Error(message)
    error.status = response.status
    error.code = payload?.code
    throw error
  }

  return payload
}
