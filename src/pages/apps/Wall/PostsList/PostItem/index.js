import React from 'react';
import AppCard from '@crema/core/AppCard';
import {getTimeFromNow} from '@crema/utility/Utils';
import Attachments from './Attachments';
import PostStats from './PostStats';
import AddComment from './AddComment';
import CommentsList from './CommentsList';
import PropTypes from 'prop-types';
import {Image, Button} from 'react-bootstrap';
import {AiOutlineEllipsis} from 'react-icons/ai';
import styles from '../index.module.scss';
import clsx from 'clsx';

const PostItem = ({post, wallData}) => {
  const {owner, message, date, attachments, comments} = post;
  const getTitle = () => (
    <div className='d-flex align-items-center'>
      <Image
        roundedCircle
        className={styles.postItemAvatar}
        src={owner.profilePic}
      />
      <div className={styles.postItemUserInfo}>
        <h3>{owner.name}</h3>
        <p>{getTimeFromNow(date)}</p>
      </div>
    </div>
  );

  return (
    <AppCard
      className={styles.postItemCard}
      title={getTitle()}
      action={
        <Button
          className={clsx(
            styles.postItemActionBtn,
            'd-flex align-items-center justify-content-center',
          )}
          onClick={null}>
          <AiOutlineEllipsis />
        </Button>
      }>
      {message ? <p className='mb-2'>{message}</p> : null}
      <Attachments attachments={attachments} />
      <PostStats post={post} />
      <AddComment postId={post.id} wallData={wallData} />
      {comments.length > 0 && <CommentsList comments={comments} />}
    </AppCard>
  );
};

export default PostItem;

PostItem.propTypes = {
  post: PropTypes.object,
  wallData: PropTypes.object,
};
