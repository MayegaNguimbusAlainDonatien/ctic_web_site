import React from 'react';
import AppCard from '@crema/core/AppCard';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import clsx from 'clsx';

const DrCard = ({data}) => {
  const {bgColor, icon, time, category, name} = data;

  return (
    <AppCard
      heightFull
      style={{backgroundColor: bgColor}}
      className={styles.drCard}>
      <div className='d-flex'>
        <div className={styles.drThumb}>
          <img src={icon} alt='icon' />
        </div>
        <div
          className={clsx(styles.drCardContent, 'd-flex align-items-center')}>
          <div
            className={clsx(
              styles.drCardContentMain,
              'flex-grow-1 overflow-hidden me-2',
            )}>
            <h5 className='text-truncate'>{category}</h5>
            <p className='text-truncate'>{name}</p>
          </div>
          <span
            className={clsx(
              styles.drTime,
              'd-flex align-items-center justify-content-center ms-auto',
            )}>
            {time}
          </span>
        </div>
      </div>
    </AppCard>
  );
};

export default DrCard;

DrCard.propTypes = {
  data: PropTypes.object,
};
