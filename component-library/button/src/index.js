import React from 'react';
import StyledButton from './styled';

const Button = ({ children, onClick, name, type }) => (
  <StyledButton
    onClick={onClick}
    name={name}
    type={type}
   >
    {children}
  </StyledButton>
);

export default Button;
