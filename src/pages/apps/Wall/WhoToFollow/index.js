import React from 'react';
import AppList from '@crema/core/AppList';
import AppCard from '@crema/core/AppCard';
import FollowItem from './FollowItem';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import clsx from 'clsx';

const WhoToFollow = ({whoToFollow}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      className='mb-4'
      title={messages['wall.whoToFollow']}
      action={
        <a
          className={clsx(styles.viewAll, 'text-danger text-decoration-none')}
          href='#/'>
          {messages['common.viewAll']}
        </a>
      }
      footer={
        <div className={styles.whoFollowMoreBtn}>
          <span key={1} className={styles.whoFollowLink}>
            View More
          </span>
        </div>
      }>
      <AppList
        data={whoToFollow}
        className={styles.listWrapper}
        renderItem={(item, index) => <FollowItem key={index} item={item} />}
      />
    </AppCard>
  );
};

export default WhoToFollow;

WhoToFollow.propTypes = {
  whoToFollow: PropTypes.array,
};
