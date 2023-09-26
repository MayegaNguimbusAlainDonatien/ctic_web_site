import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import AppScrollbar from '@crema/core/AppScrollbar';
import AppList from '@crema/core/AppList';
import CommentsListItem from './CommentsListItem';
import styles from '../../index.module.scss';

const CommentsList = ({comments}) => {
  return (
    <>
      {comments.length > 0 ? (
        <div className={styles.todoComment}>
          <h4 className={styles.todoCommentTitle}>
            <IntlMessages id='common.comments' />
          </h4>
          <div className={styles.todoCommentBody}>
            <AppScrollbar className={styles.todoCommentScroll}>
              <div className={styles.todoCommentArea}>
                <AppList
                  data={comments}
                  renderItem={(item, index) => (
                    <CommentsListItem
                      item={item}
                      key={index}
                      isPreviousSender={
                        index > 0 &&
                        comments.sender === comments[index - 1].sender
                      }
                      isLast={
                        (index + 1 < comments.length &&
                          comments.sender !== comments[index + 1].sender) ||
                        index + 1 === comments.length
                      }
                    />
                  )}
                />
              </div>
            </AppScrollbar>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CommentsList;

CommentsList.defaultProps = {
  comments: [],
};

CommentsList.propTypes = {
  comments: PropTypes.array,
};
