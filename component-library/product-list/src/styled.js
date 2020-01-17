import styled from 'styled-components';

export const List = styled.ul`
  padding: 10px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Name = styled.p`
  text-overflow: ellipsis;
  width: 35%;
  overflow: hidden;
`;
