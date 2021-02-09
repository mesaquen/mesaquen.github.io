export const fetchURL = async (url, options) => {
  const response = await fetch(url, options)
  const { ok, status } = response
  const data = await response.json()

  if (ok) {
    return data
  }

  return Promise.reject({ ok, status, ...data })
}
