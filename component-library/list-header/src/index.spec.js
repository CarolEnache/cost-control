import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import ListHeader from '.';

describe('ListHeader', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<ListHeader>{'Test'}</ListHeader>).toJSON()
    expect(tree).toMatchSnapshot();
  })
});