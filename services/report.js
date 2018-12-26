import 'isomorphic-unfetch'

export const apiUrl = process && process.env && process.env.API_URL ? process.env.API_URL : window.apiUrl

export async function getReport(city = 'tijuana') {
  const response = await fetch(`${apiUrl}/report?city=${city}`)
  return await response.json()
}
