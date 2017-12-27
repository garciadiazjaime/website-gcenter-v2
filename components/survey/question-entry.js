import React from 'react'

import styles from './styles'

const QuestionEntry = ({ clickHandler }) => (
  <div>
    <h3>¿En qué línea estas?</h3>
    <div className="cta">
      <button href="/encuesta" onClick={clickHandler} data-entry="1">Normal</button>
      <button href="/encuesta" onClick={clickHandler} data-entry="2">Ready Lane</button>
      <button href="/encuesta" onClick={clickHandler} data-entry="3">Sentry</button>
      <button href="/encuesta" onClick={clickHandler} data-entry="4">Pedwest</button>
    </div>
    <style jsx>{styles}</style>
  </div>
);

export default QuestionEntry;
