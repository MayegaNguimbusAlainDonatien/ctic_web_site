import React from 'react';
import AppCard from '@crema/core/AppCard';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import clsx from "clsx";

const HospitalStatics = ({data}) => {
  const {icon, value, name} = data;

  return (
    <AppCard>
      <div className={clsx(styles.hospitalStatics, 'd-flex align-items-center')}>
        <div className={styles.avatarWrapper}>
          <img src={icon} alt='icon' />
        </div>
        <div className={styles.hospitalStaticsContent}>
          <h5 className={clsx(styles.title, 'text-truncate')}>{value}</h5>
          <p className='text-truncate'>{name}</p>
        </div>
      </div>
    </AppCard>
  );
};

export default HospitalStatics;

HospitalStatics.defaultProps = {
  data: {},
};

HospitalStatics.propTypes = {
  data: PropTypes.object,
};
