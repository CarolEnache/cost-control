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

export const mockIngredients = [
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
  },
  {
    ingredientName: 'minced meat',
    ingredientPrice: '25',
    ingredientYield: '1000',
    id: '8Y9ohVPchrmMPmABxslm'
  },
  {
    ingredientName: 'ffsdfds',
    ingredientPrice: '25.55',
    ingredientYield: '243',
    id: 'HwQrDDEUmupOlYsYZFyI'
  },
  {
    ingredientName: 'wdwd',
    ingredientPrice: '232',
    ingredientYield: '322',
    id: 'Im3OV9X7o4s5GUDVywnB'
  },
  {
    ingredientName: 'ffsdfds',
    ingredientPrice: '25.55',
    ingredientYield: '243',
    id: 'N0WbzeEiRgfIDEeCbFtO'
  },
  {
    ingredientName: 'fdsfd',
    ingredientPrice: '2332',
    ingredientYield: '2312',
    id: 'NkvImEjb2B0iCPi7H3aR'
  },
  {
    ingredientName: 'fdsfd',
    ingredientPrice: '2332',
    ingredientYield: '2312',
    id: 'U4Kxm3Z8vc4aoEmsYuxh'
  },
  {
    ingredientName: 'minced meat',
    ingredientPrice: '25',
    ingredientYield: '1000',
    id: 'bZuR9RemPzSmny2Sk8ms'
  },
  {
    ingredientName: 'sdsd',
    ingredientPrice: '2323',
    ingredientYield: '223',
    id: 'gnj0KWugzvxcZ3kkGVM4'
  },
  {
    ingredientName: 'fdsfd',
    ingredientPrice: '2332',
    ingredientYield: '2312',
    id: 'l2pk4oo1zvLFGvOdgtUy'
  },
  {
    ingredientName: 'vsvsvsvsvsvvsvnvNVNBVNBVNBVNBVNBVNBVNB',
    ingredientPrice: '234.44',
    ingredientYield: '1000',
    id: 'p3fKWbLZYs5sSKbOVHHi'
  },
  {
    ingredientName: 'hgjhgjhg',
    ingredientPrice: '435',
    ingredientYield: '435',
    id: 'rRbVy5EbOlnxuIY3q97u'
  },
  {
    ingredientName: 'fdsfd',
    ingredientPrice: '2332',
    ingredientYield: '2312',
    id: 'vlW6nupYyGccrJopEW4s'
  }
];
