import React from 'react';
import AppCard from '@crema/core/AppCard';
import {Button} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const PromoCard = () => {
  return (
    <AppCard heightFull className={styles.promoCard}>
      <div
        className={clsx(
          styles.promoContent,
          'd-flex align-items-center justify-content-center flex-column h-100',
        )}>
        <div className='mb-2'>
          <img src={'/assets/images/dashboard/academy/promo.png'} alt='promo' />
        </div>
        <h3>Do you want to get</h3>
        <p>Better results?</p>
        <div>
          <Button className={styles.btn}>
            <span>Upgrade</span>
          </Button>
        </div>
      </div>
    </AppCard>
  );
};

export default PromoCard;
