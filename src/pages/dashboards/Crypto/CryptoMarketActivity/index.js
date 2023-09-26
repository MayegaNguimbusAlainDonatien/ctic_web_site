import AppCard from '@crema/core/AppCard';
import React from 'react';
import {useIntl} from 'react-intl';
import MarketGraph from './MarketGraph';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './index.module.scss';
const CryptoMarketActivity = ({marketGraphData}) => {
  const {messages} = useIntl();
  console.log(marketGraphData);
  return (
    <AppCard heightFull
      title={messages['dashboard.cryptoMarketActivity']}
      actionClass='text-danger'
      action={messages['common.viewAll']}
      footer={
        <div className='d-flex flex-wrap flex-row justify-content-between align-items-end'>
          <div className='d-flex flex-row align-items-center'>
            <span
              className={styles.dot}
              style={{backgroundColor: 'rgb(56, 158, 13)'}}
            />
            <span className={clsx('fs-7', styles.dotText)}>
              {messages['common.low']}
            </span>
            <span
              className={styles.dot}
              style={{backgroundColor: 'rgb(47, 84, 235)'}}
            />
            <span className={clsx('fs-7', styles.dotText)}>
              {messages['common.medium']}
            </span>
            <span
              className={styles.dot}
              style={{backgroundColor: 'rgb(245, 34, 45)'}}
            />
            <span className={clsx('fs-7', styles.dotText)}>
              {messages['common.high']}
            </span>
          </div>
          <div className='d-flex flex-row'>
            <div className={clsx('d-flex flex-column',styles.dotText)}>
              <h3 className='mb-0'>1356</h3>
              <span className='text-muted'>Open Deals</span>
            </div>
            <div className='d-flex flex-column '>
              <h3 className='mb-0'>$5.9B</h3>
              <span className='text-muted'>Deals Volume</span>
            </div>
          </div>
        </div>
      }>
      <MarketGraph marketGraphData={marketGraphData} />
    </AppCard>
  );
};

export default CryptoMarketActivity;

CryptoMarketActivity.propTypes = {
  marketGraphData: PropTypes.array,
};
