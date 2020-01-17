import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DispatchContext } from '../../App';

const Menu = () => {
  const dispatch = useContext(DispatchContext);

  return (
    <>
      <Link to="/" onClick={() => dispatch({ type: 'DISPLAY_INGREDIENTS' })}>
        <h1>Ingredients</h1>
      </Link>
      <Link to="/" onClick={() => dispatch({ type: 'DISPLAY_RECIPES' })}>
        <h1>Recipes</h1>
      </Link>
    </>
  );
};

export default Menu;
