import styled, { css } from 'styled-components';

const StyledButton = styled.button`
    background: white;
    border: none;
    padding: 0;
    width: 25px;

  ${props => props.name === 'submit' && css`
    background: LimeGreen;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 300;
    padding: 9px 36px;
    width: auto;
  `}

  ${props => props.name === 'add' && css`
    background: LimeGreen;
    border-radius: 50%;
    padding: 5px;
    height: 50px;
    width: 50px;
  `}

  ${props => props.name === 'menu' && css`
    width: 50px;
  `}

  svg {
    width: 100%;
  }
`;

export default StyledButton;