import React from 'react';

import moment from 'moment';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import {Paperclip} from 'react-bootstrap-icons';
import styles from '../index.module.scss';
import AppsStarredIcon from '@crema/core/AppsStarredIcon';
import AppIconBtn from '@crema/core/AppIconBtn';
import IntlMessages from '@crema/utility/IntlMessages';
import {BiArchiveIn} from 'react-icons/bi';
import {AiOutlineDelete, AiOutlineInfoCircle} from 'react-icons/ai';
import {FiMail} from 'react-icons/fi';
import {
  onUpdateMailFolders,
  onUpdateSelectedMail,
} from '../../../../../redux/actions';
import {useDispatch} from 'react-redux';
import {HiOutlineMailOpen} from 'react-icons/hi';
import {getStringFromHtml} from '@crema/utility/Utils';
import {MdLabelOutline} from 'react-icons/md';
import {Form} from 'react-bootstrap';
const MailListItem = (props) => {
  const {
    mail,
    checkedMails,
    onChangeCheckedMails,
    onChangeStarred,
    onViewMailDetail,
  } = props;

  const dispatch = useDispatch();
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
      }, ${mail.messages[messages - 1].sender.name}(${messages}})`;
    }
  };

  const getDescription = () => {
    return mail.messages[messages - 1].description;
  };

  const onChangeMailFolder = (type) => {
    mail.folderValue = type;
    dispatch(onUpdateMailFolders([mail.id], type));
  };

  const onChangeReadStatus = () => {
    mail.isRead = !mail.isRead;
    dispatch(onUpdateSelectedMail(mail));
  };
  return (
    <div
      key={mail.id}
      className={clsx(
        styles.mailListItem,
        'd-flex flex-row align-items-center justify-content-start item-hover',
        {
          mailRead: mail.isRead,
        },
      )}
      onClick={() => onViewMailDetail(mail)}>
      <div
        className={clsx(
          styles.mailListContent,
          'd-flex align-items-center w-100',
        )}>
        <span
          className={clsx(styles.checkWrapper, 'd-inline-block pe-1 me-2')}
          onClick={(event) => event.stopPropagation()}>
          <Form.Check
            checked={checkedMails.includes(mail.id)}
            onChange={(event) => onChangeCheckedMails(event, mail.id)}
            color='primary'
          />
        </span>
        <span
          className={styles.mailListStarred}
          onClick={(event) => event.stopPropagation()}>
          <AppsStarredIcon
            item={mail}
            onChange={() => onChangeStarred(!mail.isStarred, mail)}
          />
        </span>
        <div
          className={clsx(
            styles.mailListAvatar,
            'p-0 position-relative d-inline-block overflow-hidden text-center',
          )}>
          {getSenderName().charAt(0).toUpperCase()}
        </div>
        <p className={clsx(styles.mailListTitle, 'mb-0 text-truncate')}>
          {getSenderName()}
        </p>
      </div>

      <div
        className={clsx(
          styles.mailListAction,
          'd-flex flex-row align-items-center position-relative',
        )}>
        <div
          className={clsx(
            styles.mailListSub,
            'd-flex align-items-center mb-0 overflow-hidden',
          )}>
          <p className={clsx(styles.mailListSubTitle, 'mb-0')}>
            {mail.subject}
          </p>
          <p className={clsx(styles.mailDescription, 'mb-0 text-truncate')}>
            {getStringFromHtml(getDescription())}
          </p>
        </div>

        {mail.label ? (
          <span className={styles.mailTagView}>
            <span className={styles.mailTag} style={{color: mail.label.color}}>
              <MdLabelOutline />
              <ReactTooltip>{mail.label.name}</ReactTooltip>
            </span>
          </span>
        ) : null}

        <span
          className={clsx(
            styles.mailListTime,
            'ms-auto ps-2 d-flex justify-content-end align-items-center',
          )}>
          {mail.hasAttachments ? <Paperclip /> : null}
          <span className={clsx(styles.mailListDate, 'ps-1')}>
            {onGetMailDate()}
          </span>
        </span>
        <div
          className={clsx(
            styles.mailListBtnAction,
            'd-flex flex-row align-items-center overflow-hidden',
          )}>
          <AppIconBtn
            smallBtn
            title={<IntlMessages id='common.archive' />}
            onClick={() => onChangeMailFolder(127)}>
            <BiArchiveIn />
          </AppIconBtn>

          <AppIconBtn
            smallBtn
            title={<IntlMessages id='common.trash' />}
            onClick={() => onChangeMailFolder(126)}>
            <AiOutlineDelete />
          </AppIconBtn>

          <AppIconBtn
            smallBtn
            title={
              mail.isRead ? (
                <IntlMessages id='mailApp.markAsUnread' />
              ) : (
                <IntlMessages id='mailApp.markAsRead' />
              )
            }
            onClick={onChangeReadStatus}>
            {mail.isRead ? <FiMail /> : <HiOutlineMailOpen />}
          </AppIconBtn>

          <AppIconBtn
            smallBtn
            title={<IntlMessages id='common.reportSpam' />}
            onClick={() => onChangeMailFolder(125)}>
            <AiOutlineInfoCircle />
          </AppIconBtn>
        </div>
      </div>
    </div>
  );
};

export default MailListItem;

MailListItem.defaultProps = {
  labelList: [],
  checkedMails: [],
};

MailListItem.propTypes = {
  mail: PropTypes.object.isRequired,
  labelList: PropTypes.array,
  checkedMails: PropTypes.array,
  onChangeCheckedMails: PropTypes.func,
  onChangeStarred: PropTypes.func,
  onViewMailDetail: PropTypes.func,
};
