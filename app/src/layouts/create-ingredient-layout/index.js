import React, { useState } from 'react';

import Title from 'title';
import Input from 'input';

import { Layout, Form } from '../../styled';

import createFirestoreItem from '../../firebase-config/utils/create';
import { collections } from '../../constants';

function CreateIngredient() {
  const [ingredientName, setIngredientName] = useState('');
  const [ingredientYield, setIngredientYield] = useState(0);
  const [ingredientPrice, setIngredientPrice] = useState(0);
  const [title, setTitle] = useState('Create ingredient')

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
    console.log('altceva')
    const item = {
      ingredientName,
      ingredientYield,
      ingredientPrice
    }
    createFirestoreItem(collections.ingredients, item);
    setIngredientName('');
    setIngredientYield('');
    setIngredientPrice('');
    setTitle('Create another ingredint')
  }

  return (
    <Layout>
      <Title title={title} />
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Input
          placeholder='minced meat'
          id='name'
          type='text'
          label='Ingredient name'
          value={ingredientName}
          onChange={(e) => handleChange(e)}
        />
        <Input
          placeholder='1000'
          id='yield'
          type='number'
          label='Package yield'
          value={ingredientYield}
          onChange={(e) => handleChange(e)}
        />
        <Input
          placeholder='25.50'
          id='price'
          type='number'
          label='Package price'
          value={ingredientPrice}
          onChange={(e) => handleChange(e)}
        />
        <Input type='submit' value='submit' name="submit" />
      </Form>
    </Layout>
  );
}

export default CreateIngredient;
