import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import { initStore, resetStep } from '../stores/surveyStore'
import Layout from '../components/layout/layout';
import Survey from '../components/survey';

class SurveyPage extends Component {

  constructor(props) {
    super(props)
    props.resetStep()
  }

  render() {
    const { url } = this.props
    return (
      <Layout url={url.pathname}>
        <Survey />
      </Layout>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetStep: bindActionCreators(resetStep, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(SurveyPage)
