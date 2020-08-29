import { shallow } from 'enzyme'
import React from 'react'
import CardList from './CardList'
import setupTest from '../setupTest'

it('should render the CardList component', () => {
    const mockRobots = [
        {
            id: 1,
            name: "John Doe",
            email: "john@gmail.com"
        }
    ]
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});