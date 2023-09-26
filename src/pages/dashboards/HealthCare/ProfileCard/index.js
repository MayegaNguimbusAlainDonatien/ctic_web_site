import React from 'react';
import AppCard from '@crema/core/AppCard';
import styles from './index.module.scss';
import clsx from 'clsx';
import {Image} from 'react-bootstrap';

const ProfileCard = () => {
  return (
    <AppCard>
      <div className='d-flex flex-column align-items-center justify-content-center'>
        <Image
          style={{height: 80, width: 80}}
          src={'/assets/images/avatar/A10.jpg'}
          roundedCircle
        />
        <h5 className={styles.profileTitle}>Talan Phips</h5>

        <div className='d-flex flex-column w-100'>
          <div className='d-flex align-items-center text-center'>
            <div
              className={clsx(
                styles.profileActionItemContent,
                styles.profileRightBorder,
              )}>
              <h5>24</h5>
              <p>Years</p>
            </div>
            <div className={styles.profileActionItemContent}>
              <h5>A+</h5>
              <p>Blood</p>
            </div>
          </div>
          <div
            className={clsx(
              styles.profileTopBorder,
              'd-flex align-items-center text-center',
            )}>
            <div
              className={clsx(
                styles.profileActionItemContent,
                styles.profileRightBorder,
              )}>
              <h5>185 cm</h5>
              <p>Height</p>
            </div>
            <div className={styles.profileActionItemContent}>
              <h5>84 kg</h5>
              <p>Weight</p>
            </div>
          </div>
        </div>
      </div>
    </AppCard>
  );
};

export default ProfileCard;
