import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Members from './Members';
import Labels from './Labels';
import {IoMdAttach} from 'react-icons/io';
import {MdChatBubbleOutline} from 'react-icons/md';
import AppCard from '@crema/core/AppCard';
import styles from './index.module.scss';
import clsx from 'clsx';

const BoardCard = ({
  title,
  attachments = [],
  label = [],
  members,
  date,
  comments,
  onClick,
}) => {
  return (
    <AppCard
      className={clsx(styles.scrumBoardCardDetail, 'p-0 mb-2')}
      onClick={(e) => {
        console.log('clicked');
        onClick(e);
      }}>
      <div
        className={clsx(
          styles.scrumBoardCardDetailHeader,
          'd-flex align-items-center',
        )}>
        <h3 className={styles.scrumBoardCardDetailTitle}>{title}</h3>
        {attachments && attachments.length > 0 ? (
          <div
            className={clsx(
              styles.scrumBoardCardDetailHeaderAction,
              'd-flex align-items-center ms-auto',
            )}>
            <span>{attachments.length}</span>
            <IoMdAttach className={styles.scrumBoardAttachIcon} />
          </div>
        ) : null}
      </div>
      {label.length > 0 ? <Labels labels={label} /> : null}

      <div className='d-flex align-items-center'>
        {members.length > 0 ? <Members members={members} /> : null}

        <span className={styles.scrumBoardCardDetailDate}>
          {date ? moment(date).format('ll').split(',')[0] : null}
        </span>
        {comments && comments.length > 0 ? (
          <div
            className={clsx(
              styles.scrumBoardCardDetailComment,
              'd-flex align-items-center',
            )}>
            <span>{comments.length}</span>
            <MdChatBubbleOutline />
          </div>
        ) : null}
      </div>
    </AppCard>
  );
};

export default BoardCard;

BoardCard.defaultProps = {
  list: null,
};

BoardCard.propTypes = {
  title: PropTypes.string,
  attachments: PropTypes.array,
  label: PropTypes.array,
  members: PropTypes.array,
  date: PropTypes.string,
  comments: PropTypes.array,
  onClick: PropTypes.func,
};
