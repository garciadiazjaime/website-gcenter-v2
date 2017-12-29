import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Router from 'next/router'
import 'isomorphic-unfetch'

import { saveReport } from '../../services/report'
import { nextStep } from '../../stores/surveyStore'
import QuestionPort from './question-port'
import QuestionType from './question-type'
import QuestionEntry from './question-entry'
import QuestionTime from './question-time'
import Review from './review'

const nextStepHandler = (e, nextStep) => {
  nextStep(e.target.dataset)
}

async function saveSurvey(answers) {
  const data = Object.assign({}, answers, {
    city: 'tijuana'
  })
  await saveReport(data)
  Router.push('/reporte-usuarios')
}

const renderStep = (step, nextStep, answers) => {
  switch (step) {
    case 1:
      return <QuestionPort clickHandler={(e) => nextStepHandler(e, nextStep)} />
    case 2:
      return <QuestionType clickHandler={(e) => nextStepHandler(e, nextStep)} />
    case 3:
      return <QuestionEntry clickHandler={(e) => nextStepHandler(e, nextStep)} />
    case 4:
      return <QuestionTime clickHandler={(e) => nextStepHandler(e, nextStep)} />
    case 5:
      return <Review clickHandler={() => saveSurvey(answers)} />
    default:
      return null
  }
}

const Survey = ({ step, nextStep, answers}) => (
  <div className="survey-container">
    {renderStep(step, nextStep, answers)}
    <style jsx>{`
      .survey-container {
        padding: 5px 5px 30px;
        background-color: white;
        text-align: center;
      }
    `}
    </style>
  </div>
)

const mapStateToProps = ({ step, answers }) => ({ step, answers })

const mapDispatchToProps = (dispatch) => {
  return {
    nextStep: bindActionCreators(nextStep, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Survey)
