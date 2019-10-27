import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-weight: 300;
  padding: 10px 40px 10px 10px;
  width: 100%;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;

  ${props => props.name === 'servings' && css`
    width: 100%;
  `}
`;

export const StyledInputWrapper = styled.div`
  ${props => props.name === 'servings' && css`
    display: flex;
    align-items: baseline;
  `}
`;

export const SAVEDEMCEZICEACUMINPULAMEA = styled.div`
  disaply: block;
`;