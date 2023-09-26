import React from 'react';
import PropTypes from 'prop-types';
import styles from '../index.module.scss';
import AppTable from '@crema/core/AppTableContainer/AppTable';
import clsx from 'clsx';

const OrderTable = ({marketingCampaignData}) => {
  console.log('marketingCampaignData', marketingCampaignData);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (name, data) => (
        <div className='d-flex align-items-center'>
          <img roundedCircle
               className={styles.markImg}
            src={data.icon}
          />
          <div className={clsx(styles.marketingUserInfoContent, 'flex-grow-1')}>
            <h3>{name}</h3>
            <p>{data.description}</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Spend',
      dataIndex: 'spent',
      key: 'spent',
    },
    {
      title: 'Graph',
      dataIndex: 'graph',
      key: 'graph',
      render: (graph, data) => (
        <div className='d-flex align-items-center'>
          <span className={clsx(styles.graphItemSpan, 'me-2 d-inline-block')}>
            {data.growth ? (
              <img
                src={'/assets/images/dashboard/growth_icon.png'}
                alt='growth_icon'
              />
            ) : (
              <img
                src={'/assets/images/dashboard/decries_icon.png'}
                alt='decries_icon'
              />
            )}
          </span>
          <span
            className={styles.graphText}
            style={{color: `${data.growth ? '#0A8FDC' : '#F44D50'}`}}>
            {graph}
          </span>
          <span>{data.growth ? 'Up' : 'Down'}</span>
        </div>
      ),
    },
  ];

  return <AppTable data={marketingCampaignData} columns={columns} />;
};

export default OrderTable;

OrderTable.defaultProps = {
  marketingCampaignData: [],
};

OrderTable.propTypes = {
  marketingCampaignData: PropTypes.array,
};
