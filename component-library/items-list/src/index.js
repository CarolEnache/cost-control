import React from 'react';
import Button from 'button';

import { StyledItemsList, ListItem, ItemName } from './styled';

const listClicked = () => {
  console.log('list was clicked')
}

const buttonCliked = () => {
  console.log('button was clicked')
}


const ItemsList = ({ data, icon }) => (
  <StyledItemsList>
    {data.map(({ ingredientName, ingredientYield, ingredientPrice }) => {
      return (
        <ListItem className='ingredient-item'>
          <ItemName className='ingredient-name' onClick={listClicked}>{ingredientName}</ItemName>
          <span onClick={listClicked}>{ingredientYield}</span>
          <span onClick={listClicked}>£ {ingredientPrice}</span>
          <Button onClick={buttonCliked} >
            <img src={icon} alt="Delete Icon" />
          </Button>
        </ListItem>
      )
    })}
  </StyledItemsList>
)

export default ItemsList;