import React from 'react';
import AppCard from '@crema/core/AppCard';
import styles from './index.module.scss';
import PropTypes from 'prop-types';

const SalesState = ({data}) => {
  const {icon, value, type, bgColor} = data;
  return (
    <AppCard
      heightFull
      className={styles.stateCard}
      style={{backgroundColor: bgColor}}>
      <div className='d-flex align-items-center'>
        <div className={styles.stateThumb}>
          <img src={icon} alt={icon.name} style={{backgroundColor: `${bgColor}`}} />
        </div>
        <div className={styles.stateContent}>
          <h3 className='text-truncate' level={3}>
            {value}
          </h3>
          <p className='text-truncate'>{type}</p>
        </div>
      </div>
    </AppCard>
  );
};

export default SalesState;

SalesState.propTypes = {
  data: PropTypes.object,
};
