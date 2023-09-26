import React from 'react';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import AppMenu from '@crema/core/AppMenu';
import NotificationCell from './NotificationCell';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import AppScrollbar from '@crema/core/AppScrollbar';
import {ListGroup} from "react-bootstrap";

const Notifications = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      cardBodyClass='px-0'
      title={messages['healthCare.notification']}
      extra={<AppMenu/>}>
      <AppScrollbar className={styles.hcNotificationScrollbar}>
        <ListGroup className='border-0'>
          {data.map((notification) => (
            <NotificationCell
              key={notification.id}
              notification={notification}
            />
          ))}
        </ListGroup>
      </AppScrollbar>
    </AppCard>
  );
};

export default Notifications;

Notifications.defaultProps = {
  data: [],
};

Notifications.propTypes = {
  data: PropTypes.array,
};
