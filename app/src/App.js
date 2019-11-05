import React, { useEffect, useState }  from 'react';

import firebase from './firebase';

import CreateIngredient from '../src/layouts/create-ingredient';

import './App.css';

const collection = 'ingredients_list';
const db = firebase.firestore();

function App() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await db.collection(collection).onSnapshot(snapshot => {
        const ingredientsCollection = {
          list: snapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
          }))
        }
        setIngredients(ingredientsCollection.list)
      });
    }
  fetchData()
  }, []);
  console.log(ingredients);

  return (
    <div className="App">
      <CreateIngredient />
    </div>
  );
}

export default App;
