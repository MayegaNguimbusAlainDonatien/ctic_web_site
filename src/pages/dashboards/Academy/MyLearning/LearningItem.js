import React from 'react';
import AppCircularProgress from '@crema/core/AppCircularProgress';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import {ListGroup} from 'react-bootstrap';
import clsx from 'clsx';

const LearningItem = ({course}) => {
  return (
    <ListGroup.Item
      className={clsx(styles.learningItems, 'd-flex align-items-center')}
      key={course.id}>
      <div className='d-flex align-items-center me-2'>
        <div
          className={clsx(
            styles.learningThumb,
            'd-flex align-items-center justify-content-center',
          )}>
          <img alt='' src={course.icon} />
        </div>
        <div className={styles.learningContent}>
          <h3>{course.title}</h3>
          <p>{course.desc}</p>
        </div>
      </div>

      <div
        className={clsx(
          styles.learningAction,
          ' ms-auto d-flex align-items-center justify-content-end',
        )}>
        <AppCircularProgress
          strokeColor='#0A8FDC'
          trailColor='rgb(214, 214, 214)'
          percent={course.percentage}
          strokeWidth={8}
          width={50}>
          <span>{course.percentage}%</span>
        </AppCircularProgress>
      </div>
    </ListGroup.Item>
  );
};

export default LearningItem;

LearningItem.propTypes = {
  course: PropTypes.object,
};
