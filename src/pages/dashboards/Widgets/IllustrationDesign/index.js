import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import AppCard from '@crema/core/AppCard';
import {AiFillEye, AiFillHeart, AiFillMessage} from 'react-icons/ai';
import styles from './index.module.scss';
import clsx from 'clsx';

const IllustrationDesign = () => {
  return (
    <AppCard heightFull className='d-flex flex-column overflow-hidden'>
      <div className={styles.appCardBody}>
        <div
          className={clsx(
            styles.illustrationImgHeader,
            'd-flex position-relative',
          )}>
          <img
            className='w-100'
            src={'/assets/images/illustration.png'}
            alt='illustration'
          />
          <span className={clsx(styles.illustrationBadge, 'position-absolute')}>
            <IntlMessages id='dashboard.designs' />
          </span>
        </div>

        <div className={styles.illustrationContent}>
          <h4>
            <IntlMessages id='dashboard.illustrationDesign' />
          </h4>
          <hr className='mt-3 mb-3' />
          <div
            className={clsx(
              styles.illustrationAction,
              'd-flex align-items-center justify-content-between',
            )}>
            <div
              className={clsx(
                styles.illustrationActionItem,
                'd-flex text-center align-items-center flex-wrap',
              )}>
              <AiFillEye className={styles.illMiddleIcon} />
              11.7 K
            </div>
            <div
              className={clsx(
                styles.illustrationActionItem,
                'd-flex text-center align-items-center flex-wrap',
              )}>
              <AiFillHeart className={styles.illMiddleIcon} />
              2.6 K
            </div>
            <div
              className={clsx(
                styles.illustrationActionItem,
                'd-flex text-center align-items-center flex-wrap',
              )}>
              <AiFillMessage className={styles.illMiddleIcon} />
              345
            </div>
          </div>
        </div>
      </div>
    </AppCard>
  );
};

export default IllustrationDesign;
