import { saveUserLocation } from './report'
import { setCookie, getCookie } from './cookie'

var options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: Infinity
};

export function saveGeoLocation() {
  if (navigator.geolocation) {
    let uuid = getCookie('uuid')
    if (!uuid) {
      uuid = guid()
      setCookie('uuid', uuid, 30)
    }
    navigator.geolocation.getCurrentPosition(position => {
      saveUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        uuid
      })
    }, console.log, options)
  }
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
