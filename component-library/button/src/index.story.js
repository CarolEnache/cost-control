import React from 'react';
import {storiesOf} from '@storybook/react';

import { ReactComponent as AddIcon } from '../../../app/src/assets/icons/add.svg'
import { ReactComponent as CloseIcon } from '../../../app/src/assets/icons/close.svg'
import { ReactComponent as DeleteIcon } from '../../../app/src/assets/icons/delete.svg'
import { ReactComponent as EditIcon } from '../../../app/src/assets/icons/edit.svg'
import { ReactComponent as InfoIcon } from '../../../app/src/assets/icons/info.svg'
import { ReactComponent as MenuIcon } from '../../../app/src/assets/icons/menu.svg'
import { ReactComponent as SelectIcon } from '../../../app/src/assets/icons/select.svg'

import Button from '.';

storiesOf('Button', module)
  .add('Submit', () =>
    <Button name='submit'>
      Submit
    </Button>
  )
  .add('Add ingredient', () =>
    <Button name='add'>
      <AddIcon />
    </Button>
  )
  .add('Close', () =>
    <Button>
      <CloseIcon />
    </Button>
  )
  .add('Delete', () =>
    <Button>
      <DeleteIcon />
    </Button>
  )
  .add('Edit', () =>
    <Button>
      <EditIcon />
    </Button>
  )
  .add('Info', () =>
    <Button>
      <InfoIcon />
    </Button>
  )
  .add('Menu', () =>
    <Button name='menu'>
      <MenuIcon />
    </Button>
  )
  .add('Select', () =>
    <Button name='select'>
      <SelectIcon />
    </Button>
  )