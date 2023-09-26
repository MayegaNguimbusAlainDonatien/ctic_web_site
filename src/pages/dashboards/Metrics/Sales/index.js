import React from 'react';
import AppCard from '@crema/core/AppCard';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';
import SalesGraph from './SalesGraph';
import styles from './index.module.scss';
import clsx from 'clsx';

const Sales = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard heightFull title={messages['dashboard.salesToday']} titleClass='mb-1'>
      <h2 className={clsx(styles.SalesValue, 'text-muted fw-bold mb-2')}>
        {data.salesToday}
      </h2>
      <p className={clsx(styles.SalesToday, 'text-danger')}>
        {data.salesYesterday} {messages['common.yesterday']}
      </p>
      <div className='mt-auto'>
        <SalesGraph data={data.salesGraphData} />
      </div>
    </AppCard>
  );
};

export default Sales;

Sales.propTypes = {
  data: PropTypes.object,
};
