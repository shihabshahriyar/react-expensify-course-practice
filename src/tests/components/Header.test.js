import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Header from '../../components/Header'

test('should test Header correctly', () => {
    const wrapper = shallow(<Header/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})