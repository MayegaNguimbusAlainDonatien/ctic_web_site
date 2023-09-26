import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import CartTable from './CartTable';
import AppCard from '@crema/core/AppCard';
import IntlMessages from '@crema/utility/IntlMessages';
import {getCartItems} from '../../../redux/actions';
import OrderSummary from '../OrderSummary';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Button, Col} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import styles from './index.module.scss';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import QueueAnim from 'rc-queue-anim';
import clsx from 'clsx';

const Carts = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {cartItems} = useSelector(({ecommerce}) => ecommerce);
  const {loading} = useSelector(({common}) => common);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  return (
    <>
      <AppPageMetadata title='Carts' />
      <QueueAnim style={{zIndex: 3}} type='scale'>
        <h2 className='page-title' key='title'>
          <IntlMessages id='sidebar.ecommerce.cart' />
        </h2>
      </QueueAnim>
      <AppRowContainer>
        <Col xs={12} lg={8}>
          <AppAnimateGroup type='left'>
            <AppCard
              key='a'
              footer={[
                <span
                  key={1}
                  className={clsx(
                    styles.cartsFooter,
                    'w-100 d-flex justify-content-between',
                  )}>
                  <Button
                    onClick={() => {
                      history.push('/ecommerce/products');
                    }}>
                    Continue Shopping
                  </Button>
                  <Button
                    className='btn-danger'
                    onClick={() => {
                      history.push('/ecommerce/checkout');
                    }}>
                    Checkout
                  </Button>
                </span>,
              ]}>
              <CartTable cartItems={cartItems} loading={loading} />
            </AppCard>
          </AppAnimateGroup>
        </Col>

        <Col xs={12} lg={4}>
          <AppAnimateGroup type='right'>
            <OrderSummary cartItems={cartItems} key='b' />{' '}
          </AppAnimateGroup>
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Carts;
