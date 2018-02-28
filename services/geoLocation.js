import { saveUserLocation } from './report'

var options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: Infinity
};

export function saveGeoLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      saveUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    }, console.log, options)
  }
}
