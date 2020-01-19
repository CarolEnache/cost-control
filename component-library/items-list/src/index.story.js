import React from 'react';
import { storiesOf } from '@storybook/react';
import DeleteIcon from 'assets/icons/delete.svg';

import ItemsList from '.';

const deleteItem = id => {
  alert(`this button would delete this item`);
};

const updateItem = id => {
  alert(`this button would update this item`);
};

storiesOf('ItemsList', module).add('Ingredients list', () => (
  <ItemsList
    data={mockIngredients}
    icon={DeleteIcon}
    deleteItem={deleteItem}
    updateItem={updateItem}
  />
));

const mockIngredients = [
  {
    ingredientName: 'ffsdfds',
    ingredientPrice: '25.55',
    ingredientYield: '243',
    id: '3NsVKYAVXUraWuoCa8qc'
  },
  {
    ingredientName: 'sdd',
    ingredientPrice: '2323',
    ingredientYield: '232',
    id: '4cesiGZzgX8CqNIrfkU6'
  }
];

const mockRecipeIngredients = {
  name: 'meat bals',
  serves: '12',
  theIngredientsList: [
    {
      currentItemId: '',
      ingredientName: 'another one',
      ingredientPrice: '12',
      ingredientYield: '12',
      id: 'GqPBiyzJ7CfBgdoh9nHu',
      quantityUsed: '350'
    },
    {
      currentItemId: '',
      ingredientName: 'lamb leg',
      ingredientPrice: '15.50',
      ingredientYield: '1000',
      id: 'mSbhfPQS1sPqFTAVXNAo',
      quantityUsed: '500'
    },
    {
      currentItemId: '',
      ingredientName: 'new ingredie',
      ingredientPrice: '250',
      ingredientYield: '100',
      id: 'eFmMfm7ygStVlLoMGsXv',
      quantityUsed: '1250'
    }
  ]
};
