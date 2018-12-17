import React from 'react';
import Head from 'next/head'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import { initStore, resetStep } from '../stores/surveyStore'
import Layout from '../components/layout/layout';
import Survey from '../components/survey';

const SurveyPage = ({ resetStep }) => {
  resetStep()
  return (
    <Layout url=''>
      <Head>
        <title>GaritaCenter - Encuesta. Reporta el tiempo en espera que llevas en garita.</title>
        <meta name="description" content="¿Cómo te va en la línea? Da tu reporte de garitas aquí y ayuda a los demás" />
      </Head>
      <Survey />
    </Layout>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetStep: bindActionCreators(resetStep, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(SurveyPage)
