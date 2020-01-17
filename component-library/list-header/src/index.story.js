import React from 'react';
import { storiesOf } from '@storybook/react';

import ListHeader from '.';

storiesOf('ListHeader', module).add('List header', () => (
  <ListHeader dynamic="yield" />
));
