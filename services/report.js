import 'isomorphic-unfetch'

export const proxyUrl = process && process.env && process.env.PROXY_URL ? process.env.PROXY_URL : window.proxyUrl

export async function getReport(city = 'tijuana') {
  const response = await fetch(`${proxyUrl}report?city=${city}`)
  return await response.json()
}

export async function getUserReport(city = 'tijuana') {
  const response = await fetch(`${proxyUrl}user/report?city=${city}`)
  return await response.json()
}

export async function saveReport(data) {
  const response = await fetch(`${proxyUrl}user/report`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return await response.json()
}
