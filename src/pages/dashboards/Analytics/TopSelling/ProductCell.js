import React from 'react';
import AppCircularProgress from '@crema/core/AppCircularProgress';
import {AiOutlineRight} from 'react-icons/ai';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import {ListGroup} from 'react-bootstrap';
import clsx from 'clsx';

const ProductCell = ({data}) => {
  return (
    <ListGroup.Item
      key={data.id}
      className={clsx(styles.topSellingCell, 'd-flex align-items-center')}>
      <div className='d-flex'>
        <img className={styles.topSellingCellImg} alt='' src={data.icon} />

        <div className={clsx(styles.topSellingCellContent, 'flex-grow-1')}>
          <h3>{data.name}</h3>
          <p>{data.description}</p>
          <span className={styles.topSellingPrice}>${data.price}</span>
        </div>
      </div>

      <div
        className={clsx(
          styles.topSellingCellAction,
          'd-none d-sm-flex align-items-center justify-content-end',
        )}>
        <AppCircularProgress
          strokeColor={data.color}
          trailColor='rgb(214, 214, 214)'
          percent={70}
          strokeWidth={10}
          width={50}
        />
        <div
          className={clsx(
            styles.topSellingCellActionInfo,
            'd-flex align-items-center ms-2',
          )}>
          <div>
            <p>Sales</p>
            <span>{data.rate}%</span>
          </div>
          <span className={clsx(styles.topSellingCellActionIcon, 'ms-2')}>
            <AiOutlineRight />
          </span>
        </div>
      </div>
    </ListGroup.Item>
  );
};

export default ProductCell;

ProductCell.propTypes = {
  data: PropTypes.object,
};
