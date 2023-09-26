import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import clsx from 'clsx';

const Categories = ({data}) => {
  return (
    <div className='d-flex align-items-center flex-wrap justify-content-between'>
      {data.map((item) => {
        return (
          <div className='mb-2 px-3' key={item.id}>
            <div className='d-flex align-items-center'>
              <span
                className={clsx(styles.categoriesDot, 'me-2')}
                style={{backgroundColor: item.color}}
              />
              <p className='mb-1'>{item.visitors}</p>
            </div>
            <p className='text-capitalize text-muted mb-0'>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;

Categories.defaultProps = {
  data: [],
};

Categories.propTypes = {
  data: PropTypes.array,
};
