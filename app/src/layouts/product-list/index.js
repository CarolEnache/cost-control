import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import firebase from '../../firebase-config/firebase';

import Title from 'title';
import ListHeader from 'list-header';
import ItemsList from 'items-list';
import Button from 'button';

import AddIcon from 'assets/icons/add.svg'
import DeleteIcon from 'assets/icons/delete.svg';

import deleteFirestoreItem from '../../firebase-config/utils/delete';

import { collections } from '../../constants';

import { Layout } from '../../styled';
import { Header, ButtonWrapper } from './styled';

const db = firebase.firestore();
const updateItem = () => {
  console.log('update item')
};

const ProductList = () => {
  const [ingredients, setIngredients] = useState([]);
  // const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    // setDidMount(true)
    const abortController = new AbortController()
    const signal = abortController.signal
    const fetchData = async (data) => {
      await db.collection(data).onSnapshot(snapshot => {
        const ingredientsCollection = {
          list: snapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
          }))
        }
        setIngredients(ingredientsCollection.list)
      });
    }
    fetchData(collections.ingredients, {signal})
    return () => abortController.abort();
    // return () => setDidMount(false);
  }, []);

  return (
    <Layout>
      <Header>
        <Title title='Ingredients list' />
        <ListHeader dynamic='yield' />
      </Header>
      <ItemsList
        data={ingredients}
        icon={DeleteIcon}
        deleteItem={deleteFirestoreItem}
        updateItem={updateItem}
      />
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