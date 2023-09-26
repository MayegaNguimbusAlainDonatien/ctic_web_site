import React from 'react';
import PropTypes from 'prop-types';
import AppMenu from '@crema/core/AppMenu';
import {Button, ListGroup} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const CourseCell = ({course}) => {
  return (
    <ListGroup.Item
      key={course.id}
      className={clsx(
        styles.courseCell,
        'd-flex flex-column flex-sm-row align-items-start align-items-sm-center',
      )}>
      <div
        className={clsx(
          styles.courseCellContent,
          'd-flex align-items-center w-100',
        )}>
        <div className={styles.imgWrapper}>
          <img alt='' src={course.thumb} className={styles.courseCellThumb} />
        </div>
        <div className={styles.courseCellInfo}>
          <h3 className='text-truncate'>{course.title}</h3>
          <p className='text-truncate'>{course.duration}</p>
        </div>
      </div>

      <div
        className={clsx(
          styles.courseCellAction,
          'd-flex align-items-center w-100 justify-content-sm-end',
        )}>
        {course.isCompleted ? (
          <div className='ant-row ant-row-middle'>
            <span className={styles.courseCellRate}>Rate</span>
            <Button
              className={clsx(styles.courseCellBtn, 'h-auto text-uppercase')}
              variant='primary'>
              Certificate
            </Button>
          </div>
        ) : (
          <div className='ant-row ant-row-middle'>
            <img
              src={'/assets/images/dashboard/academy/rating.png'}
              alt='rating'
            />
            <span className={clsx(styles.courseCellRating, 'me-2 ms-2')}>
              {course.rating}
            </span>
            <Button
              className={clsx(styles.courseCellBtn, 'h-auto text-uppercase')}
              variant='outline-primary'>
              View Course
            </Button>
          </div>
        )}
        <div className={clsx(styles.courseCellMenu)}>
          <AppMenu />
        </div>
      </div>
    </ListGroup.Item>
  );
};

export default CourseCell;

CourseCell.propTypes = {
  course: PropTypes.object,
};
