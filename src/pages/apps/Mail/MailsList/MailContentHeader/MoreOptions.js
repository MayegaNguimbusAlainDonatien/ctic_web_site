import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import {useDispatch, useSelector} from 'react-redux';
import {
  onUpdateMailReadStatus,
  onUpdateMailStarredStatus,
} from '../../../../../redux/actions/MailApp';
import PropTypes from 'prop-types';
import {FiMoreVertical} from 'react-icons/fi';
import {Dropdown} from 'react-bootstrap';
import AppIconBtn from '@crema/core/AppIconBtn';
import clsx from 'clsx';
import styles from '../index.module.scss';
const MoreOptions = (props) => {
  const {checkedMails, setCheckedMails, path} = props;

  let unReadOption;
  let readOption;
  let starredOption;
  let unStarredOption;

  const dispatch = useDispatch();

  const mailList = useSelector(({mailApp}) => mailApp.mailList);

  mailList.map((mail) => {
    if (checkedMails.includes(mail.id) && mail.isRead) {
      unReadOption = true;
    }
    if (checkedMails.includes(mail.id) && !mail.isRead) {
      readOption = true;
    }
    if (checkedMails.includes(mail.id) && mail.isStarred) {
      unStarredOption = true;
    }
    if (checkedMails.includes(mail.id) && !mail.isStarred) {
      starredOption = true;
    }
    return null;
  });

  const onChangeReadStatus = (statusValue) => {
    const status = !!statusValue;
    dispatch(onUpdateMailReadStatus(checkedMails, status));
    setCheckedMails([]);
  };

  const onChangeAllReadStatus = (statusValue) => {
    const status = !!statusValue;
    const checkedMails = mailList.map((mail) => mail.id);
    dispatch(onUpdateMailReadStatus(checkedMails, status));
    setCheckedMails([]);
  };

  const onChangeAllStarred = (status) => {
    const checkedMails = mailList.map((mail) => mail.id);
    dispatch(
      onUpdateMailStarredStatus(checkedMails, status, path[path.length - 1]),
    );
    setCheckedMails([]);
  };

  const onChangeStarredStatus = (status) => {
    dispatch(
      onUpdateMailStarredStatus(checkedMails, status, path[path.length - 1]),
    );
    setCheckedMails([]);
  };

  return (
    <>
      {checkedMails.length > 0 ? (
        <Dropdown align='start'>
          <Dropdown.Toggle
            className={clsx(
              styles.dropdownToggleBtn,
              'p-0 bg-transparent border-0 d-flex align-items-center shadow-none',
            )}>
            <AppIconBtn smallBtn>
              <FiMoreVertical />
            </AppIconBtn>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {readOption ? (
              <Dropdown.Item onClick={() => onChangeReadStatus(1)}>
                <IntlMessages id='mailApp.markAsRead' />
              </Dropdown.Item>
            ) : null}
            {unReadOption ? (
              <Dropdown.Item onClick={() => onChangeReadStatus(0)}>
                <IntlMessages id='mailApp.markAsUnread' />
              </Dropdown.Item>
            ) : null}
            {starredOption ? (
              <Dropdown.Item onClick={() => onChangeStarredStatus(1)}>
                <IntlMessages id='mailApp.markAsImportant' />
              </Dropdown.Item>
            ) : null}
            {unStarredOption ? (
              <Dropdown.Item onClick={() => onChangeStarredStatus(0)}>
                <IntlMessages id='mailApp.markAsNotImportant' />
              </Dropdown.Item>
            ) : null}
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Dropdown align='start'>
          <Dropdown.Toggle
            className={clsx(
              styles.dropdownToggleBtn,
              'p-0 bg-transparent border-0 d-flex align-items-center shadow-none',
            )}>
            <AppIconBtn smallBtn>
              <FiMoreVertical />
            </AppIconBtn>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => onChangeAllReadStatus(1)}>
              <IntlMessages id='mailApp.markAllAsRead' />
            </Dropdown.Item>
            <Dropdown.Item onClick={() => onChangeAllReadStatus(0)}>
              <IntlMessages id='mailApp.markAllAsUnread' />
            </Dropdown.Item>
            <Dropdown.Item onClick={() => onChangeAllStarred(1)}>
              <IntlMessages id='mailApp.markAllAsImportant' />
            </Dropdown.Item>
            <Dropdown.Item onClick={() => onChangeAllStarred(0)}>
              <IntlMessages id='mailApp.markAllAsNotImportant' />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </>
  );
};

export default MoreOptions;

MoreOptions.defaultProps = {
  checkedMails: [],
};

MoreOptions.propTypes = {
  checkedMails: PropTypes.array.isRequired,
  setCheckedMails: PropTypes.func,
  path: PropTypes.any.isRequired,
};
