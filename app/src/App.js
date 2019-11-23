import React, { useEffect, useState }  from 'react';

import firebase from './firebase-config/firebase';

import Button, { MenuWrapper } from 'button';

import CreateIngredient from '../src/layouts/create-ingredient';
import ProductList from '../src/layouts/product-list';

import MenuIcon from 'assets/icons/menu.svg';
import CloseIcon from 'assets/icons/close.svg';

import { collections } from './constants'

import './App.css';

const db = firebase.firestore();

function App() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
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
    fetchData(collections.ingredients)
  }, []);

  return (
    <>
      <MenuWrapper >
        <Button name='menu'>
          <img src={MenuIcon} alt="Menu Icon" />
        </Button>
        <Button name='close'>
          <img src={CloseIcon} alt="Close Icon" />
        </Button>
      </MenuWrapper>

      {/* <CreateIngredient /> */}
      <ProductList data={ingredients}/>
    </>
  );
}

export default App;
