import React from 'react'
import renderer from 'react-test-renderer'
import reportSample from './reportSample.json'

import HomePage from '../index.js'

describe('index.js', () => {
  it('renders properly', () => {
    const props = {
      url: {
        pathname: ''
      },
      report: reportSample
    };
    const component = renderer.create(<HomePage {...props} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
