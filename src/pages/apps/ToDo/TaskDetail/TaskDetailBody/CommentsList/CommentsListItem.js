import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {Image} from "react-bootstrap";
import styles from '../../index.module.scss';

const CommentsListItem = ({item, isPreviousSender, isLast}) => {
  return (
    <div
      className={clsx(
        styles.todoCommentItem,
        isPreviousSender ? styles.hideUserInfo : '',
        isLast ? styles.lastChatMessage : '',
      )}>
      <div className={styles.todoCommentView}>
        <div className={styles.todoCommentUser}>
          {item.image ? (
            <Image src={item.image} className={styles.todoAvatar36} roundedCircle />
          ) : (
            <span className={clsx(styles.todoAvatar36, styles.todoAvatarName)}>
              {item.name[0]}
            </span>
          )}
          <span className={styles.todoName}>{item.name}</span>
        </div>
        <div className={styles.todoCommentMsgView}>
          <span className={styles.todoCommentTime}>{item.date}</span>
          <div className={styles.todoCommentMsg}>
            <p>{item.comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsListItem;

CommentsListItem.propTypes = {
  item: PropTypes.object,
  isPreviousSender: PropTypes.bool,
  isLast: PropTypes.bool,
};
