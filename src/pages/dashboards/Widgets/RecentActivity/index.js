import React from 'react';
import NotificationItem from '@crema/core/AppNotifications/NotificationItem';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import {AiOutlineClose} from 'react-icons/ai';
import {Button} from 'react-bootstrap';
import AppScrollbar from '@crema/core/AppScrollbar';
import styles from './index.module.scss';
import AppList from '@crema/core/AppList';

const RecentActivity = (props) => {
  const {data} = props;

  const {messages} = useIntl();
  return (
    <AppCard
      heightFull cardBodyClass='px-0'
      className={styles.appCard}
      title={messages['dashboard.recentActivity']}
      action={
        <Button className='close-btn'>
          <AiOutlineClose size={20} />
        </Button>
      }>
      <AppScrollbar className={styles.recentActivityScrollbar}>
        <AppList
          data={data}
          renderItem={(item) => {
            return <NotificationItem item={item} key={item.id} />;
          }}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default RecentActivity;

RecentActivity.defaultProps = {
  data: [],
};

RecentActivity.propTypes = {
  data: PropTypes.array,
};
