import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import AppCard from '@crema/core/AppCard';
import styles from './index.module.scss';
import clsx from 'clsx';

const BirthdayCard = () => {
  return (
    <AppCard heightFull className='d-flex flex-column overflow-hidden p-0'>
      <div className={clsx(styles.appCardBody, 'd-flex flex-column')}>
        <div className={clsx(styles.birthdayHeader, 'text-center')}>
          <h3>Sunday, 07 July 1991</h3>
        </div>
        <div
          className={clsx(
            styles.birthdayContent,
            'd-flex flex-column align-items-center justify-content-center text-center',
          )}>
          <div className='mb-3'>
            <img src='/assets/images/cakeicon.png' alt='cake' />
          </div>
          <p>
            <IntlMessages id='dashboard.antonBirthday' />
          </p>
        </div>
      </div>
    </AppCard>
  );
};

export default BirthdayCard;
