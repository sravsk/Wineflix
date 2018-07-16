import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header.jsx';

describe('Header', () => {
  const mockFn = jest.fn();
  it('should be defined', () => {
    expect(Header).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(
      <Header class="header" />
    );
    expect(tree).toMatchSnapshot();
  });
});