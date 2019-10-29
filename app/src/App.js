import React from 'react';
import Button from 'button';
import Input from 'input';
import Select from 'select'
import { ReactComponent as AddIcon } from 'assets/icons/add.svg';

import './App.css';

function App() {

  return (
    <div className="App">
      <Button name='add'>
        <AddIcon />
      </Button>
      <Input placeholder="Hello world!" id='someId' type='text' label='Repice name' />
      <Select placeholder="Hello world!" label='Ingredient name' />
    </div>
  );
}

export default App;
