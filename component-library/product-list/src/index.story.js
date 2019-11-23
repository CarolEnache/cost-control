import React from 'react';
import { mockIngredients } from 'mock/src/index';
import { storiesOf } from '@storybook/react';

import ProductList from '.';

storiesOf('ProductList', module)
  .add('Number', () =>
    <ProductList data={ mockIngredients } />
  );
