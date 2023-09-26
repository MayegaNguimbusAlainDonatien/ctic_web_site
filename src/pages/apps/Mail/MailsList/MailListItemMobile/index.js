import React from 'react';

import moment from 'moment';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import AppsStarredIcon from '@crema/core/AppsStarredIcon';
import {getStringFromHtml} from '@crema/utility/Utils';
import {CheckLg} from 'react-bootstrap-icons';

const MailListItemMobile = (props) => {
  const {
    mail,
    checkedMails,
    onChangeCheckedMails,
    onChangeStarred,
    onViewMailDetail,
  } = props;

  const messages = mail.messages.length;

  const onGetMailDate = () => {
    const date = mail.messages[messages - 1].sentOn;
    if (
      moment(date, 'ddd, MMM DD, YYYY').format() ===
      moment('ddd, MMM DD, YYYY').format()
    ) {
      return moment(date).format('LT');
    } else {
      return date.split(',')[1];
    }
  };

  const getSenderName = () => {
    if (messages === 1) {
      return mail.messages[0].sender.name;
    } else if (messages === 2) {
      return `${mail.messages[0].sender.name}, ${mail.messages[1].sender.name}(2)`;
    } else {
      return `${mail.messages[0].sender.name}, ${
        mail.messages[messages - 2].sender.name
      }, ${mail.messages[messages - 1].sender.name}(${messages})`;
    }
  };

  const getDescription = () => {
    return mail.messages[messages - 1].description;
  };

  return (
    <div
      key={mail.id}
      className={clsx(
        styles.mailListItemMobile,
        'd-flex flex-row justify-content-start item-hover text-truncate',
        {
          mailRead: mail.isRead,
        },
      )}
      onClick={() => onViewMailDetail(mail)}>
      <div
        className={clsx(
          styles.mailListAvatarMobileView,
          'me-2 d-block p-0 position-relative overflow-hidden text-center',
          {
            checked: checkedMails.includes(mail.id),
          },
        )}
        onClick={(event) => {
          event.stopPropagation();
          onChangeCheckedMails(!checkedMails.includes(mail.id), mail.id);
        }}>
        {checkedMails.includes(mail.id) ? (
          <CheckLg />
        ) : (
          <div
            className={clsx(
              styles.mailListAvatarMobile,
              'me-2 d-block p-0 position-relative overflow-hidden text-center',
            )}>
            {getSenderName().charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      <div
        className={clsx(
          styles.mailListContentMobile,
          'd-flex align-items-center',
        )}>
        <div
          className={clsx(
            styles.mailListMainContentMobile,
            'pe-2 position-relative',
          )}>
          <p className={clsx(styles.mailListTitleMobile, 'mb-0 text-truncate')}>
            {getSenderName()}
          </p>
          <p className={clsx(styles.mailListSubTitleMobile, 'text-truncate')}>
            {mail.subject}
          </p>
          <p
            className={clsx(
              styles.mailDescriptionMobile,
              'mb-0 text-truncate',
            )}>
            {getStringFromHtml(getDescription())}
          </p>
        </div>

        <div
          className={clsx(
            styles.mailListActionMobile,
            'd-flex flex-column align-items-end',
          )}>
          <span
            className={clsx(styles.mailListTimeMobile, 'position-relative')}>
            <span className={clsx(styles.mailListDate, 'ps-1')}>
              {onGetMailDate(mail.sentOn)}
            </span>
          </span>

          <span
            className='position-relative mt-1'
            onClick={(event) => event.stopPropagation()}>
            <AppsStarredIcon
              item={mail}
              onChange={() => onChangeStarred(!mail.isStarred, mail)}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MailListItemMobile;

MailListItemMobile.defaultProps = {
  labelList: [],
  checkedMails: [],
};

MailListItemMobile.propTypes = {
  mail: PropTypes.object.isRequired,
  labelList: PropTypes.array,
  onChangeStarred: PropTypes.func,
  onViewMailDetail: PropTypes.func,
  checkedMails: PropTypes.array,
  onChangeCheckedMails: PropTypes.func,
};
