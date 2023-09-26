import React from 'react';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import AppSelect from '@crema/core/AppSelect';
import AppCircularProgress from '@crema/core/AppCircularProgress';
import SaleStaticChart from './SaleStaticChart';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import clsx from 'clsx';
import styles from './index.module.scss';

const SaleStatics = () => {
  const {messages} = useIntl();
  const handleSelectionType = (data) => {
    console.log('data: ', data);
  };

  return (
    <AppCard heightFull
      title={messages['eCommerce.saleStatics']}
      action={
        <AppSelect
          selectBoxClass={styles.appSelectBox}
          menus={[
            messages['dashboard.thisWeek'],
            messages['dashboard.lastWeeks'],
            messages['dashboard.lastMonth'],
          ]}
          defaultValue={messages['dashboard.thisWeek']}
          onChange={handleSelectionType}
        />
      }>
      <AppRowContainer>
        <Col xs={12} lg={9}>
          <SaleStaticChart />
        </Col>
        <Col xs={12} lg={3}>
          <div className='d-flex h-100 flex-column align-items-center justify-content-center'>
            <div className={clsx(styles.circularProgressView, 'mb-5 mb-xxl-5')}>
              <AppCircularProgress
                strokeColor='#0A8FDC'
                trailColor='#F44D50'
                percent={70}
                strokeWidth={5}>
                <img
                  alt='icon'
                  style={{
                    borderRadius: '50%',
                    boxShadow: '0px 10px 20px rgba(160, 165, 185, 0.2)',
                  }}
                  src={'/assets/images/dashboard/application_icon.png'}
                />
              </AppCircularProgress>
            </div>
            <div className='d-flex justify-content-center'>
              <div
                className={clsx(
                  styles.chartActionItem,
                  'd-flex align-items-center',
                )}>
                <span
                  className={styles.dot}
                  style={{backgroundColor: '#0A8FDC'}}
                />
                <p>Android</p>
              </div>
              <div
                className={clsx(
                  styles.chartActionItem,
                  'd-flex align-items-center',
                )}>
                <span
                  className={styles.dot}
                  style={{backgroundColor: '#F44D50'}}
                />
                <p>IOS</p>
              </div>
            </div>
          </div>
        </Col>
      </AppRowContainer>
    </AppCard>
  );
};

export default SaleStatics;
