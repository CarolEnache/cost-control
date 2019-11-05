import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-weight: 300;
  width: 100%;
  padding: 16px 0px 16px 5px;
  margin-bottom: 2.5rem;

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

  ${props => props.name === 'submit' && css`
    position: absolute;
    bottom: 10%;
    left: 0;
    right: 0;
  `}
`;
