import { shallow } from 'enzyme'
import React from 'react'
import Scroll from './Scroll'
import setupTest from '../setupTest'

it('should render the Scroll component', () => {
    expect(shallow(<Scroll/>)).toMatchSnapshot();
});