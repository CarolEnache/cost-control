import React, { useState } from 'react';
import Button from 'button';
import Input from 'input';

import select from 'assets/icons/select.svg';

import {
  Form,
  SelectList,
} from './styled';

const Select = ({ data = [], submit }) => {
  const [value, setValue] = useState('');
  const [ingredient, setIngredient] = useState('Type your ingredient');

  const ingrediants = data.map(({name}) => name.toLocaleLowerCase());
  const suggestions = ingrediants.filter(ingredient => ingredient.includes(value));
  const empty = value === '';

  const handleChange = (e) => {
    setValue(e.target.value)
  };

  const handleClick = (event, option) => {
    event.preventDefault()
    setIngredient(option)
    console.log(ingredient)
  }

  return (
    <Form onSubmit={submit}>
      <Input
        // placeholder={ingredient}
        id='someId'
        type='text'
        label='Ingredient name'
        onChange={(e) => handleChange(e)}
        value={ingredient}
      />
      <SelectList>
        {!empty && suggestions.map(option =>
          <Button name='select' onClick={(event) => handleClick(event, option)}>
            {option} <img src={select}/>
          </Button>
        )}
      </SelectList>
      {!empty && suggestions.length === 0 && (
        <Button name='create'>
          create this ingredient
        </Button>
      )}
      <Input placeholder="2350" id='someId' type='number' label='Quantity used' />
      <Input type='submit' value='submit' />
    </Form>
  )
};

export default Select;