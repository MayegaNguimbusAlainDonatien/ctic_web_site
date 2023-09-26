import React from 'react';
import PropTypes from 'prop-types';
import AppMenu from '@crema/core/AppMenu';
import styles from './index.module.scss';
import AppTable from '@crema/core/AppTableContainer/AppTable';

const TransactionTable = ({transactionData}) => {
  const getPaymentTypeColor = (paymentType) => {
    switch (paymentType) {
      case 'COD': {
        return '#F84E4E';
      }
      case 'Prepaid': {
        return '#43C888';
      }
      default: {
        return '#E2A72E';
      }
    }
  };
  const getPaymentStatusColor = (status) => {
    switch (status) {
      case 'In Transit': {
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
      title: 'OrderID',
      dataIndex: 'id',
      render: (text) => (
        <span className='text-decoration-underline text-primary'>{text}</span>
      ),
    },
    {
      title: 'Customer',
      dataIndex: 'customer',
    },
    {
      title: 'Order Date',
      dataIndex: 'date',
    },
    {
      title: 'Payment',
      dataIndex: 'paymentType',
      render: (text, data) => (
        <span
          style={{
            color: getPaymentTypeColor(data.paymentType),
          }}>
          {text}
        </span>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (text) => (
        <span
          style={{
            color: getPaymentStatusColor(text),
            backgroundColor: getPaymentStatusColor(text) + '44',
          }}
          className={styles.badge}>
          {text}
        </span>
      ),
    },
    {
      title: 'Action',
      dataIndex: 'id',
      align: 'right',
      render: () => <AppMenu />,
    },
  ];

  return <AppTable columns={columns} data={transactionData} />;
};

export default TransactionTable;

TransactionTable.defaultProps = {
  transactionData: [],
};

TransactionTable.propTypes = {
  transactionData: PropTypes.array,
};
