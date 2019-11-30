import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { initialState, reducer } from './redux';

import Button, { MenuWrapper } from 'button';

import CreateIngredient from './layouts/create-ingredient';
import ProductList from './layouts/product-list';

import MenuIcon from 'assets/icons/menu.svg';
import CloseIcon from 'assets/icons/close.svg';

import './App.css';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

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
                <img src={CloseIcon} alt="Close Icon" />
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
