import React from 'react'
import { shallow } from 'enzyme'
import Popup from '../Popup'

describe('Popup', () => {
  it('should render Popup component', () => {
    const component = shallow(
      <Popup overlay={true} close={() => console.log('click')} />
    )
    expect(component).toMatchSnapshot()
  })
})
