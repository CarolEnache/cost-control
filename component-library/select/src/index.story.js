import React from 'react';
import { storiesOf } from '@storybook/react';

import Select from './index';

const data = [
  {
    name: 'Eggs',
    id: 1
  },
  {
    name: 'Eggplant',
    id: 1
  },
  {
    name: 'Enchiladas',
    id: 1
  },
  {
    name: 'English Muffin',
    id: 1
  },
  {
    name: 'Elbow Macaroni',
    id: 1
  },
  {
    name: 'Escargots',
    id: 1
  },
  {
    name: 'Eggo',
    id: 1
  }
];

const handleIngredientSubmition = event => {
  event.preventDefault();
  console.log('submited');
};

storiesOf('Select', module).add('default', () => (
  <Select
    placeholder="Hello world!"
    data={data}
    submit={handleIngredientSubmition}
  />
));
