import React, { useEffect, useState }  from 'react';

import firebase from './firebase';

import Button from 'button';
import Input from 'input';
import Select from 'select'

import { ReactComponent as AddIcon } from 'assets/icons/add.svg';

import './App.css';

function App() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const docRef = await db.collection('ingredients_list').get();
      docRef.docs.map(doc => console.log(doc.data()))
      setIngredients(docRef.docs.map(doc => doc.data()))
    }
    fetchData()
  }, []);
  console.log(ingredients);

  const handleIngredientSubmition = (event) => {
    event.preventDefault();
    console.log('submited')
  }

  return (
    <div className="App">
      <Button name='add'>
        <AddIcon />
      </Button>
      <Input placeholder="Hello world!" id='someId' type='text' label='Repice name' />
      <Select submit={handleIngredientSubmition} />
    </div>
  );
}

export default App;
