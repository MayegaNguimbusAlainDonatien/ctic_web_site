import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import AppTable from '@crema/core/AppTableContainer/AppTable';
import clsx from "clsx";

const columns = [
  {
    title: 'No.',
    dataIndex: `id`,
    key: 'id',
    render: (id) => <span>{id}.</span>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (name, data) => (
      <div className='d-flex align-items-center'>
        <img
          className={clsx(styles.dealsImg, 'rounded-circle')}
          src={data.logo}
        />
        <div className={styles.name}>
          <h3>{name}</h3>
        </div>
      </div>
    ),
  },
  {
    title: 'Progress',
    dataIndex: 'progress',
    key: 'progress',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Created',
    dataIndex: 'created',
    key: 'created',
  },
];
const DealsTable = (props) => {
  const {dealsTableData} = props;

  return <AppTable data={dealsTableData} columns={columns} />;
};

export default DealsTable;

DealsTable.defaultProps = {
  dealsTableData: [],
};

DealsTable.propTypes = {
  dealsTableData: PropTypes.array,
};
