import React from 'react';
import PropTypes from 'prop-types';
import AppIconButton from '@crema/core/AppIconBtn';
import {AiOutlineMore} from 'react-icons/ai';
import clsx from 'clsx';
import styles from './index.module.scss';

const WhatsHappenItem = ({data}) => {
  const {imgSrc, subTitle, title} = data;

  return (
    <div
      className={clsx(
        styles.whatsHappenItem,
        'item-hover d-flex position-relative',
      )}>
      <div className={clsx(styles.whatsHappenThumb, 'overflow-hidden')}>
        <img src={imgSrc} alt='happen img' />
      </div>
      <div className={styles.whatsHappenItemContent}>
        <p className={clsx(styles.whatsHappenSubTitle, 'text-truncate')}>
          {subTitle}
        </p>
        <h3 className={clsx(styles.whatsHappenTitle, 'text-truncate')}>
          {title}
        </h3>
        <p className={clsx(styles.whatsHappenSpecialText, 'text-truncate')}>
          {data.tag.map((val) => (
            <span key={val.id}>#{val.name}</span>
          ))}
        </p>
      </div>
      <div className={clsx(styles.whatsHappenAction)}>
        <AppIconButton smallBtn className={styles.whatsHappenBtn}>
          <AiOutlineMore />
        </AppIconButton>
      </div>
    </div>
  );
};

export default WhatsHappenItem;

WhatsHappenItem.propTypes = {
  data: PropTypes.object,
};
