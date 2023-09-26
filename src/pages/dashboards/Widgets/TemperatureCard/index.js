import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import DayTemperature from './DayTemperature';
import AppCard from '@crema/core/AppCard';
import {AiOutlineSearch} from 'react-icons/ai';
import styles from './index.module.scss';
import clsx from 'clsx';

const TemperatureCard = (props) => {
  const {temperatures} = props;

  return (
    <AppCard
      heightFull
      className='no-card-space d-flex flex-column overflow-hidden'>
      <div className={clsx(styles.tempHeaderColor, 'd-flex flex-column')}>
        <div className={clsx(styles.tempHeader, 'd-flex align-items-center')}>
          <h3>
            <IntlMessages id='dashboard.newYork' />
          </h3>
          <div className={styles.tempHeaderAction}>
            <AiOutlineSearch className='pointer' />
          </div>
        </div>

        <div
          className={clsx(
            styles.tempHeaderContent,
            'pt-3 pb-3 d-flex flex-column align-items-center justify-content-center text-center',
          )}>
          <h1>
            -32<sup>0</sup>
          </h1>
          <p>
            <img src={'/assets/images/weather/weather1.png'} alt='weather' />
            <IntlMessages id='dashboard.heavySnow' />
          </p>
        </div>
      </div>

      <div
        className={clsx(styles.tempContent, 'd-flex justify-content-between')}>
        {temperatures.map((day) => {
          return <DayTemperature key={day.id} day={day} />;
        })}
      </div>
    </AppCard>
  );
};

export default TemperatureCard;

TemperatureCard.defaultProps = {
  temperatures: [],
};

TemperatureCard.propTypes = {
  temperatures: PropTypes.array,
};
