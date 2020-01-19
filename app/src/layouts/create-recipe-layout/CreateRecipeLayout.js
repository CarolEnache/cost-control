import React, { useEffect, useState, useContext } from 'react';

import Title from 'title';
import Input from 'input';
import ItemsList from 'items-list';
import Select from 'select';

import { StateContext } from '../../App';
import createFirestoreItem from '../../firebase-config/utils/create';

import { Layout, Form } from '../../styled';

const CreateRecipe = () => {
  const [name, setName] = useState('');
  const [numberOfPortions, setNumberOfPortions] = useState(0);
  const [theIngredientsList, setTheIngredientsList] = useState([]);
  const context = useContext(StateContext);
  const listData = context.ingredientsList;
  const recipe = {
    name,
    numberOfPortions,
    theIngredientsList
  };

  const handleName = e => {
    return setName(e.target.value);
  };

  const handleNumberOfPortions = e => {
    return setNumberOfPortions(e.target.value);
  };

  const addedIngredient = ingredient => {
    return setTheIngredientsList(theIngredientsList => [
      ...theIngredientsList,
      ingredient
    ]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    createFirestoreItem('recipe_list', recipe);
  };

  return (
    <Layout>
      <Title title="Recipe list" />
      <Form onSubmit={e => handleSubmit(e)}>
        <Input
          placeholder="meat balls"
          id="recipe name"
          type="text"
          label="Recipe name"
          value={name}
          onChange={e => handleName(e)}
        />
        <Input
          placeholder="12"
          id="someId"
          type="number"
          label="Number of servings"
          name="servings"
          onChange={e => handleNumberOfPortions(e)}
        />
        <ItemsList
          data={theIngredientsList}
          // icon={icon}
          // updateItem={updateItem}
        />
        <Select data={listData} extract={addedIngredient} />
        <Input type="submit" value="Submit">
          submit
        </Input>
      </Form>
    </Layout>
  );
};

export default CreateRecipe;
