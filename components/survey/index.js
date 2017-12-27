import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Router from 'next/router'
import 'isomorphic-unfetch'

import { saveReport } from '../../services/report'
import { nextStep, savingSurvey } from '../../stores/surveyStore'
import QuestionPort from './question-port'
import QuestionType from './question-type'
import QuestionEntry from './question-entry'
import QuestionTime from './question-time'
import Review from './review'

class Survey extends Component {

  constructor(args) {
    super(args)
    this.saveSurvey = this.saveSurvey.bind(this)
  }

  nextStep = (e) => {
    this.props.nextStep(e.target.dataset)
  }

  async saveSurvey() {
    this.props.savingSurvey()
    const data = Object.assign({}, this.props.answers, {
      city: 'tijuana'
    })
    await saveReport(data)
    Router.push('/reporte-usuarios')
  }

  renderStep = () => {
    const { step } = this.props
    switch (step) {
      case 1:
        return <QuestionPort clickHandler={this.nextStep} />
      case 2:
        return <QuestionType clickHandler={this.nextStep} />
      case 3:
        return <QuestionEntry clickHandler={this.nextStep} />
      case 4:
        return <QuestionTime clickHandler={this.nextStep} />
      case 5:
        return <Review clickHandler={this.saveSurvey} />
      default:
        return null
    }
  }

  render() {
    return (
      <div className="survey-container">
        {this.renderStep()}
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
  }
}

const mapStateToProps = ({ step, answers }) => ({ step, answers })

const mapDispatchToProps = (dispatch) => {
  return {
    nextStep: bindActionCreators(nextStep, dispatch),
    savingSurvey: bindActionCreators(savingSurvey, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Survey)
