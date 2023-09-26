import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import clsx from 'clsx';

const NotificationCell = ({item}) => {
  return (
    <div
      className={clsx(
        styles.notificationCell,
        'position-relative d-flex align-items-center',
      )}>
      <img
        width='48px'
        height='48px'
        className={clsx(styles.avatar, 'bg-info rounded-circle')}
        src={item.image}
      />
      <div>
        <h4>{item.type}</h4>
        <p>
          <span> {item.name}</span>
          {item.message}
        </p>
      </div>
    </div>
  );
};

export default NotificationCell;

NotificationCell.propTypes = {
  item: PropTypes.object.isRequired,
};
