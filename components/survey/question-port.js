import React from 'react'

import styles from './styles'

const QuestionPort = ({ clickHandler }) => (
  <div>
    <h3>¿Por dónde cruzas?</h3>
    <div className="cta">
      <button onClick={clickHandler} data-port="1">San Ysidro</button>
      <button onClick={clickHandler} data-port="2">Otay</button>
    </div>
    <style jsx>{styles}</style>
  </div>
);

export default QuestionPort;
