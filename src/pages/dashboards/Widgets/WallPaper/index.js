import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import AppCard from '@crema/core/AppCard';
import {
  AiFillEye,
  AiFillHeart,
  AiOutlineHeart,
  AiFillMessage,
} from 'react-icons/ai';
import {Image} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const WallPaper = () => {
  return (
    <AppCard
      heightFull
      className={clsx(
        styles.wallpaperCard,
        'wallpaper-card background-image position-relativeZ',
      )}>
      <div
        className={clsx(styles.wallpaperHeader, 'd-flex align-items-center')}>
        <h3 className='text-uppercase'>
          <IntlMessages id='dashboard.latestPost' />
        </h3>
        <div className={styles.wallpaperHeaderAction}>
          <AiOutlineHeart />
        </div>
      </div>

      <div className={styles.wallpaperContent}>
        <Image
          roundedCircle
          className={styles.wallpaperAvatar}
          src='/assets/images/avatar/A1.jpg'
        />

        <h1 className={clsx(styles.wallpaperTitle, 'mb-0')}>
          <IntlMessages id='dashboard.hdColorful' />
        </h1>
        <h1 className={clsx(styles.wallpaperTitle, 'mb-0')}>
          <IntlMessages id='dashboard.wallpaperFree' />
        </h1>

        <div className='d-flex align-items-end'>
          <h1 className={clsx(styles.wallpaperTitle, 'mb-0')}>
            <IntlMessages id='common.download' />
          </h1>
          <div className={clsx(styles.wallpaperContentAction, 'd-flex')}>
            <span
              className={clsx(
                styles.wallpaperContentActionItem,
                'd-flex flex-column align-items-center justify-content-center flex-wrap',
              )}>
              <AiFillEye className={styles.middleIcon} /> 11.7 K
            </span>
            <span
              className={clsx(
                styles.wallpaperContentActionItem,
                'd-flex flex-column align-items-center justify-content-center flex-wrap',
              )}>
              <AiFillHeart className={styles.middleIcon} /> 2.6 K
            </span>
            <span
              className={clsx(
                styles.wallpaperContentActionItem,
                'd-flex flex-column align-items-center justify-content-center flex-wrap',
              )}>
              <AiFillMessage className={styles.middleIcon} /> 345
            </span>
          </div>
        </div>
      </div>
    </AppCard>
  );
};

export default WallPaper;
