import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import AppCard from '@crema/core/AppCard';
import styles from './index.module.scss';
import clsx from 'clsx';

const HollywoodMovie = () => {
  return (
    <AppCard
      className={clsx(
        styles.hollywoodCard,
        'background-image position-relative',
      )}
      heightFull>
      <div
        className={clsx(styles.hollywoodContent, 'd-flex flex-column h-100')}>
        <div
          className={clsx(
            styles.hollywoodContentAction,
            'd-flex align-items-center justify-content-center',
          )}>
          <span className={styles.hollywoodAvatar}>
            <img src={'/assets/images/playbutton.png'} alt='play' />
          </span>
        </div>
        <div className={styles.hollywoodFooter}>
          <h1>
            <IntlMessages id='dashboard.hollywoodMovie' />
          </h1>
        </div>
      </div>
    </AppCard>
  );
};

export default HollywoodMovie;
