import React from 'react';
import PropTypes from 'prop-types';
import {AiOutlineEye} from 'react-icons/ai';
import styles from './index.module.scss';
import clsx from 'clsx';

const CourseItem = ({data}) => {
  return (
    <div className={styles.relatedCourseItem}>
      <div className='mb-2'>
        <img src={data.image} alt={data.title} width='100%' />
      </div>
      <h4>{data.title}</h4>
      <div
        className={clsx(
          styles.relatedCourseAction,
          'd-flex align-items-center flex-wrap',
        )}>
        <p>{data.author}</p>
        <div className={clsx(styles.courseView, 'd-flex align-items-center')}>
          <AiOutlineEye />
          <span>{data.views} views</span>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;

CourseItem.propTypes = {
  data: PropTypes.object,
};
