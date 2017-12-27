import React from 'react'

import styles from './styles'

const QuestionTime = ({ clickHandler }) => (
  <div>
    <h3>¿Cuánto tiempo llevas?</h3>
    <div className="cta">
      <button href="/encuesta" onClick={clickHandler} data-time="1">15 mínutos</button>
      <button href="/encuesta" onClick={clickHandler} data-time="2">Media hora</button>
      <button href="/encuesta" onClick={clickHandler} data-time="3">Una hora</button>
    </div>
    <br />
    <div className="cta">
      <button href="/encuesta" onClick={clickHandler} data-time="4">Entre una y dos horas</button>
      <button href="/encuesta" onClick={clickHandler} data-time="5">Entre dos y tres horas</button>
      <button href="/encuesta" onClick={clickHandler} data-time="6">Más de tres horas</button>
    </div>
    <style jsx>{styles}</style>
  </div>
);

export default QuestionTime;
