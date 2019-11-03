import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-weight: 300;
  padding: 10px 0px;
  width: 100%;
  margin-bottom: 1.5rem;

  ${props => props.type === 'submit' && css`
    border: none;
    padding: 0;
    background: LimeGreen;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 300;
    padding: 9px 36px;
    width: auto;
    display: block;
    margin: 0 auto;
  `}
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