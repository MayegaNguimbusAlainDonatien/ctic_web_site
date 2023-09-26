import React from 'react';
import AppCard from '@crema/core/AppCard';
import PropTypes from 'prop-types';
import {Image, Button} from 'react-bootstrap';
import styles from './index.module.scss';
import {AiFillCheckCircle} from 'react-icons/ai';
import IntlMessages from '@crema/utility/IntlMessages';
import clsx from 'clsx';

const coverImg = '/assets/images/wall/v-card.jpg';

const VideoCall = ({data}) => {
  const {users, title} = data;

  return (
    <AppCard className={clsx(styles.videoCallCard, 'mb-4')} cardImg={coverImg}>
      <div
        className={clsx(
          styles.videoCallUserInfo,
          'd-flex flex-column align-items-center text-center',
        )}>
        <div className='position-relative'>
          <Image
            roundedCircle
            src='/assets/images/avatar/A5.jpg'
            className={styles.avatar}
            alt='User'
          />
          <span
            className={clsx(
              styles.videoCallUserStatus,
              'position-absolute d-flex align-items-center justify-content-center',
            )}>
            <AiFillCheckCircle />
          </span>
        </div>
        <h3>
          <IntlMessages id='wall.ericBrickey' />
        </h3>
        <p>
          <IntlMessages id='wall.osloNorway' />
        </p>
      </div>
      <div
        className={clsx(
          styles.videoCall,
          'd-flex flex-column align-items-center text-center',
        )}>
        <h5>{title}</h5>
        <div
          className={clsx(
            styles.videoCallAvatarView,
            'd-flex align-items-center',
          )}>
          {users.slice(0, 4).map((user) => (
            <Image
              roundedCircle
              key={user.id}
              className={styles.videoCallAvatar}
              src={user.profilePic}
            />
          ))}
          {users.length > 4 ? (
            <span
              className={clsx(
                styles.videoCallAvatarCount,
                'd-flex align-items-center flex-column justify-content-center position-relative',
              )}>
              +{users.length - 4}
            </span>
          ) : null}
        </div>
        <div
          className={clsx(
            styles.videoCallBtnView,
            'd-flex align-items-center justify-content-center flex-wrap',
          )}>
          <Button type='primary' className=''>
            Group Call
          </Button>
          <Button className={styles.videoCallBtn}>Video Call</Button>
        </div>
      </div>
    </AppCard>
  );
};

export default VideoCall;

VideoCall.propTypes = {
  data: PropTypes.object,
};
