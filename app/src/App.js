import React, { useEffect, useState }  from 'react';

import firebase from './firebase';

import Input from 'input';

import './App.css';

function App() {
  const [ingredients, setIngredients] = useState([]);
  const collection = 'ingredients_list';
  const db = firebase.firestore();

  useEffect(() => {
    const fetchData = async () => {
      const docRef = await db.collection(collection).get();
      docRef.docs.map(doc => console.log(doc.data()))
      setIngredients(docRef.docs.map(doc => doc.data()))
    }
    fetchData()
  }, []);
  console.log(ingredients);

  const createFirestoreItem = (collection, item) => {
    try {
      db.collection(collection).add(item);
    }
    catch(e) {
      console.error(e);
    }
  };

  const [ingredientName, setIngredientName] = useState('');
  const [ingredientYield, setIngredientYield] = useState(0);
  const [ingredientPrice, setIngredientPrice] = useState(0);
  const handleChange = (e) => {
    switch(e.target.id) {
      case 'name':
        return setIngredientName(e.target.value)
      case 'yield':
        return setIngredientYield(e.target.value)
      case 'price':
        return setIngredientPrice(e.target.value)
      default:
        return null
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      ingredientName,
      ingredientYield,
      ingredientPrice
    }
    createFirestoreItem(collection, item);
}
  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          placeholder='minced meat'
          id='name'
          type='text'
          label='Ingredient name'
          onChange={(e) => handleChange(e)}
        />
        <Input
          placeholder='1000'
          id='yield'
          type='number'
          label='Package yield'
          onChange={(e) => handleChange(e)}

        />
        <Input
          placeholder='25.50'
          id='price'
          type='number'
          label='Package price'
          onChange={(e) => handleChange(e)}
        />
        <Input type='submit' value='submit' />
      </form>
    </div>
  );
}

export default App;
