import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { initialState, reducer } from './redux-like';

import Button, { MenuWrapper } from 'button';

import CreateIngredient from './layouts/create-ingredient-layout/CreateIngredientLayout';
import ProductList from './layouts/product-list-layout/ProductListLayout';

import MenuIcon from 'assets/icons/menu.svg';
import CloseIcon from 'assets/icons/close.svg';

import './App.css';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <Router>
          <MenuWrapper >
            <Button name='menu'>
              <img src={MenuIcon} alt="Menu Icon" />
            </Button>
            <Button name='close'>
              <Link to='/'>
                <img src={CloseIcon} alt="Close Icon" onClick={() => dispatch({ type: 'CLEAR_CURRENT_ITEM' })}/>
              </Link>
            </Button>
          </MenuWrapper>
          <>
            <Route exact path='/' component={ProductList}/>
            <Route path='/update/' component={CreateIngredient} />
          </>
        </Router>
      </StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export const StateContext = createContext(initialState);
export const DispatchContext = createContext();

export default App;
