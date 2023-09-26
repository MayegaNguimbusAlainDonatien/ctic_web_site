import React from 'react';
import AppCard from '@crema/core/AppCard';
import PropTypes from 'prop-types';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col, Button} from 'react-bootstrap';
import clsx from 'clsx';
import styles from './index.module.scss';

const AddressInfo = ({address}) => {
  return (
    <AppCard className={styles.confirmationCard}>
      <AppRowContainer>
        <Col xs={12} lg={6}>
          <div className={styles.confirmationAddressItem}>
            <h3>Delivery Address</h3>
            <h4>{address.name}</h4>
            <p>
              {address.addressLine}, {address.city}, {address.pin}
            </p>
          </div>

          <div className={styles.confirmationAddressItem}>
            <h4>Phone number</h4>
            <p>{address.mobile}</p>
          </div>
        </Col>
        <Col xs={12} lg={6}>
          <div className={styles.confirmationAddressItem}>
            <h3>Your Rewards</h3>

            <div className='d-flex align-items-center flex-wrap pt-3 pb-3'>
              <div
                className={clsx(
                  styles.confirmationAddressRewardRow,
                  'd-flex align-items-center pt-0',
                )}>
                <img src={'/assets/images/ecommerce/sms-icon.png'} alt='sms' />
                <p className={styles.confirmationAddressRewardTitle}>
                  SMS updates at every step
                </p>
              </div>
              <Button
                type='primary'
                className={styles.confirmationAddressRewardBtn}>
                Subscribe
              </Button>
            </div>

            <div className='d-flex align-items-center flex-wrap pb-3'>
              <div
                className={clsx(
                  styles.confirmationAddressRewardRow,
                  'd-flex align-items-center pt-0',
                )}>
                <img
                  src={'/assets/images/ecommerce/add-person.png'}
                  alt='sms'
                />
                <p className={styles.confirmationAddressRewardTitle}>
                  Order shared with 1 Person
                </p>
              </div>
              <Button
                type='primary'
                className={styles.confirmationAddressRewardBtn}>
                Manage
              </Button>
            </div>
          </div>
        </Col>
      </AppRowContainer>
    </AppCard>
  );
};

export default AddressInfo;

AddressInfo.propTypes = {
  address: PropTypes.object,
};
