import React, { useState } from 'react';
import Button from 'button';
import Input from 'input';

import select from 'assets/icons/select.svg';

import { SelectList } from './styled';

const Select = ({ data = [], extract }) => {
  const [toggle, setToggle] = useState(false);
  const [ingredient, setIngredient] = useState();
  const [toggleList, setToggleList] = useState(false);
  const [quantityUsed, setQuantityUsed] = useState(0);

  const ingredients =
    data &&
    data.map(({ ingredientName }) => ingredientName.toLocaleLowerCase());

  const suggestions = ingredients.filter(ingredientItem =>
    ingredientItem.includes(ingredient)
  );

  const handleChange = e => {
    setIngredient(e.target.value);
    setToggleList(true);
  };

  const handleClick = (event, option) => {
    event.preventDefault();
    setIngredient(option);
    setToggleList(false);
  };

  const handleQuantityChange = e => {
    setQuantityUsed(e.target.value);
  };

  const result = e => {
    e.preventDefault();
    setToggle(!toggle);
    const obj =
      data &&
      ingredient &&
      data.filter(
        ingredientItem =>
          ingredientItem.ingredientName.toLocaleLowerCase() === ingredient
      )[0];

    if (obj !== undefined) {
      setIngredient();
      setQuantityUsed(0);

      return extract({ ...obj, quantityUsed });
    }

    return null;
  };

  return (
    <>
      {toggle && (
        <>
          <Input
            placeholder={'Type your ingredient'}
            id="someId"
            type="text"
            label="Ingredient name"
            onChange={e => handleChange(e)}
            value={ingredient}
          />
          <SelectList>
            {toggleList &&
              suggestions.map((option, index) => (
                <Button
                  key={index}
                  name="select"
                  onClick={e => handleClick(e, option)}
                >
                  {option} <img src={select} />
                </Button>
              ))}
          </SelectList>
          {toggleList && suggestions.length === 0 && (
            <Button name="create">create this ingredient</Button>
          )}
          <Input
            placeholder="2350"
            onChange={e => handleQuantityChange(e)}
            id="someId"
            type="number"
            label="Quantity used"
            value={quantityUsed}
          />
        </>
      )}
      <Button name="add" onClick={e => result(e)}>
        {toggle ? 'Add ingredient' : 'Add another ingredient'}
      </Button>
    </>
  );
};

export default Select;
