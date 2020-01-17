import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { initialState, reducer } from './redux-like';

import Button, { MenuWrapper } from 'button';

import CreateIngredient from './layouts/create-ingredient-layout';
import CreateRecipe from './layouts/create-recipe-layout';
import ProductList from './layouts/product-list-layout';
import Menu from './layouts/menu-layout';

import MenuIcon from 'assets/icons/menu.svg';
import CloseIcon from 'assets/icons/close.svg';

import SubscribeToDB from './DataSubscriber';

import './App.css';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { collection } = state;

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <SubscribeToDB collection={collection} />
        <Router>
          <MenuWrapper>
            <Button name="menu">
              <Link to="/menu">
                <img src={MenuIcon} alt="Menu Icon" />
              </Link>
            </Button>
            <Button name="close">
              <Link to="/">
                <img
                  src={CloseIcon}
                  alt="Close Icon"
                  onClick={() => dispatch({ type: 'CLEAR_CURRENT_ITEM' })}
                />
              </Link>
            </Button>
          </MenuWrapper>
          <>
            <Route exact path="/" component={ProductList} />
            <Route path="/update/" component={CreateIngredient} />
            <Route path="/menu/" component={Menu} />
            <Route path="/create-recipe/" component={CreateRecipe} />
          </>
        </Router>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const StateContext = createContext(initialState);
export const DispatchContext = createContext();

export default App;
