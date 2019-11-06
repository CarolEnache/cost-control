import React, { useState } from 'react';

import Title from 'title';
import Input from 'input';
import Button, { MenuWrapper } from 'button';

import MenuIcon from 'assets/icons/menu.svg';
import CloseIcon from 'assets/icons/close.svg';

import { Layout, Form } from '../../styled';

import createFirestoreItem from '../../firebase-config/utils/create';
import { collections } from '../../constants';

function CreateIngredient() {
  const [ingredientName, setIngredientName] = useState('');
  const [ingredientYield, setIngredientYield] = useState(0);
  const [ingredientPrice, setIngredientPrice] = useState(0);

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'name':
        return setIngredientName(e.target.value)
      case 'yield':
        return setIngredientYield(e.target.value)
      case 'price':
        return setIngredientPrice(e.target.value)
      default:
        return null
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      ingredientName,
      ingredientYield,
      ingredientPrice
    }
    createFirestoreItem(collections.ingredients, item);
  }

  return (
    <Layout>
      <MenuWrapper >
        <Button name='menu'>
          <img src={MenuIcon} alt="Menu Icon" />
        </Button>
        <Button name='close'>
          <img src={CloseIcon} alt="Close Icon" />
        </Button>
      </MenuWrapper>
      <Title title='Create ingredient' />
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Input
          placeholder='minced meat'
          id='name'
          type='text'
          label='Ingredient name'
          onChange={(e) => handleChange(e)}
        />
        <Input
          placeholder='1000'
          id='yield'
          type='number'
          label='Package yield'
          onChange={(e) => handleChange(e)}
        />
        <Input
          placeholder='25.50'
          id='price'
          type='number'
          label='Package price'
          onChange={(e) => handleChange(e)}
        />
        <Input type='submit' value='submit' name="submit" />
      </Form>
    </Layout>
  );
}

export default CreateIngredient;
