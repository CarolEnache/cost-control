import React from 'react';
import { Header, HeaderDetails } from './styled';

const ListHeader = ({ dynamic }) => (
  <Header>
    <HeaderDetails type="name">Name</HeaderDetails>
    <HeaderDetails type="dynamic">{dynamic}</HeaderDetails>
    <HeaderDetails type="price">Price</HeaderDetails>
  </Header>
);

export default ListHeader;
