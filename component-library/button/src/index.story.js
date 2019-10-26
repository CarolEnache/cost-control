import React from 'react';
import {storiesOf} from '@storybook/react';

import { ReactComponent as AddIcon } from '../../../assets/icons/add.svg'
import { ReactComponent as CloseIcon } from '../../../assets/icons/close.svg'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete.svg'
import { ReactComponent as EditIcon } from '../../../assets/icons/edit.svg'
import { ReactComponent as InfoIcon } from '../../../assets/icons/info.svg'
import { ReactComponent as MenuIcon } from '../../../assets/icons/menu.svg'
import { ReactComponent as SelectIcon } from '../../../assets/icons/select.svg'

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
    <Button>
      <SelectIcon />
    </Button>
  )