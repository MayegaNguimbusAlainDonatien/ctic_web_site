import React from 'react';
import {useDispatch} from 'react-redux';
import {onUpdatePostStatus} from '../../../../../redux/actions/Wall';
import PropTypes from 'prop-types';
import {
  AiOutlineComment,
  AiOutlineLike,
  AiOutlineShareAlt,
} from 'react-icons/ai';
import styles from '../index.module.scss';
import clsx from 'clsx';

const PostStats = ({post}) => {
  const dispatch = useDispatch();

  const toggleLikeStatus = () => {
    dispatch(onUpdatePostStatus(post.id, !post.liked));
  };

  return (
    <div
      className={clsx(
        styles.postStats,
        'd-flex align-items-center justify-content-around flex-wrap',
      )}>
      <span
        className={clsx(
          styles.postStatsItem,
          post.liked && styles.active,
          'd-flex align-items-center',
        )}
        onClick={toggleLikeStatus}>
        <AiOutlineLike className={styles.postStatsItemIcon} />
        <span className={styles.postStatsItemInfo}>{post.likes} likes</span>
      </span>
      {post.comments.length > 0 && (
        <span
          className={clsx(styles.postStatsItem, 'd-flex align-items-center')}>
          <AiOutlineComment className={styles.postStatsItemIcon} />
          <span className={styles.postStatsItemInfo}>
            {post.comments.length} Comments
          </span>
        </span>
      )}
      <span className={clsx(styles.postStatsItem, 'd-flex align-items-center')}>
        <AiOutlineShareAlt className={styles.postStatsItemIcon} />
        <span className={styles.postStatsItemInfo}>{post.shares} Shares</span>
      </span>
    </div>
  );
};

export default PostStats;

PostStats.propTypes = {
  post: PropTypes.object.isRequired,
};
