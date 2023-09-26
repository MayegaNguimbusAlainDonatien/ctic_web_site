import React from 'react';
import AppList from '@crema/core/AppList';
import CommentItem from './CommentItem';
import PropTypes from 'prop-types';
import styles from '../../index.module.scss';

const CommentsList = ({comments}) => {
  return (
    <div className={styles.postCommentList}>
      <h3 className={styles.postCommentListTitle}>Comments</h3>
      <AppList
        data={comments}
        renderItem={(item, index) => <CommentItem key={index} item={item} />}
      />
    </div>
  );
};

export default CommentsList;

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired,
};
