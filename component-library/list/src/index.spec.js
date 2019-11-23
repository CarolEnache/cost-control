import React from 'react';
import renderer from 'react-test-renderer';
import './node_modules/jest-styled-components';

import ProductList from '../src';

describe('ProductList', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<ProductList>{'Test'}</ProductList>).toJSON()
    expect(tree).toMatchSnapshot();
  })
});