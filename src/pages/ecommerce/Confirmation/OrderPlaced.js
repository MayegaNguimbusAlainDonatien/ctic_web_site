import React from 'react';
import AppCard from '@crema/core/AppCard';
import {getTotalPrice} from './index';
import PropTypes from 'prop-types';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styles from './index.module.scss';

const OrderPlaced = ({cartItems}) => {
  return (
    <AppCard className={styles.confirmationCard}>
      <AppRowContainer>
        <Col xs={12} lg={8}>
          <div className='d-flex align-items-center p-3'>
            <img src={'/assets/images/ecommerce/gift.png'} alt='confirm' />
            <div className='p-3'>
              <h3 className={styles.orderPlacedContentHeading}>
                Order placed for ${getTotalPrice(cartItems)}!
              </h3>
              <p className='mb-0'>
                Your {cartItems.length} Item will be delivered by Mon, 27 Aug
                20.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className='d-flex p-3'>
            <div>
              <p>Why call? Just click!</p>
              <p>Easily track all your orders! </p>
              <Button type='primary'>
                <Link className={styles.link} to='/ecommerce/orders'>
                  Go to My Orders
                </Link>
              </Button>
            </div>
            <div className={styles.orderPlacedActionThumb}>
              <img
                style={{maxHeight: 60, marginTop: 20}}
                src={'/assets/images/ecommerce/confirm-box.png'}
                alt='confirm'
              />
            </div>
          </div>
        </Col>
      </AppRowContainer>
    </AppCard>
  );
};

export default OrderPlaced;

OrderPlaced.propTypes = {
  cartItems: PropTypes.array,
};
