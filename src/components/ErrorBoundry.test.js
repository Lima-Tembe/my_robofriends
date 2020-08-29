import { shallow } from 'enzyme'
import React from 'react'
import ErrorBoundry from './ErrorBoundry'
import setupTest from '../setupTest'

it('should render the ErrorBoundry component', () => {
    expect(shallow(<ErrorBoundry/>)).toMatchSnapshot();
});