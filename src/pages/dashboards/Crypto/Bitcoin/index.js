import React, {useCallback, useEffect, useState} from 'react';
import AppCard from '@crema/core/AppCard';
import AppSelect from '@crema/core/AppSelect';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {Tabs, Tab} from 'react-bootstrap';
import BitcoinGraph from './BitcoinGraph';
import styles from './index.module.scss';
import clsx from 'clsx';
const Bitcoin = ({graphData, data}) => {
  const onGetCoinData = useCallback(
    (coin) => {
      switch (coin) {
        case 'Bitcoin': {
          return graphData.bitcoin;
        }
        case 'Litecoin': {
          return graphData.litecoin;
        }
        case 'Ripple': {
          return graphData.ripple;
        }
        default:
          return graphData.bitcoin;
      }
    },
    [graphData],
  );

  const {messages} = useIntl();
  const [coinType, setCoinType] = useState('Bitcoin');
  const [coinData, setCoinData] = useState(onGetCoinData(coinType));
  const [graphType, setGraphType] = useState('yearly');

  console.log(data, graphData, '123');

  useEffect(() => {
    setCoinData(onGetCoinData(coinType));
  }, [coinType, onGetCoinData]);
  const handleSelectionType = (data) => {
    setCoinType(data.target.value);
  };

  console.log(coinType, data, graphType);
  return (
    <AppCard
      title={
        <div className='w-100 d-flex flex-row flex-wrap'>
          <div className='d-flex flex-row align-items-center'>
            <AppSelect
              selectBoxClass={clsx(styles.selectBox, 'me-2')}
              menus={[
                messages['dashboard.bitcoin'],
                messages['dashboard.litecoin'],
                messages['dashboard.ripple'],
              ]}
              defaultValue={messages['dashboard.bitcoin']}
              onChange={handleSelectionType}
            />
            <h3 className='mb-0 mx-2 text-primary fw-bold'>$7280.45</h3>
            <span className='fs-7 text-success fw-bold'> 0.8%</span>
          </div>

          <Tabs
            id='graphType'
            activeKey={graphType}
            onSelect={(k) => setGraphType(k)}
            className='fs-7 ms-auto'>
            <Tab
              tabClassName={clsx(styles.tab, 'border-0 pt-2 text-center')}
              eventKey='yearly'
              title={messages['common.yearly']}
            />
            <Tab
              tabClassName={clsx(styles.tab, 'border-0 pt-2 text-center')}
              eventKey='monthly'
              title={messages['common.monthly']}
            />
            <Tab
              tabClassName={clsx(styles.tab, 'border-0 pt-2 text-center')}
              eventKey='weekly'
              title={messages['common.weekly']}
            />
            <Tab
              tabClassName={clsx(styles.tab, 'border-0 pt-2 text-center')}
              eventKey='daily'
              title={messages['common.today']}
            />
          </Tabs>
        </div>
      }>
      <div>
        {graphType === 'yearly' && (
          <BitcoinGraph data={coinData.yearlyData} value={graphType} />
        )}
        {graphType === 'monthly' && (
          <BitcoinGraph data={coinData.monthlyData} value={graphType} />
        )}
        {graphType === 'weekly' && (
          <BitcoinGraph data={coinData.weeklyData} value={graphType} />
        )}
        {graphType === 'daily' && (
          <BitcoinGraph data={coinData.dailyData} value={graphType} />
        )}
      </div>
    </AppCard>
  );
};

export default Bitcoin;
Bitcoin.propTypes = {
  data: PropTypes.object,
  graphData: PropTypes.object,
};
