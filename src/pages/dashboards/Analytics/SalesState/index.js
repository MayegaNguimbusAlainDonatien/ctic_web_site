import React from 'react';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';

import AppSelect from '@crema/core/AppSelect';
import {useIntl} from 'react-intl';
import AppRowContainer from '@crema/core/AppRowContainer';
import styles from './index.module.scss';
import MixBarChart from './MixBarChart';
import AppList from '@crema/core/AppList';
import {Col, Image} from 'react-bootstrap';
import clsx from 'clsx';

const SalesState = ({salesState, saleChartData}) => {
  const handleSelectionType = (data) => {
    console.log('data: ', data);
  };
  const {messages} = useIntl();
  return (
    <AppCard
      className={styles.salesStateCard}
      title={messages['dashboard.analytics.salesState']}
      heightFull
      cardBodyClass='d-flex flex-column'
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
      <p className={styles.salesStateSubTitle}>
        1343 {messages['dashboard.analytics.salesThisWeek']}
      </p>

      <div className='mt-auto'>
        <AppRowContainer>
          <Col xs={12} sm={7} className='mb-0'>
            {/*<div className='w-100 h-100 d-flex flex-column align-items-center align-items-sm-start justify-content-center'>*/}
            <MixBarChart data={saleChartData} />
            {/*</div>*/}
          </Col>

          <Col xs={12} sm={5} className='mb-0'>
            <div
              className={clsx(
                styles.salesStateContent,
                'w-100 ms-2 d-flex flex-column align-items-start',
              )}>
              <AppList
                data={salesState}
                renderItem={(item) => (
                  <div
                    className={clsx(
                      styles.salesStateItem,
                      'd-flex align-items-center overflow-hidden',
                    )}
                    key={'salesState-' + item.id}>
                    <Image
                      className={styles.imgAvatar}
                      src={item.icon}
                      alt='icon'
                      roundedCircle
                    />

                    <div
                      className={clsx(
                        styles.salesStateItemContent,
                        'overflow-hidden position-relative',
                      )}>
                      <h3>${item.amount}</h3>
                      <p className='mb-0'>{item.type}</p>
                    </div>
                  </div>
                )}
              />
            </div>
          </Col>
        </AppRowContainer>
      </div>
    </AppCard>
  );
};
export default SalesState;

SalesState.defaultProps = {
  salesState: [],
  saleChartData: [],
};

SalesState.propTypes = {
  salesState: PropTypes.array,
  saleChartData: PropTypes.array,
};
