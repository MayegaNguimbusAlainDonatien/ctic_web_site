import React from 'react';
import AppCard from '@crema/core/AppCard';
import AppList from '@crema/core/AppList';
import RequestItem from './RequestItem';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import {useIntl} from 'react-intl';
import clsx from 'clsx';

const FriendRequests = ({friendRequests}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      className='mb-4'
      title='Friends'
      action={
        <a
          className={clsx(styles.viewAll, 'text-danger text-decoration-none')}
          href='#/'>
          {messages['common.viewAll']}
        </a>
      }>
      <AppList
        className={styles.listWrapper}
        animation='transition.slideRightBigIn'
        data={friendRequests}
        renderItem={(data, index) => <RequestItem key={index} request={data} />}
      />
    </AppCard>
  );
};

export default FriendRequests;

FriendRequests.propTypes = {
  friendRequests: PropTypes.array,
};
