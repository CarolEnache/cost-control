import React, { useState } from 'react';
import Button from '@component-library/button';

// import { ReactComponent as SelectIcon } from 'assets/icons/select.svg'
import {
  CreateButton,
  Form,
  SelectButton,
  SelectList,
  SelectInput,
  SubmitButton,
  Label,
  Input,
} from './styled';

const Select = ({ data = [], selectLabel, quantityLabel }) => {
  const [value, setValue] = useState('')
  const ingrediants = data.map(({name}) => name.toLocaleLowerCase())

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const suggestions = ingrediants.filter(ingredient => ingredient.includes(value))
  const empty = value === '';
  return (
    <Form>
      <Label>{selectLabel}</Label>
      <SelectInput onChange={(e) => handleChange(e)}/>
      <SelectList>
        {!empty && suggestions.map(option =>
          <SelectButton>
            {option}
          </SelectButton>
        )}
      </SelectList>
      {!empty && suggestions.length === 0 && (
        <CreateButton>
          create this ingredient
        </CreateButton>
      )}
      <Label>{quantityLabel}</Label>
      <Input placeholder="2350" id='someId' type='number' label='Quantity used' />
      <SubmitButton name='submit' type='submit'>Submit</SubmitButton>
      <Button>From Workspace</Button>
    </Form>
  )
};

export default Select;