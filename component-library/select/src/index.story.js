import React from 'react';
import { storiesOf } from '@storybook/react';

import Select from './index';

const data = [
  {
    currentItemId: '',
    ingredientName: 'avocado',
    ingredientPrice: '6',
    ingredientYield: '1',
    id: '2Mw0wdLOKbj62zYiwDgq'
  },
  {
    currentItemId: '',
    ingredientName: 'New ingredient ',
    ingredientPrice: '124.59',
    ingredientYield: '2000',
    id: 'BhjGcrMiOBADMtl0xEWC'
  },
  {
    currentItemId: '',
    ingredientName: 'milk',
    ingredientPrice: '2.50',
    ingredientYield: '1000',
    id: 'FhnkOdIIsLrYlcX2EQsJ'
  },
  {
    currentItemId: '',
    ingredientName: 'another one',
    ingredientPrice: '12',
    ingredientYield: '12',
    id: 'GqPBiyzJ7CfBgdoh9nHu'
  },
  {
    currentItemId: '',
    ingredientName: 'onion',
    ingredientPrice: '1.50',
    ingredientYield: '300',
    id: 'HkEvNFfVpoRZmZa3W3km'
  },
  {
    currentItemId: '',
    ingredientName: 'Gsgshs',
    ingredientPrice: '39',
    ingredientYield: '1111',
    id: 'N7J6iOBnABP0Kg1M0RMV'
  },
  {
    currentItemId: '',
    ingredientName: 'Let’s see',
    ingredientPrice: '222',
    ingredientYield: '2222',
    id: 'ZONoVREgEpS2RnC9dRsF'
  },
  {
    currentItemId: '',
    ingredientName: 'Dévaster ',
    ingredientPrice: '30',
    ingredientYield: '120',
    id: 'Zpi5zrXhAHcZ7U5ZPvZ5'
  },
  {
    currentItemId: '',
    ingredientName: 'new ingredie',
    ingredientPrice: '250',
    ingredientYield: '100',
    id: 'eFmMfm7ygStVlLoMGsXv'
  },
  {
    currentItemId: '',
    ingredientName: 'Inca uniul',
    ingredientPrice: '340',
    ingredientYield: '1009',
    id: 'jp55HnbpR5shnG8aaQRj'
  },
  {
    currentItemId: '',
    ingredientName: 'lamb leg',
    ingredientPrice: '15.50',
    ingredientYield: '1000',
    id: 'mSbhfPQS1sPqFTAVXNAo'
  }
];

const addedIngredient = ingredientToSubmit => {
  // e.preventDefault();
  return console.log('submitted', ingredientToSubmit);
};

storiesOf('Select', module).add('default', () => (
  <Select placeholder="Hello world!" data={data} extract={addedIngredient} />
));
