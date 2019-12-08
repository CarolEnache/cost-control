import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import Title from 'title';
import ListHeader from 'list-header';
import ItemsList from 'items-list';
import Button from 'button';

import AddIcon from 'assets/icons/add.svg'
import EditIcon from 'assets/icons/edit.svg';

import { StateContext, DispatchContext } from '../../App';

import { Layout } from '../../styled';
import { Header, ButtonWrapper } from './styled';


const ProductList = () => {
  const [ingredients, setIngredients] = useState([])
  const dispatch = useContext(DispatchContext)
  const context =  useContext(StateContext)

  useEffect(() => {
    return setIngredients(context.list)
  }, [context.list])

  const updateItem = (collection, id) => {
    if (collection === undefined) {
      return
    }

    return dispatch({ type: 'UPDATE_ITEM', collection, id })
  };

  return (
    <Layout>
      <Header>
        <Title title='Ingredients list' />
        <ListHeader dynamic='yield' />
      </Header>
      <Link to='/update' onClick={() => updateItem()}>
        <ItemsList
          data={ingredients}
          icon={EditIcon}
          updateItem={updateItem}
        />
      </Link>
      <ButtonWrapper>
        <Link to='/update'>
          <Button name='add'>
            <img src={AddIcon} alt="Add Icon" />
          </Button>
        </Link>
      </ButtonWrapper>
    </Layout>
  )
}

export default ProductList;