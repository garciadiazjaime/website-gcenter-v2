import 'isomorphic-unfetch'

export const apiUrl = process && process.env && process.env.API_URL ? process.env.API_URL : window.apiUrl

export async function getReport(city = 'tijuana') {
  const response = await fetch(`${apiUrl}/report?city=${city}`)
  return await response.json()
}

export async function getUserReport(city = 'tijuana') {
  const response = await fetch(`${apiUrl}/user/report?city=${city}`)
  return await response.json()
}

export async function saveReport(data) {
  const response = await fetch(`${apiUrl}/user/report`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return await response.json()
}

export async function saveUserLocation(data) {
  const response = await fetch(`${apiUrl}/user/location`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return await response.json()
}
