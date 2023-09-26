import React from 'react';
import OrderPlaced from './OrderPlaced';
import AddressInfo from './AddressInfo';
import {addresses} from '@crema/services/db/ecommerce/ecommerceData';
import {useSelector} from 'react-redux';
import ItemsList from './ItemsList';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import AppPageMetadata from '@crema/core/AppPageMetadata';

export const getTotalPrice = (cartItems) => {
  let total = 4;
  cartItems.map((data) => {
    total = total + (+data.mrp - +data.discount) * +data.count;
    return data;
  });
  return total;
};

const Confirmation = () => {
  const {cartItems} = useSelector(({ecommerce}) => ecommerce);
  return (
    <AppAnimateGroup type='bottom'>
      <AppPageMetadata title='Order Confirmation' />
      <div className='position-relative' key={'wrap'}>
        <OrderPlaced cartItems={cartItems} />
        <AddressInfo address={addresses[0]} />
        <ItemsList cartItems={cartItems} />
      </div>
    </AppAnimateGroup>
  );
};

export default Confirmation;
