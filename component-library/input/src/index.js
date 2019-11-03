import React from 'react';
import { StyledInput, StyledLabel, StyledInputWrapper } from './styled';

const Input = ({ id, placeholder, type, label, name, onChange }) => (
  <StyledInputWrapper name={name}>
      <StyledLabel htmlFor={id} name={name}>{label}</StyledLabel>
    <StyledInput id={id} placeholder={placeholder} name={name} type={type} onChange={onChange}/>
  </StyledInputWrapper>
)

export default Input;