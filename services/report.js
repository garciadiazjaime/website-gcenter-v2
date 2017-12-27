import 'isomorphic-unfetch'


const baseUrl = ('undefined' !== process ? process.env.API_URL : '') || 'http://0.0.0.0:3030'

export async function getReport(city = 'tijuana') {
  const response = await fetch(`${baseUrl}/report?city=${city}`)
  return await response.json()
}

export async function getUserReport(city = 'tijuana') {
  const response = await fetch(`${baseUrl}/user/report?city=${city}`)
  return await response.json()
}

export async function saveReport(data) {
  const response = await fetch(`${baseUrl}/user/report`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return response.json()
}
