import React from 'react';
import {AiOutlineCalendar, AiOutlineTag} from 'react-icons/ai';
import styles from './index.module.scss';
import clsx from 'clsx';

const AvailableOffers = () => {
  return (
    <div className={styles.productDetailAvailableOffer}>
      <h3 className={styles.productDetailItemTitle}>Available offers</h3>

      <p className={clsx(styles.productDetailAvailableOfferItem, 'd-flex')}>
        <span className={styles.productDetailAvailableOfferIcon}>
          <AiOutlineTag style={{fontSize: 16}} />
        </span>
        <span className='d-flex align-items-center flex-wrap'>
          <span className={styles.productDetailAvailableOfferPara}>
            Special PriceGet extra ₹598 off (price inclusive of discount)
          </span>
          <span>T&C</span>
        </span>
      </p>

      <p className={clsx(styles.productDetailAvailableOfferItem, 'd-flex')}>
        <span className={styles.productDetailAvailableOfferIcon}>
          <AiOutlineCalendar style={{fontSize: 16}} />
        </span>
        <span className='d-flex align-items-center flex-wrap'>
          <span className={styles.productDetailAvailableOfferPara}>
            No cost EMI ₹1,368/month. Standard EMI also available
          </span>
          <span>View Plans</span>
        </span>
      </p>
    </div>
  );
};

export default AvailableOffers;
