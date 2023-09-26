import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import clsx from 'clsx';

const DayTemperature = (props) => {
  const {day} = props;

  return (
    <div className={clsx(styles.dayTempItem, 'text-center ps-3 pe-3')}>
      <p>{day.day}</p>
      <span>
        <img src={day.image} alt='weather' />
      </span>
    </div>
  );
};

export default DayTemperature;

DayTemperature.propTypes = {
  day: PropTypes.object.isRequired,
};
