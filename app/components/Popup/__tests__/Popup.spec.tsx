import React from 'react'
import { shallow } from 'enzyme'
import Popup from '../Popup'

describe('should render Popup component', () => {
  it('should contain .Popup className', () => {
    const component = shallow(
      <Popup overlay={true} close={()=> console.log('click')}/>
    )
    expect(component).toMatchSnapshot()
  })
})
