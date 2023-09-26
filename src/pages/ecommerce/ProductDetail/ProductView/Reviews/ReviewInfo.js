import React from 'react';
import AppCircularProgress from '@crema/core/AppCircularProgress';
import {AiFillStar} from 'react-icons/ai';
import {ProgressBar} from 'react-bootstrap';
import styles from '../index.module.scss';
import clsx from 'clsx';

const ReviewInfo = () => {
  return (
    <div className='d-flex flex-column align-items-center flex-md-row align-items-start'>
      <div className={styles.productDetailReviewCircularProgressView}>
        <AppCircularProgress
          className='appCircularProgress'
          trailColor='#d6d6d6'
          strokeColor='#49BD65'
          percent={70}
          strokeWidth={5}
          width={150}>
          <div
            className={clsx(
              styles.productDetailReviewCircularProgressInside,
              'd-flex flex-column align-items-center',
            )}>
            <h3>
              4.8 <AiFillStar />
            </h3>
            <p>Overall rating</p>
          </div>
        </AppCircularProgress>
      </div>
      <div className='d-flex flex-column'>
        <div
          className={clsx(
            styles.productDetailReviewItem,
            'd-flex align-items-center',
          )}>
          <span>5</span>
          <AiFillStar />
          <ProgressBar
            variant='success'
            now={70}
            className={styles.progressBar}
            style={{minWidth: 200, maxWidth: 500}}
          />
          <span className={styles.productDetailReviewResult}>432</span>
        </div>
        <div
          className={clsx(
            styles.productDetailReviewItem,
            'd-flex align-items-center',
          )}>
          <span>4</span>
          <AiFillStar />
          <ProgressBar
            variant='success'
            now={30}
            className={styles.progressBar}
            style={{minWidth: 200, maxWidth: 500}}
          />
          <span className={styles.productDetailReviewResult}>122</span>
        </div>
        <div
          className={clsx(
            styles.productDetailReviewItem,
            'd-flex align-items-center',
          )}>
          <span>3</span>
          <AiFillStar />
          <ProgressBar
            variant='warning'
            now={20}
            className={styles.progressBar}
            style={{minWidth: 200, maxWidth: 500}}
          />
          <span className={styles.productDetailReviewResult}>20</span>
        </div>
        <div
          className={clsx(
            styles.productDetailReviewItem,
            'd-flex align-items-center',
          )}>
          <span>2</span>
          <AiFillStar />
          <ProgressBar
            variant='warning'
            now={30}
            className={styles.progressBar}
            style={{minWidth: 200, maxWidth: 500}}
          />
          <span className={styles.productDetailReviewResult}>3</span>
        </div>
        <div
          className={clsx(
            styles.productDetailReviewItem,
            'd-flex align-items-center',
          )}>
          <span>1</span>
          <AiFillStar />
          <ProgressBar
            variant='danger'
            now={40}
            className={styles.progressBar}
            style={{minWidth: 200, maxWidth: 500}}
          />
          <span className={styles.productDetailReviewResult}>4</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewInfo;
