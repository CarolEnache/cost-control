import React from 'react';
import { storiesOf } from '@storybook/react';

import AddIcon from 'assets/icons/add.svg';
import CloseIcon from 'assets/icons/close.svg';
import EditIcon from 'assets/icons/edit.svg';
import InfoIcon from 'assets/icons/info.svg';
import MenuIcon from 'assets/icons/menu.svg';
import SelectIcon from 'assets/icons/select.svg';

import Button, { MenuWrapper } from '.';

storiesOf('Button', module)
  .add('Add ingredient', () => (
    <Button name="add">
      <img src={AddIcon} alt="Add Icon" />
    </Button>
  ))
  .add('Close', () => (
    <Button>
      <img src={CloseIcon} alt="Close Icon" />
    </Button>
  ))
  .add('Edit', () => (
    <Button>
      <img src={EditIcon} alt="Edit Icon" />
    </Button>
  ))
  .add('Info', () => (
    <Button>
      <img src={InfoIcon} alt="Info Icon" />
    </Button>
  ))
  .add('Menu', () => (
    <Button name="menu">
      <img src={MenuIcon} alt="Menu Icon" />
    </Button>
  ))
  .add('Delete', () => <Button type="delete">delete this item</Button>)
  .add('Select', () => (
    <Button name="select">
      some option to select <img src={SelectIcon} alt="Select Icon" />
    </Button>
  ))
  .add('Wrapped', () => (
    <MenuWrapper>
      <Button name="menu">
        <img src={MenuIcon} alt="Menu Icon" />
      </Button>
      <Button>
        <img src={CloseIcon} alt="Close Icon" />
      </Button>
    </MenuWrapper>
  ));
