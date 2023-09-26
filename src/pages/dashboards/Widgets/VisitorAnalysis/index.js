import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import AppCircularProgress from '@crema/core/AppCircularProgress';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import styles from './index.module.scss';
import clsx from 'clsx';

const VisitorAnalysis = () => {
  const {messages} = useIntl();
  return (
    <AppCard
      className='position-relative'
      title={messages['dashboard.visitorAnalysis']}
      heightFull
      footer={
        <div
          key={1}
          className={clsx(
            styles.visitorAnalysisAction,
            'd-flex align-items-center',
          )}>
          <span className={clsx(styles.dot, 'dot')} />
          <div className={styles.visitorAnalysisActionContent}>
            <p className='m-0'>
              <IntlMessages id='dashboard.visitorAnalysisContent' />
            </p>
          </div>
        </div>
      }>
      <div className='h-100 position-relative d-flex flex-column align-items-center justify-content-center'>
        <AppCircularProgress
          strokeColor='#F04F47'
          trailColor='rgb(214, 214, 214)'
          percent={59}
          strokeWidth={5}
          width={200}>
          <span className={styles.percent}>59%</span>
        </AppCircularProgress>
      </div>
    </AppCard>
  );
};

export default VisitorAnalysis;
