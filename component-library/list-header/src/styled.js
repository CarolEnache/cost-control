import styled, { css } from 'styled-components';

export const Header = styled.p`
  display: flex;
  border-bottom: 1px solid black;
  background: white;
  margin: 0;
`;

export const HeaderDetails = styled.span`
  margin-bottom: 5px;

  ${props => props.type === 'name' && css`
    width: 45%;
  `}
  ${props => props.type === 'dynamic' && css`
      margin-right: 45px;
  `}
`;