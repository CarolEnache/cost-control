import React from 'react';
import { storiesOf } from '@storybook/react';

import Title from '.';

storiesOf('Title', module)
  .add('Create ingredient', () =>
    <Title title='Create ingredient'/>
  )