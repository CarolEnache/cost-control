import React from 'react';
import { StyledInput, StyledLabel, StyledInputWrapper } from './styled';

const Input = ({ id, placeholder, type, label, name }) => (
  <StyledInputWrapper name={name}>
      <StyledLabel htmlFor={id} name={name}>{label}</StyledLabel>
    <StyledInput id={id} placeholder={placeholder} name={name} type={type} />
  </StyledInputWrapper>
)

export default Input;