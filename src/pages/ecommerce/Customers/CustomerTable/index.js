import React from 'react';
import PropTypes from 'prop-types';
import {AiFillStar} from 'react-icons/ai';
import OrderActions from './OrderActions';
import AppTable from '@crema/core/AppTableContainer/AppTable';
import styles from '../index.module.scss';

const CustomerTable = ({customers}) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Last Item',
      dataIndex: 'lastItem',
      key: 'lastItem',
    },
    {
      title: 'Last Order',
      dataIndex: 'lastOrder',
      key: 'lastOrder',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      render: (rating) => (
        <span className={styles.badge}>
          {rating} <AiFillStar style={{fontSize: 12, marginLeft: 2}} />
        </span>
      ),
    },
    {
      title: 'Wallet Balance',
      dataIndex: 'balance',
      key: 'balance',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Join Date',
      dataIndex: 'joinDate',
      key: 'joinDate',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      fixed: 'right',
      render: () => <OrderActions />,
    },
  ];
  return <AppTable data={customers} columns={columns} />;
};

export default CustomerTable;

CustomerTable.defaultProps = {
  customers: [],
};

CustomerTable.propTypes = {
  customers: PropTypes.array,
};
