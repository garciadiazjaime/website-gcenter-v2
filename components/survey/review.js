import React from 'react'
import { connect } from 'react-redux'

import { getPort, getEntry, getType, getTime} from '../../presenter/report'
import styles from './styles'

const Review = ({ clickHandler, answers }) => {
  return (
    <div>
      <h3>Este es tu reporte:</h3>
      <p>
        {getPort(answers.port)}
      </p>
      <p>
        {getEntry(answers.entry)} / {getType(answers.type)}
      </p>
      <p>
        Llevas esperando: {getTime(answers.time)}<br />
      </p>
      <div className="cta">
        <button onClick={clickHandler}>Publicar</button>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

const mapStateToProps = ({ step, answers }) => ({ step, answers })

export default connect(mapStateToProps)(Review)
