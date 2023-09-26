import React from 'react';
import MapChart from './MapChart';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import styles from './index.module.scss';
import clsx from 'clsx';

const CountryMap = () => {
  const {messages} = useIntl();
  return (
    <AppCard
      heightFull
      title={messages['dashboard.usa']}
      action={
        <a className='text-danger text-decoration-none' href='#/'>
          {messages['common.next']}
        </a>
      }>
      <div
        className={clsx(
          styles.widCountryMapChart,
          'd-flex flex-column align-items-center justify-content-center',
        )}>
        <MapChart />
      </div>
    </AppCard>
  );
};

export default CountryMap;
