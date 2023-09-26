import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import {ListGroup} from "react-bootstrap";
import clsx from "clsx";

const NotificationCell = ({notification}) => {
  return (
    <ListGroup.Item
      className={clsx(styles.hcNotificationCell, 'd-flex align-items-start justify-content-start border-0')}>
      <span
        className={styles.dot}
        style={{
          backgroundColor: notification.color,
        }}
      />
      <div className={styles.hcNotificationContent}>
        <h5>{notification.title}</h5>
        <p>{notification.time}</p>
      </div>
    </ListGroup.Item>
  );
};

export default NotificationCell;

NotificationCell.propTypes = {
  notification: PropTypes.object.isRequired,
};
