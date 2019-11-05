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
      const docRef = await db.collection(collection).get();
      docRef.docs.map(doc => console.log(doc.data()))
      setIngredients(docRef.docs.map(doc => doc.data()))
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
