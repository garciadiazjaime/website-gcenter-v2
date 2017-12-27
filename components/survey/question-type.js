import React from 'react'

import styles from './styles'

const QuestionType = ({ clickHandler }) => (
  <div>
    <h3>¿Cómo cruzas?</h3>
    <div className="cta">
      <button onClick={clickHandler} data-type="1">Carro</button>
      <button onClick={clickHandler} data-type="2">Caminando</button>
    </div>
    <style jsx>{styles}</style>
  </div>
);

export default QuestionType;
