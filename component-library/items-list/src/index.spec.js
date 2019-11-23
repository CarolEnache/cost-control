import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import ItemsList from '.';

describe('ItemsList', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<ItemsList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
