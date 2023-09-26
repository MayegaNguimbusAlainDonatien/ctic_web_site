import React, {useState} from 'react';
import AppCard from '@crema/core/AppCard';
import {Button, Form} from 'react-bootstrap';
import clsx from 'clsx';
import styles from './index.module.scss';

const PaymentInfo = () => {
  const [paymentMode, setPaymentMode] = useState('CARD');
  return (
    <AppCard
      title={
        <h3 className={clsx(styles.checkoutCardTitle, 'mb-0')}>Payment Info</h3>
      }
      actions={<Button type='primary'>Place Order</Button>}>
      <div className={clsx(styles.paymentInfoItem, 'position-relative')}>
        <span
          onClick={() => setPaymentMode('COD')}
          className={styles.payRadioMod}>
          <Form.Check
            type='radio'
            checked={paymentMode === 'COD'}
            label='COD'
          />
        </span>
        {paymentMode === 'COD' ? (
          <div
            className={clsx(styles.payModeContent, 'position-relative mt-3')}>
            <p>Cash on delivery</p>
          </div>
        ) : null}
      </div>
      <div className={clsx(styles.paymentInfoItem, 'position-relative')}>
        <span
          onClick={() => setPaymentMode('CARD')}
          className={styles.payRadioMod}>
          <Form.Check
            type='radio'
            checked={paymentMode === 'CARD'}
            label='CARD'
          />
        </span>
        {paymentMode === 'CARD' ? (
          <div
            className={clsx(styles.payModeContent, 'position-relative mt-3')}>
            <div className={styles.formField}>
              <Form.Control id='user-name' placeholder='Full Name' />
            </div>
            <div className={styles.formField}>
              <Form.Control id='card-number' placeholder='Card Number' />
            </div>
            <div className={clsx(styles.payModeFormField, 'd-flex')}>
              <div className={styles.formField}>
                <Form.Control id='expiry-date' placeholder='Expiry Date (MM/YY)' />
              </div>
              <div className={styles.formField}>
                <Form.Control type='password' id='card-cvv' placeholder='CVV' />
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className={clsx(styles.paymentInfoItem, 'position-relative')}>
        <span
          onClick={() => setPaymentMode('PAYPAL')}
          className={styles.payRadioMod}>
          <Form.Check
            type='radio'
            checked={paymentMode === 'PAYPAL'}
            label='PAYPAL'
          />
        </span>
        {paymentMode === 'PAYPAL' ? (
          <div
            className={clsx(styles.payModeContent, 'position-relative mt-3')}>
            <div className={styles.formField}>
              <Form.Control id='paypal-email' placeholder='PayPal email address' />
            </div>
          </div>
        ) : null}
      </div>
    </AppCard>
  );
};

export default PaymentInfo;
