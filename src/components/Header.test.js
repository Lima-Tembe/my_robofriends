import { shallow } from 'enzyme'
import React from 'react'
import Header from './Header'
import setupTest from '../setupTest'

it('should render the Header component', () => {
    expect(shallow(<Header/>)).toMatchSnapshot();
});