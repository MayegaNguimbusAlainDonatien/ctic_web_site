import React from 'react';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import AppCircularProgress from '@crema/core/AppCircularProgress';
import clsx from 'clsx';
import styles from './index.module.scss';

const Application = () => {
  const {messages} = useIntl();
  return (
    <AppCard title={messages['eCommerce.application']} heightFull>
      <div className='d-flex h-100 flex-column align-items-center justify-content-center'>
        <div className='d-flex flex-column justify-content-center flex-grow-1'>
          <AppCircularProgress maxWidth={200} minWidth={200}
                               strokeColor='#49BD65'
            percent={70}
            strokeWidth={5}>
            <img
              alt='icon'
              style={{
                borderRadius: '50%',
                boxShadow: '0px 10px 20px rgba(160, 165, 185, 0.2)',
              }}
              src={'/assets/images/dashboard/application_icon.png'}
            />
          </AppCircularProgress>
        </div>
        <div className='d-flex justify-content-center'>
          <div
            className={clsx(
              styles.chartActionItem,
              'd-flex align-items-center',
            )}>
            <span className={styles.dot} style={{backgroundColor: '#49BD65'}} />
            <p>Android</p>
          </div>
          <div
            className={clsx(
              styles.chartActionItem,
              'd-flex align-items-center',
            )}>
            <span className={styles.dot} style={{backgroundColor: '#d6d6d6'}} />
            <p>IOS</p>
          </div>
        </div>
      </div>
    </AppCard>
  );
};

export default Application;
