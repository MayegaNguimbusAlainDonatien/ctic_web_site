import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {FaFacebookF} from 'react-icons/fa';
import styles from '../index.module.scss';
import clsx from 'clsx';
import {Twitter} from 'react-bootstrap-icons';

const UserSocialMediaInfo = ({user}) => {
  return (
    <div
      className={clsx(
        styles.userFlatSocialInfo,
        'd-flex align-items-center justify-content-between flex-wrap justify-content-md-start',
      )}>
      <div
        className={clsx(
          styles.userFlatSocialInfoItem,
          styles.userFlatSocialInfoItemText,
          'd-flex align-items-center',
        )}>
        <span>{user.readTime}</span>
        <IntlMessages id='common.read' />
      </div>
      <div
        className={clsx(
          styles.userFlatSocialInfoItem,
          'd-flex align-items-center',
        )}>
        <span>
          <FaFacebookF />
        </span>
        <span>{user.shares}</span>
        <IntlMessages id='common.shares' />
      </div>
      <div
        className={clsx(
          styles.userFlatSocialInfoItem,
          'd-flex align-items-center',
        )}>
        <span>
          <Twitter size={20} />
        </span>
        <span>{user.retweets}</span>
        <IntlMessages id='common.retweets' />
      </div>
    </div>
  );
};

export default UserSocialMediaInfo;

UserSocialMediaInfo.propTypes = {
  user: PropTypes.object.isRequired,
};
