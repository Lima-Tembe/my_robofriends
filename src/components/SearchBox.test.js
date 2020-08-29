import { shallow } from 'enzyme'
import React from 'react'
import SearchBox from './SearchBox'
import setupTest from '../setupTest'

it('should render the SearchBox component', () => {
    expect(shallow(<SearchBox/>)).toMatchSnapshot();
});