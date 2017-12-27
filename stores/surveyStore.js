import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  lastUpdate: 0,
  step: 1,
  answers: {},
  savingSurvey: false
}

export const actionTypes = {
  NEXT_STEP: 'NEXT_STEP',
  SAVING_SURVEY: 'SAVING_SURVEY',
  RESET_STEP: 'RESET_STEP'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.NEXT_STEP:
      return Object.assign({}, state, {
        step: state.step + 1,
        answers: Object.assign({}, state.answers, action.answer)
      })
    case actionTypes.SAVING_SURVEY:
      return Object.assign({}, state, {
        savingSurvey: true,
      })
    case actionTypes.RESET_STEP:
      return Object.assign({}, state, {
        step: 1
      })
    default: return state
  }
}

// ACTIONS
export const initStore = (initialState = exampleInitialState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}

export const nextStep = (answer) => dispatch => {
  return dispatch({ type: actionTypes.NEXT_STEP, answer })
}

export const savingSurvey = () => dispatch => {
  return dispatch({ type: actionTypes.SAVING_SURVEY })
}

export const resetStep = () => dispatch => {
  return dispatch({ type: actionTypes.RESET_STEP })
}
