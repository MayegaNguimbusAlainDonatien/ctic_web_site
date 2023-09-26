import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import clsx from 'clsx';

const Categories = (props) => {
  const {category} = props;

  return (
    <div className='d-flex justify-content-start align-items-center pb-2'>
      <span
        className={clsx(styles.earningDot, 'd-block me-2')}
        style={{backgroundColor: props.category.colorName}}></span>
      <p className={clsx(styles.earningText, 'mb-0 me-auto')}>{category.name}</p>
      <span className={styles.earningAction}>${category.value}</span>
    </div>
  );
};

export default Categories;

Categories.propTypes = {
  category: PropTypes.object.isRequired,
};
