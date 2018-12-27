import 'isomorphic-unfetch'

export const apiUrl = process && process.env && process.env.API_URL ? process.env.API_URL : window.apiUrl

function hasExpired(lastValue) {
  const currentValue = new Date().getTime()
  const waitSecs = 60
  return ((currentValue - lastValue) / 1000) > waitSecs
}

export async function getReport(city = 'tijuana') {
  const cacheKey = `report:${city}`
  let cache = JSON.parse(sessionStorage && sessionStorage.getItem(cacheKey))

  const skipCache = true
  if (skipCache || !cache || !cache.report || !cache.report.length || hasExpired(cache.timestamp)) {
    const response = await fetch(`${apiUrl}/report?city=${city}`)
    const report = await response.json()
    const data = {
      report,
      timestamp: new Date().getTime()
    }
    sessionStorage.setItem(cacheKey, JSON.stringify(data))
    return report
  }

  return cache.report
}
