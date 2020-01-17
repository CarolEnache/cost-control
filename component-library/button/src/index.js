import React from 'react';
import { StyledButton, MenuWrapper } from './styled';

export const Button = ({ children, onClick, name, type }) => (
  <StyledButton onClick={onClick} name={name} type={type}>
    {children}
  </StyledButton>
);
export { MenuWrapper };
export default Button;
