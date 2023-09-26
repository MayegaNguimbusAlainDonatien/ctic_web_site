import React from 'react';
import PropTypes from 'prop-types';
import AppTable from '@crema/core/AppTableContainer/AppTable';
import AppMenu from '@crema/core/AppMenu';
import styles from '../index.module.scss';

const OrderTable = ({orderData}) => {
  const getPaymentStatusColor = (status) => {
    switch (status) {
      case 'Pending': {
        return '#F84E4E';
      }
      case 'Delivered': {
        return '#43C888';
      }
      default: {
        return '#E2A72E';
      }
    }
  };

  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'id',
      key: 'id',
      render: (id) => (
        <span className='text-decoration-underline text-primary'>{id}</span>
      ),
    },
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Customer',
      dataIndex: 'customer',
      key: 'customer',
    },
    {
      title: 'Delivery Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <span
          className={styles.badgeRoot}
          style={{
            color: getPaymentStatusColor(status),
            backgroundColor: getPaymentStatusColor(status) + '44',
          }}>
          {status}
        </span>
      ),
    },
    {
      title: 'Actions',
      dataIndex: 'id',
      key: 'id',
      render: () => <AppMenu />,
    },
  ];
  return (
    <AppTable
      // className='orderTable'
      data={orderData}
      columns={columns}
    />
  );
};

export default OrderTable;

OrderTable.defaultProps = {
  orderData: [],
};

OrderTable.propTypes = {
  orderData: PropTypes.array,
};
