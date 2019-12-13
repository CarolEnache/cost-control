import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import Title from 'title';
import Input from 'input';
import Button from 'button';
import deleteFirestoreItem from '../../firebase-config/utils/delete';

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

  const noName = ingredientName === ''
  const noPrice = ingredientPrice === 0
  const noYield = ingredientName === 0

  const { currentItem, ingredientsList } = context
  const isEditIngredient = Object.keys(currentItem).length !== 0


  if (isEditIngredient && noName) {
    const { id } = currentItem
    const ingredientToBeEdited = ingredientsList.filter(item => item.id === id)
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
    if (noName || noPrice || noYield) {
      return
    }
    const item = {
      currentItemId,
      ingredientName,
      ingredientYield,
      ingredientPrice
    }

    isEditIngredient ? updateFirestoreItem(collections.ingredients, item) : createFirestoreItem(collections.ingredients, item)
    isEditIngredient && dispatch({ type: 'CLEAR_CURRENT_ITEM' })
    setIngredientName('')
    setIngredientYield(0)
    setIngredientPrice(0)
    setTitle('Create another ingredint')
  }

  const submitValue = isEditIngredient ? 'submit your changes' : 'submit'

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
        <div>
          <Link to='/' onClick={(e) => handleSubmit(e)}>
            <Input type='submit' value={submitValue} name="submit " />
          </Link>
          {isEditIngredient && (
            <Link to='/'>
              <Button type='delete' onClick={() => deleteFirestoreItem('ingredients_list', currentItem.id)} >
                delete this item
              </Button>
            </Link>
          )}
        </div>
      </Form>
    </Layout>
  );
}

export default CreateIngredient;
