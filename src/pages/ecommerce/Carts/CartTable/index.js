import React from 'react';
import PropTypes from 'prop-types';
import {removeCartItem, updateCartItem} from '../../../../redux/actions';
import {useDispatch} from 'react-redux';
import AppTable from '@crema/core/AppTableContainer/AppTable';
import Columns from './Columns';

const CartTable = ({cartItems, loading}) => {
  const dispatch = useDispatch();
  const onRemoveItem = (product) => {
    dispatch(removeCartItem(product));
  };

  const onDecrement = (product) => {
    if (product.count > 0) {
      dispatch(updateCartItem({...product, count: product.count - 1}));
    } else {
      dispatch(removeCartItem(product));
    }
  };
  const onIncrement = (product) => {
    dispatch(updateCartItem({...product, count: product.count + 1}));
  };

  return (
    <AppTable
      data={cartItems}
      columns={Columns(onIncrement, onDecrement, onRemoveItem)}
    />
  );
};

export default CartTable;

CartTable.propTypes = {
  cartItems: PropTypes.array,
  loading: PropTypes.bool,
};
