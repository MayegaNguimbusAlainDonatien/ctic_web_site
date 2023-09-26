import React from 'react';
import AppCard from '@crema/core/AppCard';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './index.module.scss';
import clsx from 'clsx';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CourseCategories = ({course}) => {
  const {images, title, desc, lessons, xp} = course;

  return (
    <AppCard heightFull className='overflow-hidden' cardBodyClass='p-0'>
      <Slider
        className={clsx(styles.courseCategoriesSlider, 'position-relative')}
        {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.image} alt={image.title} />
          </div>
        ))}
      </Slider>
      <div className={styles.courseCategoriesContent}>
        <h5 className={styles.courseCategoriesTitle}>{title}</h5>
        <p>{desc}</p>
        <div className='d-flex align-items-center justify-content-between flex-wrap'>
          <span
            className={clsx(
              styles.courseCategoriesBadge,
              'd-flex align-items-center',
            )}
            style={{backgroundColor: '#E7F4FC', color: '#259BE0'}}>
            <img
              src={'/assets/images/dashboard/academy/lessons.png'}
              alt='lessons'
            />
            {lessons} Lessons
          </span>
          <span
            className={clsx(
              styles.courseCategoriesBadge,
              'd-flex align-items-center',
            )}
            style={{backgroundColor: '#FFF5EB', color: '#FCB267'}}>
            <img src={'/assets/images/dashboard/academy/xp.png'} alt='xp' />{' '}
            {xp} XP
          </span>
        </div>
      </div>
    </AppCard>
  );
};

export default CourseCategories;

CourseCategories.defaultProps = {};

CourseCategories.propTypes = {
  course: PropTypes.object,
};
