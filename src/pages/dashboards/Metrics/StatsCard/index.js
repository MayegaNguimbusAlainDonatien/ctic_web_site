import React from 'react';
import AppCard from '@crema/core/AppCard';
import {Image} from 'react-bootstrap';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './index.module.scss';

const StatsCard = ({icon, bgColor, value, text}) => {
  return (
    <AppCard>
      <div className='d-flex flex-column align-items-center'>
        <Image
          className={clsx(styles.statimg, 'mb-3')}
          src={icon}
          style={{backgroundColor: bgColor}}
          roundedCircle
        />
        <p className='fs-7 mb-2 text-muted'>{text}</p>
        <h2 className='fw-bold'>{value}</h2>

      </div>
    </AppCard>
  );
};
export default StatsCard;

StatsCard.propTypes = {
  text: PropTypes.any.isRequired,
  bgColor: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string,
};
