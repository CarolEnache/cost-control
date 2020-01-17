import React from 'react';
import Button from 'button';
// import mockIngredients from 'mock';
import EditIcon from 'assets/icons/edit.svg';
import DeleteIcon from 'assets/icons/delete.svg';

import { List, Item, Name } from './styled';

const ProductList = ({ data }) => (
  <List>
    {data.map(({ ingredientName, ingredientYield, ingredientPrice }) => {
      <Item>
        <Name>{ingredientName}</Name>
        <p>{ingredientYield}</p>
        <p>{ingredientPrice}</p>
        <Button>
          <img src={EditIcon} alt="Edit Icon" />
        </Button>
        <Button>
          <img src={DeleteIcon} alt="Delete Icon" />
        </Button>
      </Item>;
    })}
  </List>
);

export default ProductList;
