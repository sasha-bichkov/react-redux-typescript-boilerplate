import React from 'react'
import { mount, shallow } from 'enzyme'
import SingInForm from '../SingInForm'


describe('SingInForm', () => {
  describe('width valid inputs', () => {
    it('calls the onSubmit function', () => {

    })
  })

  describe('if invalid email', () => {

  })

  describe('if invalid password', () => {
    const component = mount(<SingInForm />)

    const result = component.find('.emailInput')
      .simulate('change', {
        target: {
          value: 'lalala'
        }
      })
    console.log(result.debug())
  })
})
