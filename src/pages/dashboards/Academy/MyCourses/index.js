import React, {useState} from 'react';
import AppCard from '@crema/core/AppCard';
import CourseCell from './CourseCell';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {ListGroup} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const MyCourses = ({courses}) => {
  const [selectedCategory, setSelectedCategory] = useState(
    courses.categories[0].slug,
  );

  const handleChangeCategory = (category) => {
    setSelectedCategory(category);
  };

  const {messages} = useIntl();

  return (
    <AppCard
      cardBodyClass='px-0'
      heightFull
      title={messages['academy.myCourses']}>
      <div
        className={clsx(
          styles.myCourseHeader,
          'd-flex align-items-center flex-wrap',
        )}>
        {courses.categories.map((item, index) => (
          <div
            className={styles.myCategoriesItem}
            key={index}
            onClick={() => handleChangeCategory(item.slug)}>
            <span
              className={clsx(
                styles.myCategoriesBadge,
                item.slug === selectedCategory ? styles.active : '',
              )}
              key={index}>
              {item.title}
            </span>
          </div>
        ))}
      </div>
      <ListGroup className='border-0'>
        {courses.courses.map((data, index) => (
          <CourseCell key={index} course={data} />
        ))}
      </ListGroup>
    </AppCard>
  );
};

export default MyCourses;

MyCourses.propTypes = {
  courses: PropTypes.object,
};
