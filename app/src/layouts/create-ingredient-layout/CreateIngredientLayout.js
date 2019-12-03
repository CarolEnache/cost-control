import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import Title from 'title';
import Input from 'input';

import { StateContext, DispatchContext } from '../../App';

import { Layout, Form } from '../../styled';

import createFirestoreItem from '../../firebase-config/utils/create';
import updateFirestoreItem from '../../firebase-config/utils/update';
import { collections } from '../../constants';

function CreateIngredient() {
  const [ingredientName, setIngredientName] = useState('')
  const [ingredientYield, setIngredientYield] = useState(0)
  const [ingredientPrice, setIngredientPrice] = useState(0)
  const [currentItemId, setCurrentItemId] = useState('')
  const [title, setTitle] = useState('Create ingredient')
  const context = useContext(StateContext)
  const dispatch = useContext(DispatchContext)
  const { currentItem, list } = context
  const isEditIngredient = Object.keys(currentItem).length !== 0

  { console.log(context.currentItem, Object.keys(context).length)}

  if (isEditIngredient && ingredientName === '') {
    const { id } = currentItem
    const ingredientToBeEdited = list.filter(item => item.id === id)
    const { ingredientName, ingredientPrice, ingredientYield } = ingredientToBeEdited[0]
    setIngredientName(ingredientName)
    setIngredientYield(ingredientYield)
    setIngredientPrice(ingredientPrice)
    setCurrentItemId(id)
    setTitle('Edit this ingredient')
  }

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
    const item = {
      currentItemId,
      ingredientName,
      ingredientYield,
      ingredientPrice
    }
    isEditIngredient ? updateFirestoreItem(collections.ingredients, item) : createFirestoreItem(collections.ingredients, item)
    isEditIngredient && dispatch({ type: 'CLEAR_CURRENT_ITEM' })
    setIngredientName()
    setIngredientYield()
    setIngredientPrice('')
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
        <Link to='/' onClick={(e) => handleSubmit(e)}>
          <Input type='submit' value='submit' name="submit" />
        </Link>
      </Form>
    </Layout>
  );
}

export default CreateIngredient;
