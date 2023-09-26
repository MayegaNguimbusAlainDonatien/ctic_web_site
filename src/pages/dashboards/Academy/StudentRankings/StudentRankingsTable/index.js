import React from 'react';
import PropTypes from 'prop-types';
import AppTable from '@crema/core/AppTableContainer/AppTable';
import styles from '../index.module.scss';
import clsx from 'clsx';
import {Image} from 'react-bootstrap';

const StudentRankingsTable = ({studentRankings}) => {
  const columns = [
    {
      title: 'Student Name',
      dataIndex: 'name',
      key: 'name',
      render: (name, item) => (
        <div className={clsx(styles.studentName, 'd-flex align-items-center')}>
          <Image
            roundedCircle
            className={styles.studentAvatar}
            src={item.profile_pic}
          />
          <span className={clsx(styles.studentTitle, 'flex-grow-1')}>
            <h3>{name}</h3>
          </span>
        </div>
      ),
    },
    {
      title: 'Course ID',
      dataIndex: 'courseId',
      key: 'courseId',
    },
    {
      title: 'Course Name',
      dataIndex: 'courseName',
      key: 'courseName',
    },
    {
      title: 'Total Grade',
      dataIndex: 'totalGrade',
      key: 'totalGrade',
      render: (totalGrade) => <span>{totalGrade} point</span>,
    },
    {
      title: 'Ranking',
      dataIndex: 'ranking',
      key: 'ranking',
      render: (ranking) => <span>Ranking {ranking}</span>,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (category) => (
        <span className={clsx(styles.badge, 'text-center d-block')}>
          {category}
        </span>
      ),
    },
  ];

  return <AppTable data={studentRankings} columns={columns} />;
};

export default StudentRankingsTable;

StudentRankingsTable.defaultProps = {
  studentRankings: [],
};

StudentRankingsTable.propTypes = {
  studentRankings: PropTypes.array,
};
