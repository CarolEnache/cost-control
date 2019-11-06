import React, { useEffect, useState }  from 'react';

import firebase from './firebase-config/firebase';
import Button from 'button';

import CreateIngredient from '../src/layouts/create-ingredient';

import EditIcon from 'assets/icons/edit.svg';
import DeleteIcon from 'assets/icons/delete.svg';

import './App.css';
import { collections } from './constants'

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

  console.log(ingredients);

  return (
    <div className="App">
      <CreateIngredient />
      {ingredients.map(m => {
        return (
          <div className='test'>
            <p>{m.ingredientName}</p>
            <p>{m.ingredientYield}</p>
            <p>£ {m.ingredientPrice}</p>
            <Button>
              <img src={EditIcon} alt="Edit Icon" />
            </Button>
            <Button>
              <img src={DeleteIcon} alt="Delete Icon" />
            </Button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
