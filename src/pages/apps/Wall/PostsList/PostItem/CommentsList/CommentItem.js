import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-bootstrap';
import styles from '../../index.module.scss';
import clsx from 'clsx';

const CommentItem = ({item}) => {
  const {author, comment, liked} = item;
  const [isLiked, setIsLiked] = useState(liked);

  const toggleLikeStatus = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div
      className={clsx(
        styles.postCommentItem,
        'position-relative p-0 d-flex align-items-start justify-content-start',
      )}>
      <Image
        roundedCircle
        className={styles.postItemAvatar}
        src={author.profilePic}
      />
      <div className={styles.postCommentItemContent}>
        <div
          className={clsx(styles.postCommentItemContentArea, 'd-inline-block')}>
          <p className='mb-0'>{comment}</p>
        </div>
        <div
          className={clsx(
            styles.postCommentItemAction,
            'd-flex align-items-center',
          )}>
          <span className={isLiked && styles.active} onClick={toggleLikeStatus}>
            Like
          </span>
          <span>Reply</span>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;

CommentItem.propTypes = {
  item: PropTypes.object.isRequired,
};
