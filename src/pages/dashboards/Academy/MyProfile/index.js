import React from 'react';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {AiOutlineUser} from 'react-icons/ai';
import clsx from 'clsx';
import styles from './index.module.scss';

const MyProfile = ({profile}) => {
  const {profile_pic, name, designation, achievements, friends} = profile;
  const {messages} = useIntl();

  return (
    <AppCard
      className='d-flex flex-column'
      heightFull
      title={messages['academy.myProfile']}>
      <div className='d-flex flex-column w-100 h-100'>
        <div className='d-flex flex-column align-items-center justify-content-center flex-grow-1'>
          <img
            className={clsx(styles.myProfileAvatar, 'mb-2 mt-2')}
            src={profile_pic}
          />
          <h3 className={clsx(styles.myProfileTitle, 'mb-1')}>{name}</h3>
          <p className={clsx(styles.myProfileInfo, 'mb-1')}>{designation}</p>
        </div>

        <div
          className={clsx(
            styles.myProfileFooter,
            'd-flex align-items-center justify-content-center',
          )}>
          <div
            className={clsx(
              styles.myProfileFooterItem,
              'd-flex flex-column align-items-center',
            )}>
            <div className={styles.myProfileThumb}>
              <img
                src={'/assets/images/dashboard/academy/achievements.png'}
                alt='achievements'
              />
            </div>
            <h4>{achievements}</h4>
            <p className={clsx(styles.textTruncate, 'text-truncate')}>
              Achievements
            </p>
          </div>
          <div
            className={clsx(
              styles.myProfileFooterItem,
              'd-flex flex-column align-items-center',
            )}>
            <div className='mb-1'>
              <AiOutlineUser style={{fontSize: 34, color: '#FD3A84'}} />
            </div>
            <h4>{friends}</h4>
            <p className={clsx(styles.textTruncate, 'text-truncate')}>
              Friends
            </p>
          </div>
        </div>
      </div>
    </AppCard>
  );
};

export default MyProfile;

MyProfile.defaultProps = {};

MyProfile.propTypes = {
  profile: PropTypes.object,
};
