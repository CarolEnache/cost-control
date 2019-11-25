import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Button, { MenuWrapper } from 'button';

import CreateIngredient from '../src/layouts/create-ingredient';
import ProductList from '../src/layouts/product-list';

import MenuIcon from 'assets/icons/menu.svg';
import CloseIcon from 'assets/icons/close.svg';

import './App.css';

const App = () => (
  <>
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
      <div>
        <Route exact path='/' component={ProductList}/>
        <Route path='/update/' component={CreateIngredient} />
      </div>
    </Router>
  </>
);

export default App;
