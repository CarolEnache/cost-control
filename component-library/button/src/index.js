import React from 'react';
import StyledButton from './styled';

const Button = ({ children, onClick, name }) => (
  <StyledButton
    onClick={onClick}
    name={name}
   >
    {children}
  </StyledButton>
);

export default Button;
