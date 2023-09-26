import React from 'react';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import clsx from 'clsx';

const getTotalPrice = (cartItems) => {
  let total = 0;
  cartItems.map((data) => {
    total = total + +data.mrp * +data.count;
    return data;
  });
  return total;
};

const getTotalDiscount = (cartItems) => {
  let total = 0;
  cartItems.map((data) => {
    total = total + +data.discount * +data.count;
    return data;
  });
  return total;
};

const OrderSummary = ({cartItems}) => {
  const {messages} = useIntl();
  const totalPrice = getTotalPrice(cartItems);
  const totalDiscount = getTotalDiscount(cartItems);
  return (
    <AppCard title={messages['ecommerce.orderSummary']}>
      <AppPageMetadata title='Order Summery' />
      <div
        className={clsx(
          styles.orderSummaryItem,
          'd-flex justify-content-between mb-3 mt-2',
        )}>
        <p>Grand Total: </p>
        <span>${totalPrice}</span>
      </div>
      <div
        className={clsx(
          styles.orderSummaryItem,
          'd-flex justify-content-between mb-3 mt-2',
        )}>
        <p>Discount: </p>
        <span>${totalDiscount}</span>
      </div>
      <div
        className={clsx(
          styles.orderSummaryItem,
          'd-flex justify-content-between mb-3 mt-2',
        )}>
        <p>Shipping Charge: </p>
        <span>$4</span>
      </div>
      <div
        className={clsx(
          styles.orderSummaryItem,
          'd-flex justify-content-between mb-3 mt-2',
        )}>
        <p>Estimated Tax: </p>
        <span>$0</span>
      </div>

      <hr className='mb-3 mt-3' />

      <div
        className={clsx(
          styles.orderSummaryItem,
          'd-flex justify-content-between mb-3 mt-2',
        )}>
        <p>Order Total: </p>
        <span>${totalPrice - totalDiscount + 4}</span>
      </div>
    </AppCard>
  );
};

export default OrderSummary;

OrderSummary.propTypes = {
  cartItems: PropTypes.array,
};
