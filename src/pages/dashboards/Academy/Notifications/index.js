import React from 'react';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {ListGroup} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const NotificationItem = ({notification}) => {
  return (
    <ListGroup.Item
      className={clsx(styles.acaNotificationItem, 'd-flex align-items-center')}>
      <div
        className={clsx(
          styles.acaNotificationThumb,
          'd-flex align-items-center justify-content-center text-center',
        )}
        style={{
          backgroundColor: notification.bgcolor,
          color: notification.color,
        }}>
        {notification.letter}
      </div>
      <div className={styles.acaNotificatioContent}>
        <h3>{notification.content}</h3>
        <p className='text-truncate'>{notification.date}</p>
      </div>
    </ListGroup.Item>
  );
};

const Notifications = ({notifications}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      cardBodyClass='px-0'
      heightFull
      title={messages['academy.notifications']}>
      <ListGroup className='border-0'>
        {notifications.map((data, index) => (
          <NotificationItem key={index} notification={data} />
        ))}
      </ListGroup>
    </AppCard>
  );
};

export default Notifications;

Notifications.propTypes = {
  notifications: PropTypes.array,
};

NotificationItem.propTypes = {
  notification: PropTypes.object,
};
