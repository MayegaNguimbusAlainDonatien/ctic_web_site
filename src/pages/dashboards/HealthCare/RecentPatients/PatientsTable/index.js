import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import AppMenu from '@crema/core/AppMenu';
import {Image} from 'react-bootstrap';
import AppTable from '@crema/core/AppTableContainer/AppTable';
import clsx from "clsx";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (name, data) => (
      <span className={clsx(styles.recentPatientsUserInfo, 'd-flex align-items-center')}>
        <Image roundedCircle src={data.profile_pic} />
        <span className={clsx(styles.recentPatientsUserInfoContent, 'flex-grow-1')}>
          <h3>{name}</h3>
        </span>
      </span>
    ),
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Weight',
    dataIndex: 'weight',
    key: 'weight',
  },
  {
    title: 'Assigned Dr',
    dataIndex: 'assignedDr',
    key: 'assignedDr',
  },
  {
    title: 'Admit Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status, data) => (
      <span
        className={clsx(styles.recentPatientsBadge, 'd-inline-block')}
        style={{
          color: data.color,
          backgroundColor: data.color + '44',
        }}>
        {status}
      </span>
    ),
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: () => <AppMenu />,
  },
];

const PatientsTable = ({recentPatients}) => {
  console.log(recentPatients,"dara")
  return <AppTable hoverColor data={recentPatients} columns={columns} />;
};

export default PatientsTable;

PatientsTable.defaultProps = {
  recentPatients: [],
};

PatientsTable.propTypes = {
  recentPatients: PropTypes.array,
};
