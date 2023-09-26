import React from 'react';
import AppCard from '@crema/core/AppCard';
import NotificationCell from './NotificationCell';
import {ListGroup} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';
import AppMenu from '@crema/core/AppMenu';
import AppScrollbar from '@crema/core/AppScrollbar';
import styles from './index.module.scss';

const NotificationsEcom = (props) => {
  const {messages} = useIntl();
  return (
    <AppCard title={messages['eCommerce.notifications']} cardBodyClass='px-0' action={<AppMenu />} heightFull>
      <AppScrollbar className={styles.notificationScrollBar}>
        <ListGroup>
          {props.notifications.map((item) => (
            <NotificationCell key={item.id} item={item} />
          ))}
        </ListGroup>
      </AppScrollbar>
    </AppCard>
  );
};

export default NotificationsEcom;

NotificationsEcom.propTypes = {
  notifications: PropTypes.array,
};
