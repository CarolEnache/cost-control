import React from 'react';

import Title from 'title';
import ListHeader from 'list-header';
import ItemsList from 'items-list';
import Button from 'button';

import AddIcon from 'assets/icons/add.svg'
import DeleteIcon from 'assets/icons/delete.svg';

import { Layout } from '../../styled';
import { Header, ButtonWrapper } from './styled';

const ProductList = ({ data }) => (
  <Layout>
    <Header>
      <Title title='Ingredients list' />
      <ListHeader dynamic='yield' />
    </Header>
    <ItemsList data={data} icon={DeleteIcon} />
    <ButtonWrapper>
      <Button name='add'>
        <img src={AddIcon} alt="Add Icon" />
      </Button>
    </ButtonWrapper>
  </Layout>
)

export default ProductList;