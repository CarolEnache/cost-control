import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
    background: white;
    border: none;
    padding: 0;
    width: 25px;

    img {
      width: 100%;
    }

  ${props =>
    props.name === 'add' &&
    css`
      background: LimeGreen;
      border-radius: 50%;
      padding: 5px;
      height: 50px;
      width: 50px;
    `}

  ${props =>
    props.name === 'menu' &&
    css`
      width: 50px;
    `}

  ${props =>
    props.name === 'select' &&
    css`
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin: 10px 0;

      img {
        width: 15px;
      }
    `}

  ${props =>
    props.name === 'create' &&
    css`
      background: salmon;
      padding: 1rem;
      width: 100%;
      color: white;
      font-size: 1rem;
    `}

  ${props =>
    props.type === 'delete' &&
    css`
      border: none;
      padding: 0;
      background: red;
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

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  height: 6rem;
  width: 90%;
  margin: 0 auto;
`;
