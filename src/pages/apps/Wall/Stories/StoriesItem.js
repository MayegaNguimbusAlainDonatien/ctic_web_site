import React from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const StoriesItem = ({data}) => {
  const {imgSrc, avatar, title} = data;
  return (
    <div className='position-relative'>
      <img
        className={clsx(styles.storiesCardMedia, 'w-100')}
        src={imgSrc}
        alt='Stories 1'
      />
      <div className={styles.storiesUserInfo}>
        <Image
          roundedCircle
          className={styles.storiesUserInfoAvatar}
          src={avatar}
          alt='Avatar'
        />
        <p className='w-100 text-center mb-0 text-truncate'>{title}</p>
      </div>
    </div>
  );
};

export default StoriesItem;

StoriesItem.propTypes = {
  data: PropTypes.object,
};
