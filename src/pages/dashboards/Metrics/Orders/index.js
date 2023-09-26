import React, {useState} from 'react';
import OrdersGraph from './OrdersGraph';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import AppSelect from '@crema/core/AppSelect';
import {useIntl} from 'react-intl';
import styles from './index.module.scss';
import clsx from 'clsx';

const Orders = ({data}) => {
  const [graphData, setGraphData] = useState(data.graphData.dataTwo);
  const {messages} = useIntl();

  const handleWeekChange = (value) => {
    switch (value) {
      case messages['dashboard.thisWeek']:
        setGraphData(data.graphData.dataOne);
        break;
      case messages['dashboard.lastWeeks']:
        setGraphData(data.graphData.dataTwo);
        break;
      case messages['dashboard.lastMonth']:
        setGraphData(data.graphData.dataThree);
        break;
      default:
        setGraphData(data.graphData.dataOne);
    }
  };

  return (
    <AppCard
      heightFull
      className={styles.ordersCard}
      title={messages['common.orders']}
      titleClass='text-white'
      action={
        <AppSelect
          menus={[
            messages['dashboard.thisWeek'],
            messages['dashboard.lastWeeks'],
            messages['dashboard.lastMonth'],
          ]}
          defaultValue={messages['dashboard.thisWeek']}
          onChange={handleWeekChange}
        />
      }
      footer={
        <div
          className={clsx(
            styles.ordersFooter,
            'd-flex align-items-center justify-content-between',
          )}>
          <p className='fs-7 mb-0'>
            {messages['common.revenue']}
            <span className='ms-2 text-white'>{data.revenue}</span>
          </p>
          <p className='fs-7 mb-0'>
            {messages['common.orders']}
            <span className='ms-2 text-white'>{data.orders}</span>
          </p>
        </div>
      }>
      <OrdersGraph data={graphData} />
    </AppCard>
  );
};

export default Orders;

Orders.defaultProps = {
  data: {
    new: 0,
    returning: 0,
    graphData: {
      dataOne: [],
      dataTwo: [],
      dataThree: [],
    },
  },
};

Orders.propTypes = {
  data: PropTypes.object,
};
