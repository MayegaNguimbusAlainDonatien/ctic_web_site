import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import UserSocialMediaInfo from './UserSocialMediaInfo';
import styles from '../index.module.scss';
import clsx from 'clsx';

const ListItem = (props) => {
  const {user} = props;

  return (
    <div className={styles.userFlatListItem}>
      <div
        className={clsx(
          styles.userFlatListItemInner,
          'd-flex flex-column flex-sm-row position-relative',
        )}>
        <div className={styles.userFlatListItemThumb}>
          <img src={user.image} alt='user' />
        </div>

        <div
          className={clsx(styles.userFlatListItemContent, 'position-relative')}>
          <h3>
            <span>{user.name}</span>
            <span>
              <IntlMessages id='common.in' />
            </span>
            <span className={styles.userDes}>{user.topic}</span>
          </h3>

          <p className={clsx(styles.userFlatListItemPara, 'mb-3')}>
            {user.information}
          </p>

          <UserSocialMediaInfo user={user} />
        </div>
      </div>
    </div>
  );
};

export default ListItem;

ListItem.propTypes = {
  user: PropTypes.object.isRequired,
};
