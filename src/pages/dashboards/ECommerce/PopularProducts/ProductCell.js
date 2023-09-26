import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import clsx from 'clsx';

const ProductCell = ({data}) => {
  return (
    <div
      key={data.id}
      className={clsx(
        styles.productCell,
        'd-flex align-items-center item-hover',
      )}>
      <img className={styles.popularImg} alt='' src={data.icon} />

      <div className={styles.productCellContent}>
        <h3>{data.name}</h3>
        <p>{data.description}</p>
        <p className={styles.price}>
          ${data.price}
          <span style={{textDecoration: 'line-through'}}>${data.mrp}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCell;

ProductCell.propTypes = {
  data: PropTypes.object,
};
