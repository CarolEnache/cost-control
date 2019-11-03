import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '.';

storiesOf('Input', module)
.add('Text', () =>
  <Input placeholder="Hello world!" id='someId' type='text' label='Repice name' />
)
.add('Submit', () =>
  <Input type='submit' value='submit' />
)
.add('Number', () =>
  <Input placeholder="12" id='someId' type='number' label='Number of servings' name='servings' />
);
