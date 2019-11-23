import styled from 'styled-components';

export const StyledItemsList = styled.ul`
  padding: 10px;
  margin-top: 5rem;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding: 1rem 0;
`;

export const ItemName = styled.span`
  text-overflow: ellipsis;
  width: 35%;
  overflow: hidden;
`;
