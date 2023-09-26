import React from 'react';
import {Button} from 'react-bootstrap';
import {AiOutlineDislike, AiOutlineLike, AiFillStar} from 'react-icons/ai';
import styles from '../index.module.scss';
import clsx from 'clsx';

const ReviewCell = () => {
  return (
    <div
      className={clsx(
        styles.productDetailReviewCell,
        'position-relative d-flex align-items-center justify-content-between item-hover',
      )}>
      <div className='d-flex position-relative'>
        <img
          className={styles.productDetailReviewCellAvatar}
          alt='user image'
          src={'/assets/images/avatar/A1.jpg'}
        />

        <div className={styles.productDetailReviewCellContent}>
          <h3>
            <span
              className={clsx(
                styles.productDetailReviewCellBadge,
                'd-flex align-items-center',
              )}>
              5 <AiFillStar />
            </span>
            Parmar Ravikumar
          </h3>
          <p>
            If several languages coalesce, the grammar of the resulting language
          </p>
          <span className={styles.productDetailReviewCellTime}>5 hrs ago</span>
        </div>
      </div>
      <div
        className={clsx(
          styles.productDetailReviewCellAction,
          'd-flex align-items-center flex-row position-absolute',
        )}>
        <div className={styles.liveDislikeWrapper}>
          <AiOutlineLike style={{fontSize: 16}} />
        </div>
        345
        <div className={styles.liveDislikeWrapper}>
          <AiOutlineDislike style={{fontSize: 16}} />
        </div>
        13
      </div>
    </div>
  );
};
export default ReviewCell;
