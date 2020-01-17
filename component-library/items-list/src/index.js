import React from 'react';
import Button from 'button';

import { StyledItemsList, ListItem, ItemName } from './styled';

const ItemsList = ({ data = [], icon, updateItem }) => (
  <StyledItemsList>
    {data.map(({ ingredientName, ingredientYield, ingredientPrice, id }) => {
      return (
        <ListItem key={id}>
          <ItemName onClick={() => updateItem('ingredients_list', id)}>
            {ingredientName}
          </ItemName>
          <span onClick={() => updateItem('ingredients_list', id)}>
            {ingredientYield}
          </span>
          <span onClick={() => updateItem('ingredients_list', id)}>
            £ {ingredientPrice}
          </span>
          <Button onClick={() => updateItem('ingredients_list', id)}>
            <img src={icon} alt="Edit button" />
          </Button>
        </ListItem>
      );
    })}
  </StyledItemsList>
);

export default ItemsList;
