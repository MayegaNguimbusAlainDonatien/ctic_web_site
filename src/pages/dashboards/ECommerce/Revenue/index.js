import React from 'react';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import AppCircularProgress from '@crema/core/AppCircularProgress';
import clsx from 'clsx';
import styles from './index.module.scss';

const Revenue = () => {
  const {messages} = useIntl();

  return (
    <AppCard
      title={messages['eCommerce.revenue']}
      cardBodyClass='d-flex flex-column'
      heightFull>
      <div className='d-flex flex-column justify-content-center flex-grow-1'>
        <AppCircularProgress minWidth={200} maxWidth={200}
          strokeColor='#0A8FDC'
          percent={70}
          strokeWidth={5}>
          <div
            className={clsx(
              styles.revCirProgressContent,
              'd-flex flex-column justify-content-center align-items-center text-align-center',
            )}>
            <div>
              <span className={styles.dollarIcon}>
                <h3>$600</h3>
              </span>
            </div>
            <p>Sales</p>
          </div>
        </AppCircularProgress>
      </div>
      <div
        className={clsx(
          styles.revCirProgressContentBottom,
          'd-flex justify-content-around mt-auto',
        )}>
        <div>
          <p>$ 2,000</p>
          <span>Target</span>
        </div>
        <div>
          <p>$ 1,500</p>
          <span>Current</span>
        </div>
      </div>
    </AppCard>
  );
};

export default Revenue;
