import React from 'react';
import PropTypes from 'prop-types';
import AppTable from '@crema/core/AppTableContainer/AppTable';
import clsx from 'clsx';
import styles from './index.module.scss';

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
      <div className={clsx(styles.name, 'd-flex align-items-center')}>
        <img
          width='40px'
          height='40px'
          className={clsx(styles.tickImg, 'rounded-circle')}
          src={data.image}
        />
        <h3>{name}</h3>
      </div>
    ),
  },
  {
    title: 'Ticket ID',
    dataIndex: 'ticketId',
    key: 'ticketId',
  },
  {
    title: 'Create Date',
    dataIndex: 'created',
    key: 'created',
  },
  {
    title: 'Contact',
    dataIndex: 'contact',
    key: 'contact',
  },
];

// const getData = (data) => {
//   if (isBreakPointDown('xl')) {
//     return data.slice(0, 9);
//   } else {
//     return data.slice(0, 7);
//   }
// };

const TicketSupportTable = (props) => {
  const ticketSupportData = props.ticketSupportData;
  return <AppTable data={ticketSupportData} columns={columns} />;
};

export default TicketSupportTable;

TicketSupportTable.defaultProps = {
  ticketSupportData: [],
};

TicketSupportTable.propTypes = {
  ticketSupportData: PropTypes.array,
};
