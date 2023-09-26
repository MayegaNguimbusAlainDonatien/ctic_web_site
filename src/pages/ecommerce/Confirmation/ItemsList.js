import React from 'react';
import AppCard from '@crema/core/AppCard';
import AppList from '@crema/core/AppList';
import {getTotalPrice} from './index';
import PropTypes from 'prop-types';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Button, Col} from 'react-bootstrap';
import clsx from 'clsx';
import styles from './index.module.scss';

const ItemsList = ({cartItems}) => {
  return (
    <AppCard className='position-relative mb-3'>
      <AppRowContainer>
        <Col xs={12} sm={6}>
          <AppList
            delay={200}
            data={cartItems}
            renderItem={(data) => (
              <div
                key={data.id}
                className={clsx(
                  styles.confirmationListItem,
                  'd-flex item-hover',
                )}>
                <img className={styles.Avatar} src={data.image} />
                <div className={styles.confirmationListItemContent}>
                  <h3>
                    {data.title} ({data.count})
                  </h3>
                  <p>Brand: {data.brand}</p>
                </div>
              </div>
            )}
          />
        </Col>

        <Col xs={12} sm={6}>
          <div className='d-flex flex-column p-3'>
            <h3
              className={clsx(
                styles.confirmationListItemActionHeading,
                'mb-3',
              )}>
              Total ${getTotalPrice(cartItems)}
            </h3>
            <div className='d-flex align-items-center mb-3'>
              <Button
                variant='danger'
                className={clsx(styles.confirmationListItemActionBtn)}>
                Cancel
              </Button>
              <Button
                className={styles.confirmationListItemActionBtn}
                type='primary'>
                Need Help
              </Button>
            </div>
            <div className='d-flex align-items-center mt-3 mb-3'>
              <img
                className={styles.confirmationListItemActionImg}
                src={'/assets/images/ecommerce/cart-icon.png'}
                alt='cart'
              />
              Delivery expected by 27 Jul
            </div>
          </div>
        </Col>
      </AppRowContainer>
    </AppCard>
  );
};

export default ItemsList;

ItemsList.propTypes = {
  cartItems: PropTypes.array,
};
