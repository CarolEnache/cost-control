import React from 'react';
import Button from 'button';

import { StyledItemsList, ListItem, ItemName } from './styled';

const ItemsList = ({ data, icon, deleteItem, updateItem }) => (
  <StyledItemsList>
    {data.map(({ ingredientName, ingredientYield, ingredientPrice, id }) => {
      return (
        <ListItem key={id}>
          <ItemName onClick={updateItem}>{ingredientName}</ItemName>
          <span onClick={updateItem}>{ingredientYield}</span>
          <span onClick={updateItem}>£ {ingredientPrice}</span>
          <Button onClick={() => deleteItem('ingredients_list', id)} >
            <img src={icon} alt="Delete Icon" />
          </Button>
        </ListItem>
      )
    })}
  </StyledItemsList>
)

export default ItemsList;