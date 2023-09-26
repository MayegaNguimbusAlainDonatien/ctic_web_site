import React, {useState} from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import {HiOutlineReply} from 'react-icons/hi';
import AppsStarredIcon from '@crema/core/AppsStarredIcon';
import {RiShareForwardLine} from 'react-icons/ri';
import renderHTML from 'react-render-html';
import moment from 'moment';
import PropTypes from 'prop-types';
import ReplyMail from './ReplyMail';
import {BiChevronDown} from 'react-icons/bi';
import {getStringFromHtml} from '@crema/utility/Utils';
import {Tooltip, OverlayTrigger, Popover} from 'react-bootstrap';
import styles from '../index.module.scss';
import clsx from 'clsx';
import AppIconBtn from '@crema/core/AppIconBtn';

const MessageItem = ({
  message,
  mailLength,
  index,
  onSubmitMail,
  onChangeStarred,
}) => {
  const [isExpanded, setExpanded] = useState(mailLength === index + 1);
  console.log('message', message);
  const [{isReply, isForward}, onSelectMethod] = useState({
    isReply: false,
    isForward: false,
  });

  const onGetMailDate = (date) => {
    return moment(date).format('lll');
  };

  const mailDescription = (
    <Popover id='popover-positioned-bottom'>
      <Popover.Body>
        <div className='position-relative'>
          <div className='d-flex align-items-center'>
            <span className={styles.mailDescriptionName}>from:</span>
            <span className='d-flex align-items-center'>
              <strong>{message.sender.name}</strong>
              <span style={{fontSize: 12}}> {`<${message.sender.email}>`}</span>
            </span>
          </div>
          <div className='d-flex align-items-center'>
            <span className={styles.mailDescriptionName}>reply-to:</span>
            <span>{message.to[0].email}</span>
          </div>
          <div className='d-flex align-items-center'>
            <span className={styles.mailDescriptionName}>date:</span>
            <span>{onGetMailDate()}</span>
          </div>
          <div className='d-flex align-items-center'>
            <span className={styles.mailDescriptionName}>subject:</span>
            <span>how you get new orders easily</span>
          </div>
        </div>
      </Popover.Body>
    </Popover>
  );

  const getHeaderDescription = () => {
    if (isExpanded) {
      return (
        <div>
          <OverlayTrigger
            placement='bottom'
            overlay={
              <Tooltip id='button-tooltip-2'>
                {message.to.map((user) => user.name)}
              </Tooltip>
            }>
            <span
              className='pointer'
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
              }}>
              {`to ${message.to.map((user) => user.email).toString()}`}
            </span>
          </OverlayTrigger>
          <span style={{marginTop: 5, fontSize: 18}}>
            <OverlayTrigger
              trigger='click'
              placement='bottom'
              overlay={mailDescription}>
              <BiChevronDown />
            </OverlayTrigger>
          </span>
        </div>
      );
    } else {
      return (
        <span
          className={clsx(
            styles.mailDetailUserDescription,
            'text-truncate mb-0 d-block',
          )}>
          {getStringFromHtml(message.description)}
        </span>
      );
    }
  };

  return (
    <div className={styles.mailDetailMessageContent}>
      <div
        className={clsx(
          styles.mailDetailBodyHeader,
          'mb-3 d-flex align-items-center',
        )}
        onClick={() => {
          if (mailLength !== index + 1) setExpanded(!isExpanded);
        }}>
        <div
          className={clsx(styles.mailDetailUser, 'd-flex align-items-center')}>
          <div className={clsx(styles.mailDetailAvatar)}>
            {message.sender.name.charAt(0)}
          </div>
          <div
            className={clsx(styles.mailDetailUserContent, 'position-relative')}>
            <div className='d-flex align-items-center'>
              <h3 className='mb-0'>{message.sender.name}</h3>
              {isExpanded ? (
                <span
                  className={
                    styles.mailDetailBreakAll
                  }>{`<${message.sender.email}>`}</span>
              ) : null}
            </div>
            <div>{getHeaderDescription()}</div>
          </div>
        </div>

        <div
          className={styles.mailDetailBodyHeaderAction}>
          <span className='mb-0 me-1'>{onGetMailDate(message.sentOn)}</span>
          <div
            className={clsx(
              styles.mailDetailSubjectHeaderAction,
              'd-flex align-items-center',
            )}>
            {isExpanded ? (
              <AppIconBtn
                smallBtn
                title={<IntlMessages id='common.reply' />}
                onClick={() =>
                  onSelectMethod({isReply: true, isForward: false})
                }>
                <HiOutlineReply />
              </AppIconBtn>
            ) : null}

            <AppsStarredIcon
              smallBtn
              title={<IntlMessages id='common.starred' />}
              item={message}
              onChange={(status, item, e) => {
                e.stopPropagation();
                onChangeStarred(item, status);
              }}
            />

            {isExpanded ? (
              <AppIconBtn
                smallBtn
                title={<IntlMessages id='common.forward' />}
                onClick={() =>
                  onSelectMethod({isReply: false, isForward: true})
                }>
                <RiShareForwardLine />
              </AppIconBtn>
            ) : null}
          </div>
        </div>
      </div>

      {isExpanded ? (
        <div className={styles.mailDetailDescription}>
          {renderHTML(message.description)}
        </div>
      ) : null}
      {isReply || isForward ? (
        <ReplyMail
          isForward={isForward}
          message={message}
          index={index}
          onDeleteDraft={() =>
            onSelectMethod({
              isReply: false,
              isForward: false,
            })
          }
          onSubmitMail={(message, index) => {
            onSelectMethod({
              isReply: false,
              isForward: false,
            });
            onSubmitMail(message, index);
          }}
        />
      ) : null}
    </div>
  );
};

export default React.memo(MessageItem);

MessageItem.propTypes = {
  message: PropTypes.object.isRequired,
  mailLength: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onSubmitMail: PropTypes.func.isRequired,
  onChangeStarred: PropTypes.func.isRequired,
};
