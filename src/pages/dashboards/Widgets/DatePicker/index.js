import React from 'react';
import AppCard from '@crema/core/AppCard';
import styles from './index.module.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DateSelector = () => {
  return (
    <AppCard heightFull className='overflow-hidden'>
      <div className={styles.dateSelector}>
        <Calendar />
      </div>
    </AppCard>
  );
};

export default DateSelector;
