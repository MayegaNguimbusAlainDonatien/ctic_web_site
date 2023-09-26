import React from 'react';
import PropTypes from 'prop-types';
import {ListGroup} from 'react-bootstrap';
import {Rating} from 'react-simple-star-rating';
import styles from './index.module.scss';
import clsx from 'clsx';

const ReviewItem = ({item}) => {
  return (
    <ListGroup.Item
      className={clsx(
        styles.reviewItem,
        'item-hover d-flex flex-column align-items-start border-0',
      )}
      key={item.id}>
      <div className='w-100 d-flex mb-1 align-items-center'>
        <Rating initialValue={item.rating} size={18} readOnly />
        <span className={styles.reviewTime}>{item.time}</span>
      </div>
      <p>{item.content}</p>
      <span className={styles.reviewItemBy}>- {item.by}</span>
    </ListGroup.Item>
  );
};

export default ReviewItem;

ReviewItem.propTypes = {
  item: PropTypes.object.isRequired,
};
