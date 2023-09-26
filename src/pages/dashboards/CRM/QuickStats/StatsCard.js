import React from 'react';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import styles from './index.module.scss';
import clsx from 'clsx';

const StatsCard = (props) => {
  const {icon, data, heading} = props;

  return (
    <AppCard className={styles.statsCardIcon}>
      <div className='d-flex align-items-center'>
        <div
          className={clsx(
            styles.statsAvatar,
            'd-flex align-items-center justify-content-center me-3',
          )}>
          <img src={icon} alt='icon' />
        </div>
        <div className={styles.statsContent}>
          <h3 className='mb-0'>{data.count}</h3>
          <p className='mb-0'>{heading}</p>
        </div>
      </div>
    </AppCard>
  );
};

export default StatsCard;

StatsCard.defaultProps = {
  data: {
    count: '',
  },
};

StatsCard.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  data: PropTypes.object,
  heading: PropTypes.any.isRequired,
};
