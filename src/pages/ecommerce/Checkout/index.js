import React, {useEffect} from 'react';
import AppCard from '@crema/core/AppCard';
import IntlMessages from '@crema/utility/IntlMessages';
import {useDispatch, useSelector} from 'react-redux';
import {getCartItems} from '../../../redux/actions';
import OrderSummary from '../OrderSummary';
import DeliveryAddress from './DeliveryAddress';
import PaymentInfo from './PaymentInfo';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import clsx from 'clsx';
import styles from './index.module.scss';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Button, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import QueueAnim from 'rc-queue-anim';

const Checkout = () => {
  const dispatch = useDispatch();
  const {cartItems} = useSelector(({ecommerce}) => ecommerce);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  return (
    <>
      <AppPageMetadata title='Checkout' />
      <QueueAnim style={{zIndex: 3}} type='scale'>
        <h2 className='page-title' key='title'>
          <IntlMessages id='sidebar.ecommerce.checkout' />
        </h2>
      </QueueAnim>
      <AppRowContainer>
        <Col xs={12} lg={8}>
          <AppAnimateGroup type='left'>
            <AppCard
              key='cardLeft'
              title={
                <h3 className={clsx(styles.checkoutCardTitle, 'mb-0')}>
                  Delivery Address
                </h3>
              }>
              <DeliveryAddress />
            </AppCard>
          </AppAnimateGroup>
        </Col>
        <Col xs={12} lg={4}>
          <AppAnimateGroup type='right'>
            <div key='checkoutRight'>
              <div className='mb-4'>
                <OrderSummary cartItems={cartItems} />
              </div>
              <PaymentInfo />
              <Button type='primary' className='mt-3'>
                <Link className={styles.link} to='/ecommerce/confirmation'>
                  CheckOut
                </Link>
              </Button>
            </div>
          </AppAnimateGroup>
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Checkout;
