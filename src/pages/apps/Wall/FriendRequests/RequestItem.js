import React from 'react';
import {getTimeFromNow} from '@crema/utility/Utils';
import PropTypes from 'prop-types';
import {Image} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const RequestItem = ({request}) => {
  return (
    <div className={clsx(styles.requestItem, 'd-flex item-hover')}>
      <Image
        roundedCircle
        className={styles.requestAvatar}
        src={request.profilePic}
      />
      <div
        className={clsx(
          styles.requestItemInfo,
          'd-flex align-items-center flex-wrap justify-content-between',
        )}>
        <div className={styles.requestItemContent}>
          <h4>{request.name}</h4>
          <p>{getTimeFromNow(request.date)}</p>
        </div>
      </div>
    </div>
  );
};

export default RequestItem;

RequestItem.propTypes = {
  request: PropTypes.object,
};
