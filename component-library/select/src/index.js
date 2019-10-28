import React, { useState } from 'react';
import { StyledSelectInput, StyledOptionInput, StyledLabel } from './styled';
import Button from 'button';

// import { ReactComponent as SelectIcon } from '../../../app/src/assets/icons/select.svg'


const Select = ({ data, label }) => {
  const [value, setValue] = useState('')
  const ingrediants = data.map(({name}) => name.toLocaleLowerCase())

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const suggestions = ingrediants.filter(ingredient => ingredient.includes(value))
  const empty = value === '';
  return (
    <>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelectInput onChange={(e) => handleChange(e)}/>
      {!empty && suggestions.map(option =>
        <Button name='select'>
          {option}
        </Button>
      )}
      {!empty && suggestions.length === 0 && (
        <StyledOptionInput>create this ingredient</StyledOptionInput>
      )}
    </>
  )
};

export default Select;