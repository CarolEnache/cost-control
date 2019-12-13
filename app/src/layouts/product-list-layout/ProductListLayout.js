import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import Title from 'title';
import ListHeader from 'list-header';
import ItemsList from 'items-list';
import Button from 'button';

import AddIcon from 'assets/icons/add.svg'
import EditIcon from 'assets/icons/edit.svg';
import Eye from 'assets/icons/eye.svg';

import { StateContext, DispatchContext } from '../../App';

import { Layout } from '../../styled';
import { Header, ButtonWrapper } from './styled';

const ProductList = () => {
  const [products, setProducts] = useState([])
  const dispatch = useContext(DispatchContext)
  const context =  useContext(StateContext)

  const { collection } = context
  const isIngredientsCollection = collection === 'ingredients_list'

  const title = isIngredientsCollection ? 'Ingredients list' : 'Recipes list'
  const path = isIngredientsCollection ? '/update' : '/create-recipe'
  const icon = isIngredientsCollection ? EditIcon : Eye
  const buttonMSG = isIngredientsCollection ? 'Add ingredient' : 'Create recipe'
  const state = isIngredientsCollection ? context.ingredientsList : context.recipesList

  useEffect(() => {
    return setProducts(state)
  }, [state])

  const updateItem = (collection, id) => {
    if (collection === undefined) {
      return
    }

    return dispatch({ type: 'UPDATE_ITEM', collection, id })
  };

  return (
    <Layout>
      <Header>
        <Title title={title} />
        <ListHeader dynamic='yield' />
      </Header>
      <Link to='/update' onClick={() => updateItem()}>
        <ItemsList
          data={products}
          icon={icon}
          updateItem={updateItem}
        />
      </Link>
      <ButtonWrapper>
        <Link to={path}>
          <Button name='add'>
            <img src={AddIcon} alt="Add Icon" />
            <p>{buttonMSG}</p>
          </Button>
        </Link>
      </ButtonWrapper>
    </Layout>
  )
}

export default ProductList;