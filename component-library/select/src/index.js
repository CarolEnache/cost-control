import React, { useState } from 'react';
import Button from 'button';
import Input from 'input';

import select from 'assets/icons/select.svg';

import {
  Form,
  SelectList,
} from './styled';

const Select = ({ data = [], onClick }) => {
  const [ingredient, setIngredient] = useState();
  const [toggleList, setToggleList] = useState(false);
  const [quantityUsed, setQuantityUsed] = useState()
  const [bla, setBla] = useState()


  const ingredients = data.map(({ ingredientName }) => ingredientName.toLocaleLowerCase());
  const suggestions = ingredients.filter(ingredientItem => ingredientItem.includes(ingredient));
  const [obj] = data.filter(ingredientItem => ingredientItem.ingredientName === bla);
  let ingredientToSubmit;
  if (obj) {
    ingredientToSubmit = {
      ingredientId: obj.id,
      quantityUsed
    }
  }

  // const { id } = obj
  console.log(ingredientToSubmit)

  const handleChange = (e) => {
    setIngredient(e.target.value);
    setToggleList(true);
  };

  const handleClick = (event, option) => {
    event.preventDefault();
    setIngredient(option);
    setToggleList(false);
    setBla(option)
  }

  const handleQuantityChange = (e) => {
    setQuantityUsed(e.target.value)
  }

  const onClickk = (a) => {
    console.log(a)
  }

  return (
    <>
      <Input
        placeholder={'Type your ingredient'}
        id='someId'
        type='text'
        label='Ingredient name'
        onChange={(e) => handleChange(e)}
        value={ingredient}
      />
      <SelectList>
        {toggleList && suggestions.map(option =>
          <Button name='select' onClick={(event) => handleClick(event, option)}>
            {option} <img src={select}/>
          </Button>
        )}
      </SelectList>
      {toggleList && suggestions.length === 0 && (
        <Button name='create'>
          create this ingredient
        </Button>
      )}
      <Input placeholder="2350" onChange={(e) => handleQuantityChange(e)} id='someId' type='number' label='Quantity used' />
      <Button type='delete' onClick={() => onClickk(obj.id)} >
        delete this item
      </Button>
    </>
  )
};

export default Select;