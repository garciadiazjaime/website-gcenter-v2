export const getPort = port => {
  switch(port) {
    case '1':
      return 'San Ysidro'
    case '2':
      return 'Otay'
    default:
      return ''
  }
}

export const getEntry = entry => {
  switch(entry) {
    case '1':
      return 'Normal'
    case '2':
      return 'Ready Lane'
    case '3':
      return 'Sentry'
    case '4':
      return 'Pedwest'
    default:
      return ''
  }
}

export const getType = type => {
  switch(type) {
    case '1':
      return 'Carro'
    case '2':
      return 'Peatonal'
    default:
      return ''
  }
}

export const getTime = time => {
  switch(time) {
    case '1':
      return '15 minutos'
    case '2':
      return 'Media Hora'
    case '3':
      return 'Una Hora'
    case '4':
      return 'Entre una y dos horas'
    case '5':
      return 'Entre dos y tres horas'
    case '6':
      return 'Más de tres horas'
    default:
      return ''
  }
}

export const formatTime = time => {
  const date = new Date(time)
  return date.toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true });
}
