import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Title from '.';

describe('Title', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Title>{'Test'}</Title>).toJSON()
    expect(tree).toMatchSnapshot();
  })
});