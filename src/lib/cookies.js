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
