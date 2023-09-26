import React from 'react';
import RevenueGraph from './RevenueGraph';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import styles from './index.module.scss';
import IntlMessages from '@crema/utility/IntlMessages';
import clsx from 'clsx';

const TotalRevenue = ({revenueData}) => {
  return (
    <>
      <h2 className={clsx(styles.cardOuterTitle, 'mb-3 text-uppercase')}>
        <IntlMessages id='dashboard.totalRevenue' />
      </h2>

      <AppCard
        className={clsx(styles.totalRevenueCard, 'overflow-hidden')}
        cardBodyClass='d-flex flex-column h-100'>
        <div className='d-flex flex-column flex-sm-row flex-grow-1 '>
          <div
            className={clsx(
              styles.revenueContent,
              'me-2 d-flex flex-column p-3',
            )}>
            <div className='mb-3'>
              <h3>{revenueData.ytdRevenue}</h3>
              <p>
                <IntlMessages id='dashboard.ytdRevenue' />
              </p>
            </div>
            <div className='d-flex mt-auto mx-n2 mx-xxl-n3 mb-1'>
              <div className='px-2 px-xxl-3'>
                <h3 style={{color: '#0A8FDC'}}>{revenueData.clients}</h3>
                <p>
                  <IntlMessages id='dashboard.clients' />
                </p>
              </div>

              <div className='px-2 px-xxl-3'>
                <h3 style={{color: '#49BD65'}}>{revenueData.countries}</h3>
                <p>
                  <IntlMessages id='dashboard.countries' />
                </p>
              </div>
            </div>
          </div>
          <div className='ms-auto mb-n3 w-100 mb-xxl-n2'>
            <RevenueGraph data={revenueData.revenueGraphData} />
          </div>
        </div>
      </AppCard>
    </>
  );
};

export default TotalRevenue;

TotalRevenue.defaultProps = {
  revenueData: {
    ytdRevenue: '',
    clients: 0,
    countries: '',
    revenueGraphData: [],
  },
};

TotalRevenue.propTypes = {
  revenueData: PropTypes.object,
};
