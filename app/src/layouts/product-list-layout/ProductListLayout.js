import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useFetchList from '../../firebase-config/utils/fetchItemsList';

import Title from 'title';
import ListHeader from 'list-header';
import ItemsList from 'items-list';
import Button from 'button';

import AddIcon from 'assets/icons/add.svg'
import DeleteIcon from 'assets/icons/delete.svg';

import { StateContext, DispatchContext } from '../../App';

import deleteFirestoreItem from '../../firebase-config/utils/delete';

import { collections } from '../../constants';

import { Layout } from '../../styled';
import { Header, ButtonWrapper } from './styled';


const ProductList = () => {
  useFetchList(collections.ingredients)
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
          icon={DeleteIcon}
          deleteItem={deleteFirestoreItem}
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