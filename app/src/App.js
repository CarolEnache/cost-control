import React, { useEffect, useState }  from 'react';

import firebase from './firebase-config/firebase';

import Button, { MenuWrapper } from 'button';
import Title from 'title';
import ListHeader from 'list-header';

import CreateIngredient from '../src/layouts/create-ingredient';

import EditIcon from 'assets/icons/edit.svg';
import DeleteIcon from 'assets/icons/delete.svg';

import MenuIcon from 'assets/icons/menu.svg';
import CloseIcon from 'assets/icons/close.svg';
import AddIcon from 'assets/icons/add.svg'


import { collections } from './constants'
import { mockIngredients } from './mockData';

import { Layout } from './styled'
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
    <div className="App">

      <MenuWrapper >
        <Button name='menu'>
          <img src={MenuIcon} alt="Menu Icon" />
        </Button>
        <Button name='close'>
          <img src={CloseIcon} alt="Close Icon" />
        </Button>
      </MenuWrapper>

      {/* <CreateIngredient /> */}
      <Layout>
      <div className='ceva'>
        <Title title='Ingredients list' />
        <ListHeader dynamic='yield' />
      </div>
      <div className='altceva'>

      </div>

        {mockIngredients.map(({ ingredientName, ingredientYield, ingredientPrice}) => {
        return (
          <div className='test'>
            <p className='ingredient-name'>{ingredientName}</p>
            <p>{ingredientYield}</p>
            <p>£ {ingredientPrice}</p>
            <Button>
              <img src={EditIcon} alt="Edit Icon" />
            </Button>
            <Button>
              <img src={DeleteIcon} alt="Delete Icon" />
            </Button>
          </div>
        )
      })}
      </Layout>
      <div className='add-wrapper'>
        <Button name='add'>
            <img src={AddIcon} alt="Add Icon" />
        </Button>
      </div>
    </div>
  );
}

export default App;
