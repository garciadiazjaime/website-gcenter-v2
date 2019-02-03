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

  if (!cache || !cache.report || hasExpired(cache.timestamp)) {
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

export async function getReportLast24hrs(city = 'tijuana') {
  const response = await fetch(`${apiUrl}/report/last-24hrs?city=${city}`)
  const report = await response.json()

  return report
}

export function getEntryTime(ports, keyString) {
  if (!ports || !keyString) {
    return null
  }

  const value = keyString.split('.').reduce((item, key) => {
    if (item && item[key]) {
      return item[key]
    }
    return ''
  }, ports)

  return value
}
