import React, { useEffect, useState, useContext } from 'react';

import Title from 'title';
import Input from 'input';
import ItemsList from 'items-list';
// import Button from 'button';
import Select from 'select';

import { StateContext, DispatchContext } from '../../App';

import { Layout, Form } from '../../styled';

const shape = {
  currentItemId: 'L',
  id: '',
  ingredientName: 'Lkjhkjhkjh',
  ingredientPrice: '',
  ingredientYield: ''
};

const CreateRecipe = () => {
  const [products, setProducts] = useState();
  // const [testState, setTestState] = useState();
  const dispatch = useContext(DispatchContext);
  const context = useContext(StateContext);
  const ceva = context.recipesList;

  useEffect(() => {
    if (ceva.length) {
      setProducts(context.recipesList);
    }
    return;
  }, [context.recipesList]);

  const listData = context.ingredientsList;
  console.log(listData);

  const handleIngredientSubmission = event => {
    event.preventDefault();
    console.log('submitted');
  };

  const addedIngredient = ingredient => {
    // e.preventDefault();
    return console.log('submitted', ingredient);
  };
  console.log('TCL: CreateRecipe -> context', context, products);

  return (
    <Layout>
      <Title title="Recipe list" />
      <Form>
        <Input
          placeholder="meat balls"
          id="recipe name"
          type="text"
          label="Recipe name"
          // value={ingredientName}
          // onChange={(e) => handleChange(e)}
        />
        <Input
          placeholder="12"
          id="someId"
          type="number"
          label="Number of servings"
          name="servings"
        />
        {/* <ItemsList
          data={products}
          icon={icon}
          updateItem={updateItem}
        /> */}
        <Select data={listData} extract={addedIngredient} />
      </Form>
    </Layout>
  );
};

export default CreateRecipe;
