import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import {Image, Button} from 'react-bootstrap';
import {AiOutlineClose} from 'react-icons/ai';
import styles from './index.module.scss';
import clsx from 'clsx';

const Profile = (props) => {
  const {data} = props;

  const {messages} = useIntl();
  return (
    <AppCard
      heightFull
      className='wid-profile-card'
      title={messages['common.wall']}
      action={
        <Button className='close-btn'>
          <AiOutlineClose size={20} />
        </Button>
      }>
      <div>
        <div
          className={clsx(
            styles.widProfileInfo,
            'd-flex mb-5 flex-column align-items-center justify-content-center text-center',
          )}>
          <Image
            roundedCircle
            className={clsx(styles.widProfileAvatar, 'mb-5')}
            src={data.image}
          />
          <h3>{data.name}</h3>
        </div>

        <div
          className={clsx(
            styles.widProfileAction,
            'd-flex text-center justify-content-between mb-1',
          )}>
          <div className={styles.widProfileActionItem}>
            <h2>{data.photos}</h2>
            <p className='text-truncate text-center'>
              <IntlMessages id='dashboard.photos' />
            </p>
          </div>
          <div className={styles.widProfileActionItem}>
            <h2>{data.followers}</h2>
            <p className='text-truncate text-center'>
              <IntlMessages id='dashboard.followers' />
            </p>
          </div>
          <div className={styles.widProfileActionItem}>
            <h2>{data.following}</h2>
            <p className='text-truncate text-center'>
              <IntlMessages id='dashboard.following' />
            </p>
          </div>
        </div>
      </div>
    </AppCard>
  );
};

export default Profile;

Profile.propTypes = {
  data: PropTypes.object.isRequired,
};
