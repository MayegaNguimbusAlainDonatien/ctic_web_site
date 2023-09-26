import React from 'react';
import PropTypes from 'prop-types';
import {AiOutlineCheckCircle} from 'react-icons/ai';
import {Image, Button} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const FollowItem = ({item}) => {
  return (
    <div className={clsx(styles.followItem, 'item-hover d-flex')}>
      <Image
        roundedCircle
        className={styles.followAvatar}
        src={item.profilePic}
      />
      <div
        className={clsx(
          styles.followItemInfo,
          'd-flex align-items-center flex-wrap',
        )}>
        <div className={styles.followItemContent}>
          <div className='d-flex align-items-center justify-content-between'>
            <h5 className='mb-0'>{item.title}</h5>
            <AiOutlineCheckCircle className={styles.followItemIcon} />
          </div>
          <p>{item.subTitle}</p>
        </div>
        <Button className={styles.followItemBtn}>Follow</Button>
      </div>
    </div>
  );
};

export default FollowItem;

FollowItem.propTypes = {
  item: PropTypes.object,
};
